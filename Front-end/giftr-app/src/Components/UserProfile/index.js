import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = ({ user, isAuthenticated, isLoading }) => {
  

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
    
       
        <p>{user.email}</p>
      </div>
    )
  );
};

export default UserProfile;