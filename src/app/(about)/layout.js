import { allBlogs } from "contentlayer/generated";
import InsightRoll from "@/src/components/About/InsightRoll";

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll blogs={allBlogs} />
      {children}
    </main>
  );
}
