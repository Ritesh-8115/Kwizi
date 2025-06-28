import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useGlobalContext } from "../../context/globalContext";
// import { IOption, IQuestion, IResponse } from "../config/index";
import { flag, next } from "../../utils/Icons";
import toast from "react-hot-toast";
import axios from "axios";

const QuizPage = () => {
  const {
    selectedQuiz,
    quizSetup,
    setQuizSetup,
    setQuizResponses,
    filteredQuestions,
  } = useGlobalContext();

  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [responses, setResponses] = useState([]);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    if (!selectedQuiz) {
      navigate("/");
      return;
    }

    const allQuestions = filteredQuestions.slice(0, quizSetup?.questionCount);
    setShuffledQuestions(shuffleArray([...allQuestions]));
  }, [selectedQuiz, quizSetup, filteredQuestions]);

  useEffect(() => {
    if (shuffledQuestions[currentIndex]) {
      setShuffledOptions(
        shuffleArray([...shuffledQuestions[currentIndex].options])
      );
    }
  }, [shuffledQuestions, currentIndex]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; --i) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleActiveQuestion = (option) => {
    if (!shuffledQuestions[currentIndex]) return;

    const response = {
      questionId: shuffledQuestions[currentIndex].id,
      optionId: option.id,
      isCorrect: option.isCorrect,
    };

    setResponses((prev) => {
      const existingIndex = prev.findIndex(
        (res) => res.questionId === response.questionId
      );

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = response;
        return updated;
      }

      return [...prev, response];
    });

    setActiveQuestion(option);
  };

  const handleNextQuestion = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setActiveQuestion(null);
    } else {
      navigate("/results");
    }
  };

  const handleFinishQuiz = async () => {
    setQuizResponses(responses);

    const score = responses.filter((res) => res.isCorrect).length;

    try {
      await axios.post("/api/user/quiz/finish", {
        categoryId: selectedQuiz.categoryId,
        quizId: selectedQuiz.id,
        score,
        responses,
      });
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }

    setQuizSetup({ questionCount: 1, category: null, difficulty: null });
    navigate("/results");
  };

  if (!selectedQuiz) return null;

  return (
    <div className="py-[2.5rem]">
      {shuffledQuestions[currentIndex] ? (
        <div className="space-y-6">
          <div className="flex flex-col gap-6">
            <p className="py-3 px-6 border-2 text-xl font-bold self-end rounded-lg shadow">
              Question: {currentIndex + 1} /{" "}
              <span className="text-3xl">{shuffledQuestions.length}</span>
            </p>
            <h1 className="mt-4 px-10 text-5xl font-bold text-center">
              {shuffledQuestions[currentIndex].text}
            </h1>
          </div>

          <div className="pt-14 space-y-4">
            {shuffledOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleActiveQuestion(option)}
                className={`relative group py-3 w-full text-center border-2 text-lg font-semibold rounded-lg
                  hover:bg-[rgba(0,0,0,0.03)] transition-all duration-200 ease-in-out
                  ${
                    option.text === activeQuestion?.text
                      ? "bg-green-100 border-green-500 shadow hover:border-green-500"
                      : "shadow"
                  }`}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-lg">No questions found for this quiz</p>
      )}

      <div className="w-full py-[4rem] fixed bottom-0 left-0 border-t-2 flex items-center justify-center">
        <Button
          className="px-10 py-6 font-bold text-white text-xl rounded-xl"
          variant={"green"}
          onClick={() => {
            if (!activeQuestion?.id) {
              new Audio("/sounds/error.mp3").play();
              toast.error("Please select an option to continue");
              return;
            }

            if (currentIndex < shuffledQuestions.length - 1) {
              handleNextQuestion();
            } else {
              handleFinishQuiz();
            }
          }}
        >
          {currentIndex < shuffledQuestions.length - 1 ? (
            <span className="flex items-center gap-2">{next} Next</span>
          ) : (
            <span className="flex items-center gap-2">{flag} Finish</span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default QuizPage;
