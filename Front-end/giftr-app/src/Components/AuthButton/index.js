import React from "react";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import UserProfile from "../UserProfile";
import css from "./auth.module.css";
import { useAuthContext } from "../../authContext";

function AuthButton() {
  const [isAuthenticated] = useAuthContext();

  if (isAuthenticated) {
    return (
      <div className={css.logout}>
        <LogoutButton />
        <UserProfile />
      </div>
    );
  }
  return (
    <div className={css.login}>
      <LoginButton />
    </div>
  );
}

export default AuthButton;
