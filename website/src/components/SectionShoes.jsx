// react imports
import { useRef } from 'react';

// Library imports
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

// data import
import { ICONIC_SHOES } from '../data/iconicShoes';

export default function SectionShoes() {
  const containerRef = useRef(null);

  const handleClick = (e) => {
    const direction = e.target.dataset.direction;
    sideScroll(containerRef.current, direction, 15, 400, 10);
    console.log(direction);
  };

  function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;

    const slideTimer = setInterval(function () {
      if (direction === 'left') {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  }
  return (
    <section className="my-12 w-full">
      <h2 className="text-2xl font-bold ml-4 my-8">Always iconic</h2>
      <div className="relative flex">
        <button
          data-direction="left"
          onClick={handleClick}
          className="z-[9999] absolute left-5 top-[40%] shadow-lg p-4 rounded-full bg-gray-100"
        >
          <ChevronLeftIcon className="h-6 w-6 text-blue-800" />
        </button>
        <div
          ref={containerRef}
          className="overflow-scroll grid gap-4 grid-flow-col auto-cols-[50%] md:auto-cols-[20%]"
        >
          {ICONIC_SHOES.map((shoe) => (
            <article className="snap-center">
              <a href={shoe.href}>
                <img className="aspect-square w-full" src={shoe.image} alt="" />
                <h3>{shoe.name}</h3>
              </a>
            </article>
          ))}
        </div>
        <button
          data-direction="right"
          onClick={handleClick}
          className="z-[9999] absolute right-10 top-[40%] shadow-lg p-4 rounded-full bg-gray-100"
        >
          <ChevronRightIcon className="h-6 w-6 text-blue-800 " />
        </button>
      </div>
    </section>
  );
}
