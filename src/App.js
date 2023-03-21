import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);

  return (
    <>
      <Header />
      {!isUserLoggedIn && <Auth />}
      {isUserLoggedIn && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
