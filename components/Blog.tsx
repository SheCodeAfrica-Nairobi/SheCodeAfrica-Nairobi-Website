import Link from "next/link";
import React from "react";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
const Blog = ({ posts }: any) => {
  return (
    <div className="space-y-5 md:p-10 md:flex items-center justify-center">
      <div className="space-y-5">
        <h1 className="text-primary text-2xl text-center md:text-4xl leading-relaxed">
          Recent Blog Posts
        </h1>
        <div className="md:grid grid-cols-[1fr_2fr] gap-x-20 md:pt-20">
          <div className="space-y-5">
            <div className="">
              <div className="hidden relative z-0 h-[354px] bg-primary w-[584px]"></div>
              <div className="bg-[#FFF7FC] bg-opacity-[98%] p-5 rounded-lg space-y-3 md:w-96">
                <button className=" bg-primary text-sm font-light  rounded-full text-white px-3 py-2 text-center">
                  #Read
                </button>
                <h1 className="font-semibold text-lg">{posts[0].title}</h1>
                <p className="leading-relaxed font-light text-base">

                </p>
                <div className="flex items-center justify-between">
                  <h2 className="italic">By Essy</h2>
                  <a href={posts[0].url} target="_blank"> <BsArrowUpRightSquareFill className=" text-primary h-8 w-8 rounded-full" /></a>
                </div>
              </div>
            </div>

            <h1 className="text-lg text-primary font-normal md:hidden">
              <Link href="/">See more articles...</Link>
            </h1>
          </div>
          <div className="hidden md:block">
            <ul className="space-y-6">
              {posts.map((post: any) => (
                <li
                  key={post.id}
                  className="text-2xl duration-300 ease-out cursor-pointer  border-b-2 border-opacity-[98%] border-[#FFF7fc] p-3 flex
                        hover:scale-105 justify-between  leading-relaxed items-center tracking-wide"
                >
                  <div>
                    <a href={post.url} target="_blank">  {post.title}</a>
                  </div>{" "}
                  <div>
                    <BsArrowUpRightSquareFill className="rounded-full h-8 w-8 text-[#FFF7FC] " />{" "}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
