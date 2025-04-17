import { allBlogs } from "contentlayer/generated";
import InsightRoll from "../components/About/InsightRoll";
import HeroPosts from "../components/Home/HeroPosts";
import TreatmentPosts from "../components/Home/TreatmentPosts";
import BeautyAwardPosts from "../components/Home/BeautyAwardPosts";
import FacePosts from "../components/Home/FacePosts";
import BodyPosts from "../components/Home/BodyPosts";
import HairPosts from "../components/Home/HairPosts";
import WellnessPosts from "../components/Home/WellnessPosts";

export default function Home() {
  return (
    <main>
      <InsightRoll blogs={allBlogs} />
      <div className="w-full mt-3 md:mt-6 lg:mt-12 px-5 sm:px-10 md:px-24  sxl:px-32">
        <HeroPosts blogs={allBlogs} />
        <TreatmentPosts blogs={allBlogs} />
        <BeautyAwardPosts blogs={allBlogs} />
        <FacePosts blogs={allBlogs} />
        <BodyPosts blogs={allBlogs} />
        <HairPosts blogs={allBlogs} />
        <WellnessPosts blogs={allBlogs} />
      </div>
    </main>
  );
}
