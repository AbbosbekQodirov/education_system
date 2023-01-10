import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GroupAxios } from "../../Api/Axios/AccessToken";
import { LoginContext } from "../../context/LoginContext";
import Loading from "../Loading";
const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

  const { locationPathname } = useContext(LoginContext);
  useEffect(() => {
    const getGroup = async (url) => {
      const response = await GroupAxios.get(url);
      setGroups(await response.data);
      setLoading(true);
    };
    getGroup(locationPathname);
  });
  console.log(groups);
  if (!groups) return null;
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
                  <th>Vaqti</th>
                  <th>Kunlar</th>
                </tr>
              </thead>
              <tbody>
                {groups.map((group) => (
                  <tr
                    key={group.id}
                    className="duration-300 h-[60px] bg-gray-300 cursor-pointer hover:bg-gray-100"
                  >
                    <td>{group.id}</td>
                    <td>{group.course.subject.subjectName}</td>
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
export default Groups;
