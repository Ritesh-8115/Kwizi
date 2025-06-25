import { useNavigate } from "react-router-dom";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/clerk-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">Welcome to Quizi!</h1>

      <SignedOut>
        <SignInButton>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
        <button onClick={() => navigate("/quiz")} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
          Start Quiz
        </button>
      </SignedIn>
    </div>
  );
}
