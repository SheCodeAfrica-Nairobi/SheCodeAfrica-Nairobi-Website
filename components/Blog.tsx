import Link from "next/link";
import React from "react";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
const Blog = ({ posts }: any) => {
  return (
    <div className="items-center justify-center space-y-5 md:flex md:p-10">
      <div className="space-y-5">
        <h1 className="text-center text-2xl leading-relaxed text-primary md:text-4xl">Recent Blog Posts</h1>
        <div className="grid-cols-[1fr_2fr] gap-x-20 md:grid md:pt-20">
          <div className="space-y-5">
            <div className="">
              <div className="relative z-0 hidden h-[354px] w-[584px] bg-primary"></div>
              <div className="space-y-3 rounded-lg bg-[#FFF7FC] bg-opacity-[98%] p-5 md:w-96">
                <button className=" rounded-full bg-primary px-3  py-2 text-center text-sm font-light text-white">
                  #Read
                </button>
                <h1 className="text-lg font-semibold">{posts[0].title}</h1>
                <p className="text-base font-light leading-relaxed"></p>
                <div className="flex items-center justify-between">
                  <h2 className="italic">By Essy</h2>
                  <a href={posts[0].url} target="_blank">
                    {" "}
                    <BsArrowUpRightSquareFill className=" h-8 w-8 rounded-full text-primary" />
                  </a>
                </div>
              </div>
            </div>

            <h1 className="text-lg font-normal text-primary md:hidden">
              <Link href="/">See more articles...</Link>
            </h1>
          </div>
          <div className="hidden md:block">
            <ul className="space-y-6">
              {posts.map((post: any) => (
                <li
                  key={post.id}
                  className="flex cursor-pointer items-center justify-between  border-b-2 border-[#FFF7fc] border-opacity-[98%] p-3 text-2xl
                        leading-relaxed tracking-wide  duration-300 ease-out hover:scale-105">
                  <div>
                    <a href={post.url} target="_blank">
                      {" "}
                      {post.title}
                    </a>
                  </div>{" "}
                  <div>
                    <BsArrowUpRightSquareFill className="h-8 w-8 rounded-full text-[#FFF7FC] " />{" "}
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
