import React from "react";
import { FaUsers } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import { ImEye } from "react-icons/im";
import { GiPerson } from "react-icons/gi";

const CallToAction = () => {
  return (
    <div className="md:mx-[100px] my-[100px] bg-primary bg-opacity-10 h-auto w-auto md:h-[446px] px-20 py-10">
      <div className="flex justify-between leading-loose items-center">
        <h2 className="font-medium text-2xl text-primary">We value:</h2>
        <button
          className="hidden md:inline border-primary text-primary border-2 rounded-full 
                    px-6 py-2"
        >
          Be a member
        </button>
      </div>
      <div className="flex py-10 mx-auto flex-col md:flex-row items-center md:space-x-6 lg:space-x-10 h-auto">
        {/* Value 1 */}
        <div className="space-y-4 flex flex-col items-center md:items-start text-darkAccent w-auto">
          <FaUsers className="h-16 text-primary w-16" />
          <h1 className="font-semibold">Team work</h1>
          <p className="text-center md:text-start">
            We are bringing together women in our community to work together and
            empower each other.
          </p>
        </div>
        {/* Value 2 */}
        <div className="space-y-4 flex flex-col items-center md:items-start text-darkAccent w-auto">
          <AiOutlineRise className="h-16 text-primary w-16" />
          <h1 className="font-semibold">Technical Growth</h1>
          <p className="text-center md:text-start">
            We provide technical and non-technical sessions to help our members
            grow their skills.
          </p>
        </div>
        {/* Value 3 */}
        <div className="space-y-4 flex flex-col items-center md:items-start text-darkAccent w-auto">
          <ImEye className="h-16 text-primary w-16" />
          <h1 className="font-semibold">Visibility</h1>
          <p className="text-center md:text-start">
            We create visibility for our members through volunteer opportunities
            and speaking sessions.
          </p>
        </div>
        {/* Value 4 */}
        <div className="space-y-4 flex flex-col items-center md:items-start text-darkAccent w-auto">
          <GiPerson className="h-16 text-primary w-16" />
          <h1 className="font-semibold">Leadership</h1>
          <p className="text-center md:text-start">
            Our events provide an opportunity for members to volunteer, manage
            and organise break out sessions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
