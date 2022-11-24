import "./App.css";
import SignIn from "./components/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";
import Line from "./components/Line";

function App() {
  const [user] = useAuthState(auth); //userの中に認証状態（T/F）が入っている
  return (
    <div>
      {user ? <Line /> : <SignIn />}
    </div> //userがTならLine処理、FならSignIn処理をする
  );
}

export default App;
