import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect } from "react";

function InitUserStats() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    const registerUser = async () => {
      try {
        await axios.post("http://localhost:5000/api/user/register", {
          userId: user.id,
          email: user.primaryEmailAddress.emailAddress,
        });
      } catch (err) {
        console.error("Failed to initialize user stats", err);
      }
    };

    if (isLoaded && user) {
      registerUser();
    }
  }, [isLoaded, user]);

  return null; // this just runs the logic
}
export default InitUserStats;