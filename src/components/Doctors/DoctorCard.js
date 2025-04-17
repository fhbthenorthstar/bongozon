import Image from "next/image";
import Link from "next/link";
import React from "react";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="flex flex-col xl:flex-row  border dark:border-light rounded-sm">
      <div className="h-72 xl:w-56 xl:h-auto relative">
        <Image
          src={doctor.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={doctor.image.blurhashDataUrl}
          alt={doctor.name}
          width={197}
          height={270}
          className="rounded-sm w-full h-full object-cover object-top absolute top-0 left-0 bottom-0 right-0 m-auto"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className=" flex-1">
          <h2
            className={`font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl dark:text-light `}
          >
            <span
              className="bg-gradient-to-r from-accent/50 dark:from-accentDark/50 to-accent/50 dark:to-accentDark/50 bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {doctor.name}
            </span>
          </h2>
          <span className="uppercase text-dark dark:text-light font-semibold text-lg sm:text-base">
            {doctor.jobTitle}
          </span>
          <hr className="my-2 border-t-2 border-dark dark:border-white" />
          <span className="text-dark dark:text-light font-semibold text-xs sm:text-sm">
            {doctor.quote}
          </span>
          <br />
          <a
            href={`tel:${doctor.telephone}`}
            className="uppercase text-dark dark:text-light font-semibold text-xs sm:text-sm"
          >
            PHONE: {doctor.telephone}
          </a>
          <br />
          <a
            target="_blank"
            href={doctor.direction}
            className="uppercase text-dark dark:text-light font-semibold text-xs sm:text-sm"
          >
            OFFICE:{" "}
            {`${doctor.streetAddress}, ${doctor.addressLocality}, ${doctor.addressRegion}, ${doctor.postalCode}`}
          </a>
        </div>
        <div className="pt-3">
          <Link
            href={doctor.url}
            className="rounded-sm text-light px-4 py-2 bg-accent dark:bg-accentDark dark:text-dark inline-block"
          >
            view profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
