import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

const Doubt = () => {
  const [groupApi, setGroupApi] = useState([]);
  const take_token = localStorage.getItem("take_token");
  const accessToken = JSON.parse(take_token);
  const [loading, setLoading] = useState(false);
  const groupAxios = axios.create({
    baseURL: process.env.REACT_APP_TOKEN,
    headers: {
      Authorization: `Bearer ${accessToken.access}`,
    },
  });
  useEffect(() => {
    const getGroup = async (url) => {
      const response = await groupAxios.get(url);
      setGroupApi(await response.data);
      setLoading(true);
    };
    getGroup("groups/");
  });
  console.log(groupApi);
  if (!groupApi) return null;
  return (
    <div className="flex flex-col gap-4">
      <div className="filter w-full min-h-[60px] my-2 flex justify-evenly items-center gap-4 flex-wrap">
        {loading ? (
          <table className="w-[90%] text-center">
          <thead>
            <tr className="h-[60px] bg-white">
              <th>№</th>
              <th>Guruh nomi</th>
              <th>Kurslar</th>
              <th>O'qituvchilar</th>
              <th>Vaqti</th>
              <th>Kunlar</th>
            </tr>
          </thead>
          <tbody>
            {groupApi.map((group) => (
              <tr
                key={group.id}
                className="duration-300 h-[60px] bg-gray-300 cursor-pointer hover:bg-gray-100"
              >
                <td>{group.id}</td>
                <td>{group.course.subject.subjectName}</td>
                <td>{group.course.courseName}</td>
                <td>{group.course.courseName}</td>
                <td>{group.groupStatus.statusName}</td>
                <td>
                  {group.groupStartDate}-{group.groupEndDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        ) : <Loading />}
      </div>
    </div>
  );
};

export default Doubt;
