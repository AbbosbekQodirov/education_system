import React, { useContext, useEffect, useState } from "react";
import { GroupAxios } from "../../Api/Axios/AccessToken";
import { LoginContext } from "../../context/LoginContext";

export default function Group() {
  const [group, setGroup] = useState([]);
    const [loading, setLoading] = useState(false);
  const { locationPathname } = useContext(LoginContext);
    
  useEffect(() => {
    const getGroup = async (url) => {
      const response = await GroupAxios.get(url);
      setGroup(await response.data);
      setLoading(true);
    };
    getGroup("/group/1");
  });
  console.log(group);
  if (!group) return null;
  return <div>Group</div>;
}
