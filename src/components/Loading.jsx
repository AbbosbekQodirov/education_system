import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-[cacl(100%-80px)] min-h-[calc(100vh-80px)]">
      <img src={require("../image/loading-gif.gif")} className="w-[50px]" alt="loading" />
    </div>
  );
};

export default Loading;
