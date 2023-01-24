import React from "react";

const Groups = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="mt-4 w-[90%] mx-auto">
        <h4>Guruhlar</h4>
      </div>
      <div className="filter w-full min-h-[60px] mb-2 flex justify-evenly items-center gap-4 flex-wrap">
        <table className="w-[90%] text-center">
          <thead>
            <tr className="h-[60px] bg-white/80">
              <th>№</th>
              <th>Guruh nomi</th>
              <th>Kurslar</th>
              <th>O'qituvchilar</th>
              <th>Kunlar</th>
              <th>Soni</th>
              <th>Xona</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="h-[60px] bg-white hover:bg-gray-200 cursor-pointer">
              <td>1</td>
              <td>F5-22</td>
              <td>Front End</td>
              <td>Turdimurod Eshmurodov</td>
              <td>
                Toq kunlar <br /> 14:00 - 16:00
              </td>
              <td>8</td>
              <td>1-qavat. 12-xona</td>
            </tr>
            <tr className="h-[60px] bg-white hover:bg-gray-200 cursor-pointer">
              <td>2</td>
              <td>G6-22</td>
              <td>Grafik Dizayn</td>
              <td>Gulgumbek Odilov</td>
              <td>
                Toq kunlar <br /> 16:00 - 18:00
              </td>
              <td>9</td>
              <td>2-qavat. 4-xona</td>
            </tr>
            <tr className="h-[60px] bg-white hover:bg-gray-200 cursor-pointer">
              <td>3</td>
              <td>B8-22</td>
              <td>Back End</td>
              <td>Sultonbek Salimbekov</td>
              <td>
                Juft kunlar <br /> 10:00 - 12:00
              </td>
              <td>11</td>
              <td>1-qavat. 5-xona</td>
            </tr>
            <tr className="h-[60px] bg-white hover:bg-gray-200 cursor-pointer">
              <td>4</td>
              <td>F8-23</td>
              <td>Front End</td>
              <td>Turdimurod Eshmurodov</td>
              <td>
                Juft kunlar <br /> 16:00 - 18:00
              </td>
              <td>9</td>
              <td>1-qavat. 3-xona</td>
            </tr>
            <tr className="h-[60px] bg-white hover:bg-gray-200 cursor-pointer">
              <td>5</td>
              <td>G5-22</td>
              <td>Grafik Dizayn</td>
              <td>Gulgumbek Odilov</td>
              <td>
                Toq kunlar <br /> 18:00 - 20:00
              </td>
              <td>5</td>
              <td>3-qavat. 11-xona</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Groups;
