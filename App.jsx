import {
  SignIn,
  SignUp,
  UserButton,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import { Routes, Route } from "react-router-dom";

function ProtectedPage({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedPage>
            <h1>Dashboard</h1>
            <UserButton />
          </ProtectedPage>
        }
      />
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  );
}

export default App;
