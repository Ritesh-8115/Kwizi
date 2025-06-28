import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useGlobalContext } from "../../context/globalContext";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { play } from "../../utils/Icons";

const QuizSetupPage = () => {
  const navigate = useNavigate();
  const { quizSetup, setQuizSetup, selectedQuiz, setFilteredQuestions } =
    useGlobalContext();

  const [localQuestionCount, setLocalQuestionCount] = useState(
    quizSetup?.questionCount || 1
  );

  useEffect(() => {
    if (!selectedQuiz) {
      navigate("/");
    }
  }, [selectedQuiz]);

  useEffect(() => {
    const filtered = selectedQuiz?.questions?.filter((q) => {
      return (
        !quizSetup?.difficulty ||
        quizSetup?.difficulty === "unspecified" ||
        q?.difficulty?.toLowerCase() === quizSetup?.difficulty?.toLowerCase()
      );
    });

    setFilteredQuestions(filtered);
  }, [quizSetup]);

  const handleQuestionChange = (e) => {
    const value = parseInt(e.target.value, 10);
    const maxQuestions = selectedQuiz?.questions.length || 1;
    const newCount =
      isNaN(value) || value < 1 ? 1 : Math.min(value, maxQuestions);

    setLocalQuestionCount(newCount);
    setQuizSetup((prev) => ({ ...prev, questionCount: newCount }));
  };

  const handleDifficultyChange = (difficulty) => {
    setQuizSetup((prev) => ({ ...prev, difficulty }));
  };

  const startQuiz = async () => {
    const selectedQuestions = selectedQuiz?.questions
      .slice(0, quizSetup?.questionCount)
      .filter((q) => {
        return (
          quizSetup?.difficulty === "unspecified" ||
          !quizSetup?.difficulty ||
          q.difficulty?.toLowerCase() === quizSetup?.difficulty?.toLowerCase()
        );
      });

    if (selectedQuestions.length > 0) {
      try {
        await axios.post("/api/user/quiz/start", {
          categoryId: selectedQuiz?.categoryId,
          quizId: selectedQuiz?.id,
        });
      } catch (error) {
        console.log("Error starting quiz: ", error);
      }

      navigate("/quiz");
    } else {
      toast.error("No questions found for the selected criteria");
    }
  };

  return (
    <div>
      <div className="py-[6rem] w-[50%] fixed left-1/2 top-[45%] translate-x-[-50%] translate-y-[-50%] p-6 border-2 rounded-xl shadow mx-auto">
        <h1 className="text-4xl font-bold mb-4">Quiz Setup</h1>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="questionCount" className="text-lg">
              Number of Questions
            </Label>
            <Input
              type="number"
              min={1}
              id="questionCount"
              value={localQuestionCount}
              onChange={handleQuestionChange}
              max={selectedQuiz?.questions?.length}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="text-lg">
              Category
            </Label>
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder={selectedQuiz?.categoryId || "Category"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Knowledge</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="history">History</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="difficulty" className="text-lg">
              Difficulty
            </Label>
            <Select
              defaultValue="unspecified"
              onValueChange={(value) => handleDifficultyChange(value)}
            >
              <SelectTrigger id="difficulty">
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unspecified">Unspecified</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="w-full py-[4rem] flex items-center justify-center fixed bottom-0 left-0 bg-white border-t-2">
        <Button
          variant={"blue"}
          className="px-10 py-6 font-bold text-white text-xl rounded-xl"
          onClick={startQuiz}
        >
          <span className="flex items-center gap-2">{play} Start</span>
        </Button>
      </div>
    </div>
  );
};

export default QuizSetupPage;
