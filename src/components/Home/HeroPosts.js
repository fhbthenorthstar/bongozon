import { heroBlogs } from "@/src/utils";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const HeroPosts = ({ blogs }) => {
  const posts = heroBlogs(blogs);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-10 text-center text-dark dark:text-light">
      {posts.map((post, index) => (
        <div
          key={index}
          className={` group ${
            index === 1 ? "lg:col-span-2 lg:row-span-2 " : ""
          }`}
        >
          <Link
            href={post.url}
            className="mt-2 cursor-pointer overflow-hidden group"
          >
            <div className="overflow-hidden rounded-xl mb-2">
              <Image
                src={post.cover.filePath.replace("../public", "")}
                placeholder="blur"
                blurDataURL={post.cover.blurhashDataUrl}
                alt={post.title}
                width={post.cover.width}
                height={post.cover.height}
                sizes="(max-width: 1180px) 100vw, 50vw"
                className="aspect-square w-full h-full object-cover object-center group-hover:scale-110 transition-all ease duration-500 position-relative"
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
  );
};

export default HeroPosts;
