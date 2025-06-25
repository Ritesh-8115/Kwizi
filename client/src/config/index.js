const ICategory =  {
  id: string,
  name: string,
  description: string,
  image: string,
  quizzes: IQuiz[],
}

const IQuiz = {
  id: string,
  title: string,
  description?: string | null,
  image?: string | null,
  categoryId: string,
  questions: IQuestion[],
}

const IQuestion = {
  id: string,
  text: string,
  difficulty?: string | null,
  options: IOption[],
}

const IResponse = {
  questionId: string,
  optionId: string,
  isCorrect: boolean,
}

const IOption = {
  id: string,
  text: string,
  isCorrect: boolean,
}

const ICategoryStats = {
  attempts: number,
  averageScore: number | null,
  categoryId: string,
  completed: number,
  id: string,
  lastAttempt: Date,
  userId: string,
  category: ICategory,
}

export default { ICategory, IQuiz, IQuestion, IOption, IResponse, ICategoryStats };
