import React from "react";

const CallToAction = () => {
  return (
    <div className="mx-[100px] my-[100px] bg-primary bg-opacity-10 h-[446px] px-20 py-10">
      <div className="flex justify-between leading-loose items-center">
        <h2 className="font-medium text-2xl text-primary">We value:</h2>
        <button className="border-primary text-primary border-2 rounded-full px-6 py-2">
          Be a member
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
