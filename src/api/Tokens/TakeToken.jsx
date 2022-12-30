import axios from "axios";
import React, { useEffect, useState } from "react";

const TakeToken = () => {
  const [takeToken, setTakeToken] = useState();
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("/take_token");
        setTakeToken(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);
  console.log(takeToken);
  return <div>Take Token</div>;
};

export default TakeToken;
