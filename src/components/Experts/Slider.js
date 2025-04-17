// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { LeftArrow, RightArrow } from "../Icons";

// const Slider = ({ photos }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? photos.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative w-full mx-auto">
//       <div className="overflow-hidden relative h-80">
//         {photos?.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
//               index === currentIndex ? "block" : "hidden"
//             }`}
//           >
//             <Image
//               src={image.url}
//               alt={image.title}
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white"
//       >
//         <RightArrow />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-dark-800 text-white"
//       >
//         <LeftArrow />
//       </button>
//     </div>
//   );
// };

// export default Slider;

"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import { LeftArrow, RightArrow } from "../Icons";

const Slider = ({ photos }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={emblaRef} className="embla w-full">
        <div className="embla__container flex">
          {photos?.map((image, index) => (
            <div
              key={index}
              className="embla__slide flex justify-center items-center flex-shrink-0 w-full" // Set your desired height
            >
                <div className="relative w-full h-[600px]">
                  <Image
                    src={image.url}
                    alt={image.title || `Photo ${index + 1}`}
                    fill
                    className="object-contain rounded-lg"
                    priority={index === 0}
                  />
                </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white text-white"
      >
        <LeftArrow />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white text-white"
      >
        <RightArrow />
      </button>
    </div>
  );
};

export default Slider;
