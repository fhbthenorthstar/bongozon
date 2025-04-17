import React from "react";
import FindDoctor from "./ExpertFilter";

const Banner = () => {
  return (
    <div className="relative">
      <div
        className="place-items-center grid bg-cover bg-center w-full h-[300px] md:h-[500px] lg:h-[650px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/2vThJfp/Doctore-banner.jpg)",
        }}
      ></div>
      <div className="text-neutral-content  lg:absolute top-24 right-0">
        <div className="lg:max-w-[820px] w-full bg-white text-black p-5 md:p-10">
          <h1 className="mb-2 max-sm:text-2xl leading-[60px] md:text-5xl font-semibold">
            Discover the Peak of Beauty and Aesthetic Excellence.
          </h1>
          <p className="mb-5 font-light">
            When it comes to your beauty and aesthetic needs, choosing the right
            doctor is paramount. The NewBeauty Top Doctor program celebrates the
            elite in the medical industry, recognizing only those who have
            achieved the highest standards of excellence in their field.
            Selecting a NewBeauty Top Doctor ensures you are in the most capable
            and prestigious hands.
          </p>
          <button className="bg-black max-sm:mb-3 text-sm uppercase font-medium text-white hover:bg-red-500 duration-200 py-2 px-4 lg:py-3 lg:px-8 mr-3">
            Learn more
          </button>
          <button className="text-black uppercase text-sm duration-200 font-medium hover:border-black hover:text-black lg:py-3 lg:px-8 border py-2 px-4">
            <span className="text-red-500">Doctore :</span> find out if you
            quality
          </button>
        </div>
      </div>
      <FindDoctor />
    </div>
  );
};

export default Banner;
