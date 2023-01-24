import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

export const Attendances = () => {
  const [attendences, setAttedences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [curentPage, setCurentPage] = useState(1);
  const attendencesPerPage = 10;
  useEffect(() => {
    const getAttendences = async (url) => {
      const response = await axios.get(url);
      setAttedences(await response.data);
      setLoading(true);
    };
    getAttendences("/jsons/Attendences.json");
  });

  const indexOfLastPage = curentPage * attendencesPerPage;
  const indexOfFirstPage = indexOfLastPage - attendencesPerPage;
  const curentAttendences = attendences.slice(
    indexOfFirstPage,
    indexOfLastPage
  );
  const paginate = (pageNumber) => setCurentPage(pageNumber);
  if (!attendences) return null;
  return (
    <>
      {loading ? (
        <div className="flex">
          <div className="teacher w-[400px] min-h-[calc(100vh-80px)] flex flex-col justify-start px-2 gap-2">
            <div className="teacher-title w-full bg-blue-500 h-[50px] text-white flex items-center flex-col justify-between my-1">
              <h6 className="min-h-[30px] flex items-center">Ustoz</h6>
              <p className="w-full min-h-[20px] bg-gray-100 text-black flex justify-center">
                Sulaymon Eraliyev
              </p>
            </div>
            <div className="cours_group flex w-full">
              <div className="w-1/2 flex items-center flex-col justify-center">
                <h6 className=" bg-blue-500 w-full min-h-[30px] flex justify-center text-white items-center">
                  Kurs
                </h6>
                <p className="w-full bg-gray-100 flex min-h-[20px] justify-center items-center">
                  <select className="w-full bg-gray-100 text-center">
                    <option value="Front End">Front End</option>
                    <option value="Back End">Back End</option>
                  </select>
                </p>
              </div>
              <div className="w-1/2 flex items-center flex-col justify-center">
                <h6 className=" bg-blue-500 w-full min-h-[30px] flex justify-center text-white items-center">
                  Guruh
                </h6>
                <p className="w-full text-center bg-gray-100 min-h-[20px] flex justify-center items-center">
                  <select className="w-full bg-gray-100 text-center">
                    <option value="9">9 guruh</option>
                    <option value="8">8 guruh</option>
                    <option value="7">7 guruh</option>
                  </select>
                </p>
              </div>
            </div>
            <div className="date-attendance w-1/2 text-white flex flex-col justify-center items-center">
              <h6 className="w-full bg-blue-500 min-h-[30px] flex justify-center items-center">
                Davomat sanasi
              </h6>
              <p className="w-full bg-gray-100 min-h-[20px] text-black flex justify-center items-center">
                11.05.2023
              </p>
            </div>
            <div className="class_days-time flex w-full">
              <div className="flex flex-col w-1/2 min-h-[80px]">
                <h6 className="w-full min-h-[30px] flex justify-center items-center text-white bg-blue-500">
                  Dars kunlari
                </h6>
                <p className="flex justify-center items-center bg-gray-100 text-black">
                  Dushanba-Juma
                </p>
              </div>
              <div className="flex flex-col w-1/2 min-h-[80px]">
                <h6 className="w-full min-h-[30px] flex justify-center items-center text-white bg-blue-500">
                  Dars jadvali
                </h6>
                <p className="flex justify-center min-h-[20px] items-center bg-gray-100 text-black">
                  14:00-16:00
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col">
              <div className="came-without-counting flex w-full min-h-[80px]">
                <div className="w-1/2">
                  <h6 className="w-full min-h-[30px] bg-blue-500 flex justify-center items-center text-white">
                    Keldi (1)
                  </h6>
                  <p className="w-full min-h-[20px] bg-gray-100 flex justify-center items-center text-black">
                    0
                  </p>
                </div>
                <div className="w-1/2">
                  <h6 className="w-full min-h-[30px] bg-blue-500 flex justify-center items-center text-white">
                    Hisobsiz (-)
                  </h6>
                  <p className="w-full min-h-[20px] bg-gray-100 flex justify-center items-center text-black">
                    0
                  </p>
                </div>
              </div>
              <div className="came-without-counting flex w-full min-h-[80px]">
                <div className="w-1/2">
                  <h6 className="w-full min-h-[30px] bg-blue-500 flex justify-center items-center text-white">
                    Sababli (0)
                  </h6>
                  <p className="w-full min-h-[20px] bg-gray-100 flex justify-center items-center text-black">
                    0
                  </p>
                </div>
                <div className="w-1/2">
                  <h6 className="w-full min-h-[30px] bg-blue-500 flex justify-center items-center text-white">
                    Sababsiz (x)
                  </h6>
                  <p className="w-full min-h-[20px] bg-gray-100 flex justify-center items-center text-black">
                    0
                  </p>
                </div>
              </div>
            </div>
            <div className="btn_group w-full flex">
              <button className="w-1/2 py-2 flex justify-center items-center bg-red-500 text-white text-md">
                Tozalash
              </button>
              <button className="w-1/2 py-2 flex justify-center items-center bg-green-500 text-white text-md">
                Saqlash
              </button>
            </div>
          </div>
          <div className="students w-[calc(100%-400px)] flex flex-col justify-start items-center min-h-0 px-4 py-2">
            <table className="w-full border border-black text-lg">
              <thead className="bg-white">
                <tr className="h-[50px]">
                  <th>№</th>
                  <th className="text-start border-r border-black">Talaba</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {curentAttendences.map((item) => (
                  <tr
                    className="duration-300 h-[40px] border-b border-black hover:bg-gray-100"
                    key={item.id}
                  >
                    <td>{item.id}</td>
                    <td className="text-start border-r border-black">
                      {item.name}
                    </td>
                    <td>
                      <select className="bg-transparent cursor-pointer text-center">
                        {item.attentdence.map((option) => (
                          <option key={option.id} value={option.title}>
                            {option.title}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              totalAttendences={attendences.length}
              attendencesPerPage={attendencesPerPage}
              paginate={paginate}
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
