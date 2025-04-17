import { format, parseISO } from "date-fns";
import React from "react";
import ViewCounter from "../Blog/ViewCounter";
import {
  Facebook,
  Instagram,
  LinkedinIcon,
  TwitterIcon,
  Website,
} from "../Icons";

const ExpertDetails = ({ doctor, slug: doctorSlug }) => {
  return (
    <div className="px-2  md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10 rounded-lg">
      <span className="m-3">{doctor.jobTitle}</span>
      <span className="m-3">
        <ViewCounter slug={doctorSlug} />
      </span>
      <div className="m-3">{doctor.readingTime.text}</div>
      <a href={`tel:${doctor.telephone}`} className="m-3">
        {doctor.telephone}
      </a>
      <div className="flex gap-2">
        <a href={doctor?.website} target="_blank">
          <Website />
        </a>
        <a href={doctor?.facebook} target="_blank">
          <Facebook />
        </a>
        <a href={doctor?.instagram} target="_blank">
          <Instagram />
        </a>
        <a href={doctor?.twitter} target="_blank">
          <TwitterIcon />
        </a>
        <a href={doctor?.linkedin} target="_blank">
          <LinkedinIcon />
        </a>
      </div>
    </div>
  );
};

export default ExpertDetails;
