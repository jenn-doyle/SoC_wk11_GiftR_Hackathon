import React from "react";
import css from "./user.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <p className={css.user}>{user.email}</p>
      </div>
    )
  );
};

export default UserProfile;