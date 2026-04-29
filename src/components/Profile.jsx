import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { setUsername } = useContext(UserContext);

  return (
    <button onClick={() => setUsername("Prateeksha")}>
      Change Name
    </button>
  );
}

export default Profile;