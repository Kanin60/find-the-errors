import { useState } from "react";
import { LoginForm } from "./components/login/LoginForm";
import { Profile } from "./components/profile/Profile";
import { MessageBoard } from "./components/messageBoard/MessageBoard";

function App() {
  const [userData, setUserData] = useState(null);

  const logout = () => {
    setUserData(null);
  };
  // console.log('Hvad er userData?', userData);

  return (
    <>
      {userData ? (
        <>
          <Profile logout={logout} user={userData} />
          <MessageBoard user={userData} />
        </>
      ) : (
        <LoginForm setUserData={setUserData} />
      )}
    </>
  );
}

export default App;
