import "./carousel.scss";

import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import "./carousel.scss";
import data from "./data";
function Carousel() {
  const [ people, setPeople ] = useState(data);

  const [ index, setIndex ] = useState(0);

  const [ size, setSize ] = useState(null);

  const mobileBreakingPoint = 640;
  const tabletBreakingPoint = 800;

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    checkSize();
    console.log("WINDOW", window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log("WINDOW", window.innerWidth);

    // Return Function runs when component is removed in order to not make multiple resizes on every reload
    return () => {
      console.log("WINDOW", window);
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > cloned.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = cloned.length - 1;
      }
      return index;
    });
  };

  // const checkSize = () => {
  // 	setSize(window.innerWidth);
  // };
  // useEffect(() => {
  // 	window.addEventListener('resize', checkSize);
  // 	// Return Function runs when component is removed in order to not make multiple resizes on every reload
  // 	return () => {
  // 		window.removeEventListener('resize', checkSize);
  // 	};
  // }, []);

  useEffect(
    () => {
      let slider = setInterval(nextSlide, 3000);
      // Must clear each interval otherwise they will get confused with button presses and will eventually break app
      return () => clearInterval(slider);
    },
    [ index ]
  );

  const cloned = people.slice();

  if (people.length === 4) {
    const firstClone = people[0];
    const secondClone = people[1];
    const secondToLastClone = people[people.length - 2];
    const lastClone = people[people.length - 1];

    cloned.unshift(lastClone);
    cloned.unshift(secondToLastClone);
    cloned.unshift(secondClone);
    cloned.unshift(firstClone);
    cloned.push(firstClone);
    cloned.push(secondClone);
    cloned.push(secondToLastClone);
    cloned.push(lastClone);
  }

  if (people.length === 3) {
    const firstClone = people[0];
    const secondClone = people[1];
    const lastClone = people[people.length - 1];

    cloned.unshift(lastClone);
    cloned.unshift(secondClone);
    cloned.unshift(firstClone);
    cloned.push(firstClone);
    cloned.push(secondClone);
    cloned.push(lastClone);
  }

  // setPeople(cloned);

  //   console.log("SIZE", size);

  // console.log('PEOPLE', people);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {cloned.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            size >= mobileBreakingPoint &&
            (personIndex === index + 1 ||
              (personIndex === 0 && index === cloned.length - 1))
          ) {
            position = "activeSlide2";
          }

          if (
            size >= tabletBreakingPoint &&
            (personIndex === index + 2 ||
              (personIndex === 0 && index === cloned.length - 2) ||
              (personIndex === 1 && index === cloned.length - 1))
          ) {
            position = "activeSlide3";
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === cloned.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article
              className={`${position} IDX: ${index} PDX: ${personIndex}`}
              key={`person-${personIndex + 1}`}
            >
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              {/* <FaQuoteRight className="icon" /> */}
            </article>
          );
        })}
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Carousel;
