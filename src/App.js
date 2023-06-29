import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import data from "./constants/data";
import Review from "./Review";

const App = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index >= data.length - 1) {
      return setIndex(0);
    }
    return setIndex(index + 1);
  };
  const prevSlide = () => {
    if (index <= 0) {
      return setIndex(data.length - 1);
    }
    return setIndex(index - 1);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > data.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Reviews
        </h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        {data.map((person, personIndex) => {
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === data.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <Review key={person.id} position={position}>
              {person}
            </Review>
          );
        })}
        <button className="prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default App;
