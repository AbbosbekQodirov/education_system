import React from "react";

export default function Teachers() {
  return (
    <div className="flex flex-col gap-2">
      <div className="mt-4 w-[90%] mx-auto">
        <h4>Ustozlar</h4>
      </div>
      <div className="filter w-full min-h-[60px] mb-2 flex justify-evenly items-center gap-4 flex-wrap">
        <table className="w-[90%] text-center">
          <thead>
            <tr className="h-[60px] bg-white/80">
              <th>№</th>
              <th>Ism va Familiya</th>
              <th>Telefon raqam</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[60px] bg-white hover:bg-gray-200 cursor-pointer">
              <td>1</td>
              <td>Turdimurod Eshmurodov</td>
              <td>
                <a href="tel:+998911457894">+998911457894</a>
              </td>
            </tr>
            <tr className="h-[60px] bg-white hover:bg-gray-200 cursor-pointer">
              <td>2</td>
              <td>Gulgumbek Odilov</td>
              <td>
                <a href="tel:+998945652345">+998945652345</a>
              </td>
            </tr>
            <tr className="h-[60px] bg-white hover:bg-gray-200 cursor-pointer">
              <td>3</td>
              <td>Sultonbek Salimbekov</td>
              <td>
                <a href="tel:+998993023234">+998993023234</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
