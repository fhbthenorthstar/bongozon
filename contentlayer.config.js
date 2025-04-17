import {
  makeSource,
  defineDocumentType,
  defineNestedType,
} from "@contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import GithubSlugger from "github-slugger";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "products/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: true,
    },
    photoGalleries: { type: "list", of: PhotoGallery },
    description: {
      type: "string",
      required: true,
    },
    image: { type: "image" },
    cover: { type: "image" },
    isPublished: {
      type: "boolean",
      default: true,
    },
    author: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
    filterTag: {
      type: "string",
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    toc: {
      type: "json",
      resolve: async (doc) => {
        const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(regulrExp)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;

            return {
              level:
                flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          }
        );

        return headings;
      },
    },
  },
}));

const Photo = defineNestedType(() => ({
  name: "Photo",
  fields: {
    url: { type: "string", required: true },
  },
}));

const PhotoGallery = defineNestedType(() => ({
  name: "PhotoGallery",
  fields: {
    photos: { type: "list", of: Photo, required: true },
  },
}));


const codeOptions = {
  theme: "github-dark",
  grid: false,
};

export default makeSource({
  /* options */
  disableImportAliasWarning: true,
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
      [rehypePrettyCode, codeOptions],
    ],
  },
});


// const Doctor = defineDocumentType(() => ({
//   name: "Doctor",
//   filePathPattern: "doctors/**/index.mdx",
//   contentType: "mdx",
//   fields: {
//     name: { type: "string", required: true },
//     jobTitle: { type: "string", required: true },
//     publishedAt: {
//       type: "date",
//       required: true,
//     },
//     image: { type: "image", required: true },
//     quote: { type: "string", required: true },
//     photoGalleries: { type: "list", of: PhotoGallery },
//     telephone: { type: "string", required: false },
//     website: { type: "string", required: false },
//     facebook: { type: "string", required: false },
//     instagram: { type: "string", required: false },
//     youtube: { type: "string", required: false },
//     linkedin: { type: "string", required: false },
//     twitter: { type: "string", required: false },
//     streetAddress: { type: "string", required: true },
//     addressLocality: { type: "string", required: true },
//     addressRegion: { type: "string", required: true },
//     addressCountry: { type: "string", required: true },
//     postalCode: { type: "string", required: true },
//     direction: { type: "string", required: false },
//   },
//   computedFields: {
//     url: {
//       type: "string",
//       resolve: (doc) => `/${doc._raw.flattenedPath}`,
//     },
//     readingTime: {
//       type: "json",
//       resolve: (doc) => readingTime(doc.body.raw),
//     },
//     toc: {
//       type: "json",
//       resolve: async (doc) => {
//         const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
//         const slugger = new GithubSlugger();
//         const headings = Array.from(doc.body.raw.matchAll(regulrExp)).map(
//           ({ groups }) => {
//             const flag = groups?.flag;
//             const content = groups?.content;

//             return {
//               level:
//                 flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
//               text: content,
//               slug: content ? slugger.slug(content) : undefined,
//             };
//           }
//         );

//         return headings;
//       },
//     },
//   },
// }));
