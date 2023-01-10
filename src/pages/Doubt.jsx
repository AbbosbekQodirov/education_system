import React, { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { GroupAxios } from "../Api/Axios/AccessToken";

const Doubt = () => {
  const [groupApi, setGroupApi] = useState([]);
    const [loading, setLoading] = useState(false);


  useEffect(() => {
    const getGroup = async (url) => {
      const response = await GroupAxios.get(url);
      setGroupApi(await response.data);
      setLoading(true);
    };
    getGroup("groups/");
  });
  if (!groupApi) return null;
  return (
    <>
      {loading ? (
        <div className="flex flex-col gap-4">
          <div className="filter w-full min-h-[60px] my-2 flex justify-evenly items-center gap-4 flex-wrap">
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
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Doubt;
