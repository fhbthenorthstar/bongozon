"use client";
import Link from "next/link";
import React from "react";

const InsightRoll = ({ blogs }) => {
  return (
    <div className="w-full bg-orange-200 dark:bg-white text-black dark:textlight whitespace-nowrap overflow-hidden">
      <div className="animate-roll w-full py-2 sm:py-3 flex items-center justify-center capitalize font-normal tracking-wider text-xs sm:text-base">
        {blogs.map((blog, i) => (
          <div key={i}>
            <Link href={blog.url} className="text-xs">
              {blog.title} <span className="px-4">|</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;
