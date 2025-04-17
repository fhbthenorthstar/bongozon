import { allDoctors, allBlogs } from "contentlayer/generated";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const blogUrls =
    allBlogs?.map((post) => ({
      url: `${baseUrl}${post.url}`,
      lastModified: new Date(),
    })) ?? [];
  const doctorUrls =
    allDoctors?.map((doc) => ({
      url: `${baseUrl}${doc.url}`,
      lastModified: new Date(),
    })) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/about",
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/contact",
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/doctors",
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/categories/all",
      lastModified: new Date(),
    },
    ...blogUrls,
    ...doctorUrls,
  ];
}
