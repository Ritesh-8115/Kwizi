import express from "express"
import Quiz from '../models/Quiz.js'
import Category from '../models/Category.js';
import CategoryStat from '../models/CategoryStat.js';

const router = express.Router();

router.get('/api/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

router.get('/api/categories/:categoryId/quizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find({ categoryId: req.params.categoryId });
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch quizzes' });
  }
});

router.post('/api/quiz/start', async (req, res) => {
  const { userId, categoryId } = req.body;

  try {
    let stat = await CategoryStat.findOne({ userId, categoryId });

    if (!stat) {
      stat = await CategoryStat.create({
        userId,
        categoryId,
        attempts: 1,
        completed: 0,
        averageScore: 0,
        lastAttempt: new Date(),
      });
    } else {
      stat.attempts++;
      stat.lastAttempt = new Date();
      await stat.save();
    }

    res.json(stat);
  } catch (err) {
    res.status(500).json({ error: 'Failed to start quiz' });
  }
});

router.post('/api/quiz/finish', async (req, res) => {
  const { userId, categoryId, score } = req.body;

  try {
    let stat = await CategoryStat.findOne({ userId, categoryId });

    if (!stat) {
      stat = await CategoryStat.create({
        userId,
        categoryId,
        attempts: 1,
        completed: 1,
        averageScore: score,
        lastAttempt: new Date(),
      });
    } else {
      const totalScore = (stat.averageScore || 0) * stat.completed + score;
      stat.completed++;
      stat.averageScore = totalScore / stat.completed;
      stat.lastAttempt = new Date();
      await stat.save();
    }

    res.json(stat);
  } catch (err) {
    res.status(500).json({ error: 'Failed to finish quiz' });
  }
});

export default router;
