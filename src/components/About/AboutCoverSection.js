import Image from "next/image";
import React from "react";
import profileCharacter from "../../../public/logo-main.jpeg";

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center">
        <Image
          src={profileCharacter}
          alt="Beauty World Association"
          className="w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left">
          ABOUT US
        </h2>
        <p>Venture of Chowdhury LLC</p>
        <p className="font-medium capitalize mt-4 text-base">
          Beauty World Association is the ultimate source for everything
          beauty-related. Beauty World Association provides readers with
          comprehensive insights into the latest products, groundbreaking
          innovations, and advanced technologies in the beauty industry. From
          high-performance skincare to in-office treatments, Beauty World
          Association keeps readers informed about the newest options for
          enhancing skin, hair, body, wellness, and smile.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
