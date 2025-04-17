import { faceBlogs } from "@/src/utils";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../utils/section-heading";

const FacePosts = ({ blogs }) => {
  const posts = faceBlogs(blogs);
  return (
    <section className="w-full">
     <SectionHeading heading="Face"/>
      {/* Fix the grid below */}
      <div className="grid grid-cols-1 lg:grid-cols-3 text-dark dark:text-light text-center">
           {posts.map((post, index) => (
        <div key={index} className={`border-red-100 group ${index === 0 ? "lg:col-span-2 mb-5 flex flex-col justify-center item-center lg:row-span-2 lg:pr-10 lg:mr-10 lg:border-r" : ""} ${index === 1 ? "lg:pb-10 lg:border-b": index === 2 ? "pt-10":""}`}>
        <Link href={post.url} className="mt-2 group cursor-pointer overflow-hidden">
          <div className="overflow-hidden rounded-xl mb-2">
           <Image
            src={post.image.filePath.replace("../public", "")}
            placeholder="blur"
            blurDataURL={post.image.blurhashDataUrl}
            alt={post.title}
            width={post.image.width}
            height={post.image.height}
            className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
            sizes="(max-width: 1180px) 100vw, 50vw"
          />
         </div>
         <span className="inline-block w-full uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
                {post.tags[0]}
              </span>
                    <h2
               className={`${
                  index === 0
                    ? "font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl dark:text-light"
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

export default FacePosts;
