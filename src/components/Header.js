import { useDispatch, useSelector } from "react-redux";
import { userAuthActions } from "../store/user-auth-slice";

import classes from "./Header.module.css";

const Header = () => {
  const dispatchFunction = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);

  const signOutHandler = () => {
    dispatchFunction(userAuthActions.signOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/">О нас</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
          {isUserLoggedIn && (
            <li>
              <a href="/">Личный кабинет</a>
            </li>
          )}
          {isUserLoggedIn && (
            <li>
              <button onClick={signOutHandler}>Выйти</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
