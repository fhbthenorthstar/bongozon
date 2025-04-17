import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};

export const heroBlogs = (blogs) =>
  blogs.filter((blog) => blog?.filterTag === "hero");

export const treatmentBlogs = (blogs) =>
  blogs.filter((blog) => blog?.filterTag === "tote-bags");

export const beautyAwardBlogs = (blogs) =>
  blogs.filter((blog) => blog?.filterTag === "beautyAwards");

export const faceBlogs = (blogs) =>
  blogs.filter((blog) => blog?.filterTag === "face");

export const bodyBlogs = (blogs) =>
  blogs.filter((blog) => blog?.filterTag === "body");

export const hairBlogs = (blogs) =>
  blogs.filter((blog) => blog?.filterTag === "hair");

export const wellnessBlogs = (blogs) =>
  blogs.filter((blog) => blog?.filterTag === "wellness");

const featuredBlogs = (blogs) =>
  blogs.filter((blog) => blog?.filterTag === "featured");
