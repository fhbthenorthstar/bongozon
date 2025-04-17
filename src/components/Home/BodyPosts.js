import { bodyBlogs } from "@/src/utils";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../utils/section-heading";

const BodyPosts = ({ blogs }) => {
  const posts = bodyBlogs(blogs);
  return (
    <section className="w-full py-12">
     <SectionHeading heading="Body"/>
      {/* Fix the grid below */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-10 text-center">
        {posts.map((post, index) => (
          <div key={index} 
        className={`group text-dark dark:text-light ${index === 1 ? "lg:col-span-2 lg:row-span-2 " : ""} ${index === 0 ? "flex flex-col items-center justify-center h-full mt-10" : ""} ${index === 2 ? "flex flex-col items-center justify-center h-full mt-6" : ""}`}>
          <Link href={post.url} className="mt-2 cursor-pointer overflow-hidden">
            <div className="overflow-hidden mb-2 rounded-xl">
              <Image
                src={post.image.filePath.replace("../public", "")}
                placeholder="blur"
                blurDataURL={post.image.blurhashDataUrl}
                alt={post.title}
                width={post.image.width}
                height={post.image.height}
                className={`w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300 ${index === 2 ? "h-full lg:h-[200px] flex flex-col justify-center item-center":""} ${index === 0 ? "h-full lg:h-[200px] flex flex-col justify-center item-center":""}`}
              />
            </div>
             <span className="inline-block w-full uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
                {post.tags[0]}
              </span>
                    <h2
                className={`${
                  index === 1
                    ? "font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl dark:text-light mt-2 sm:mt-4"
                    : "font-semibold capitalize text-base sm:text-lg"
                }`}
              >
                <span
                  className="bg-gradient-to-r from-accent/50 dark:from-accentDark/50 to-accent/50 dark:to-accentDark/50 bg-[length:0px_6px]
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
                >
                  {post.title}
                </span>
              </h2>
             <span className="inline-block w-full capitalize text-gray dark:text-light/50 font-medium  text-sm">
                {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
              </span>
            </Link>
        </div>
      ))}
      </div>
    </section>
  );
};

export default BodyPosts;
