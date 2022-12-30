import axios from "axios";
import React, { useEffect, useState } from "react";

const RefreshToken = () => {
  const [refreshToken, setRefreshToken] = useState();
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("/refresh_token");
        setRefreshToken(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);
  console.log(refreshToken);
  return <div>Refresh Token</div>;
};

export default RefreshToken;
