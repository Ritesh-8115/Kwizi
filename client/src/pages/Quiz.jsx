import axios from "axios";
import { useEffect, useState } from "react";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/quiz")
      .then(res => setQuestions(res.data));
  }, []);

  return (
    <div className="p-8">
      {questions.map((q, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="font-semibold">{q.question}</h2>
          <ul>
            {q.options.map((opt, i) => (
              <li key={i}>- {opt}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
