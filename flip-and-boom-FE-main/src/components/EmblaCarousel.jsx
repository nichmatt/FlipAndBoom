import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export const EmblaCarousel = ({ message, setMessage }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  function prev() {
    if (message > 0) {
      setMessage(message - 1);
      scrollPrev();
    }
  }
  function next() {
    if (message < 3) {
      setMessage(message + 1);
      scrollNext();
    }
  }

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  return (
    <div className="embla w-[45%] mx-auto h-full flex-col">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container pr-[5px]">
          <div className="embla__slide">
            <img
              src="/assets/tutorial1/tutorial-01.svg"
              alt=""
              className="mx-auto w-[290px]"
            />
          </div>
          <div className="embla__slide">
            <img
              src="/assets/tutorial1/tutorial-02.svg"
              alt=""
              className="mx-auto w-[290px]"
            />
          </div>
          <div className="embla__slide">
            <img
              src="/assets/tutorial1/tutorial-03.svg"
              alt=""
              className="mx-auto pr-[20px]  h-[250px] pt-[75px]"
            />
          </div>
          <div className="embla__slide">
            <img
              src="/assets/tutorial1/tutorial-04.svg"
              alt=""
              className="mx-auto  pr-[20px] pt-[50px]  w-[290px]"
            />
          </div>
        </div>
      </div>
      <div className="flex mx-auto w-[75px] p-[5px] bg-[rgba(0,0,0,0.50)] justify-center items-center mb-[20px] z-20 ">
        <button
          className="embla__prev hover:text-[orange] "
          // className="embla__prev my-[10px] px-[30px] absolute left-[-25px] top-[135px]"
          onClick={prev}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="px-4 text-orange-400">{message + 1}</div>
        <button
          className="embla__next hover:text-[orange] "
          // className="embla__next my-[10px] px-[30px] absolute left-[335px] hover:text-[orange] top-[135px]"
          onClick={next}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};
