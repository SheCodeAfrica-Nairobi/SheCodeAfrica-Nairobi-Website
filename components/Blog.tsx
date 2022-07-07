import Link from "next/link";
import React from "react";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
const Blog = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-primary text-2xl">Recent Blog Posts</h1>
      <div className="space-y-5 md:hidden ">
        <div className="bg-[#FFF7FC] bg-opacity-[98%] p-5 rounded-lg space-y-3">
          <button className="bg-primary text-sm font-light  rounded-full text-white px-3 py-2 text-center">
            #mentalhealth
          </button>
          <h1 className="font-semibold text-lg">Relogiously Bound</h1>
          <p className="leading-relaxed font-light text-base">
            I did not know religious trauma was a thing until I started
            experiencig it myself. I grew up in...
          </p>
          <div className="flex items-center justify-between">
            <h2 className="italic">By Essy</h2>
            <BsArrowUpRightSquareFill className=" text-primary h-8 w-8 rounded-full" />
          </div>
        </div>

        <h1 className="text-lg text-primary font-normal">
          <Link href="/">See more articles...</Link>
        </h1>
      </div>
    </div>
  );
};

export default Blog;
