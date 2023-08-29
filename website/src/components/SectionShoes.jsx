// Library imports
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

// react imports
import { useRef } from 'react';

export default function SectionShoes() {
  const containerRef = useRef(null);

  const handleClick = (e) => {
    const direction = e.target.dataset.direction;
    sideScroll(containerRef.current, direction, 25, 200, 10);
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
    <section className="my-12">
      <h2 className="text-2xl font-bold mx-4 my-8">Always iconic</h2>
      <div className="relative flex p-0">
        <button
          data-direction="left"
          onClick={handleClick}
          className="z-[9999] absolute left-5 top-[40%] shadow-lg p-4 rounded-full bg-gray-100"
        >
          <ChevronLeftIcon className="h-6 w-6 text-blue-800" />
        </button>
        <div
          ref={containerRef}
          className="overflow-x-scroll grid grid-flow-col auto-cols-[50%] lg:auto-cols-[30%] "
        >
          <article className="snap-center">
            <img
              className="aspect-square"
              src="/Images/iconic/shoes.webp"
              alt=""
            />
            <h3>Air Jordan 1</h3>
          </article>
          <article className="snap-center">
            <img
              className="aspect-square"
              src="/Images/iconic/shoes.webp"
              alt=""
            />
            <h3>Air Jordan 1</h3>
          </article>
          <article className="snap-center">
            <img
              className="aspect-square"
              src="/Images/iconic/shoes.webp"
              alt=""
            />
            <h3>Air Jordan 1</h3>
          </article>
          <article className="snap-center">
            <img
              className="aspect-square"
              src="/Images/iconic/shoes.webp"
              alt=""
            />
            <h3>Air Jordan 1</h3>
          </article>
          <article className="snap-center">
            <img
              className="aspect-square"
              src="/Images/iconic/shoes.webp"
              alt=""
            />
            <h3>Air Jordan 1</h3>
          </article>
          <article className="snap-center">
            <img
              className="aspect-square"
              src="/Images/iconic/shoes.webp"
              alt=""
            />
            <h3>Air Jordan 1</h3>
          </article>
          <article className="snap-center">
            <img
              className="aspect-square"
              src="/Images/iconic/shoes.webp"
              alt=""
            />
            <h3>Air Jordan 1</h3>
          </article>
          <article className="snap-center">
            <img
              className="aspect-square"
              src="/Images/iconic/shoes.webp"
              alt=""
            />
            <h3>Air Jordan 1</h3>
          </article>
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
