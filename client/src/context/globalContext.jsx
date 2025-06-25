import React, { createContext, useContext, useEffect, useState } from "react";
import useCategories from "../hooks/useCategories";
import axios from "axios";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const { loading, categories } = useCategories();

  const [quizSetup, setQuizSetup] = useState({
    questionCount: 1,
    category: null,
    difficulty: null,
  });

  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizResponses, setQuizResponses] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    const registerUser = async () => {
      try {
        await axios.post("http://localhost:5000/api/user/register");
        // console.log("User registered");
      } catch (err) {
        console.error("Registration failed", err);
      }
    };

    registerUser();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        categories,
        quizSetup,
        setQuizSetup,
        selectedQuiz,
        setSelectedQuiz,
        quizResponses,
        setQuizResponses,
        filteredQuestions,
        setFilteredQuestions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
