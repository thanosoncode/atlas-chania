import { useState, useEffect } from "react";
import { staff } from "../data/staff";

import Image from "next/image";
import {
  FaChevronRight,
  FaChevronLeft,
  FaFacebookF,
  FaInstagramSquare,
} from "react-icons/fa";
import aboutStyles from "../styles/About.module.css";

const About = () => {
  const [people, setPeople] = useState(staff);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  return (
    <div className={aboutStyles.container} id="about">
      {/* <h4>Meet the coaches</h4>
      <h1>Team</h1> */}
      <section className={aboutStyles.flex}>
        <article>
          {/* <h1>Hello, we are Atlas Chania</h1> */}
          <p>
            Atlas Chania is a Powerlifting, Weightlifting, CrossTraining Gym
            located in Chania. <br />
            <p>
              Squat racks, competition benches, olympic weightlifting platforms,
              dozens of barbells, machines, dumbbells, sandbags, assault bikes
              and much more.
            </p>{" "}
            <br />
            <p>
              All training levels are welcome. Whether you are completely new to
              strength training or you are interested in competing in your first
              Olympic Weightlifting competition or Powerlifting meet, Atlas
              Chania can help you achieve your strength goals.
            </p>{" "}
            <br />
            <p>
              No contracts, No start-up fees, No cancellation fees. Come and
              experience just how fun training can be at Atlas Chania!
            </p>
          </p>
        </article>
        <div className={aboutStyles.slider}>
          <button
            className={aboutStyles.buttonLeft}
            onClick={() => setIndex(index - 1)}
          >
            <FaChevronLeft size="25px" />
          </button>
          {people.map((person, personIndex) => {
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <div
                className={aboutStyles["card"] + " " + aboutStyles[position]}
                key={person.id}
              >
                <div className={aboutStyles.img}>
                  <Image src={person.image} layout="fill" alt="" />
                </div>

                <div className={aboutStyles.info}>
                  <h3>{person.name}</h3>
                  <div>
                    <a href={person.fb}>
                      <FaFacebookF />
                    </a>
                  </div>
                </div>
                <div className={aboutStyles.info}>
                  <p>{person.description}</p>
                  <div>
                    <a href={person.ig}>
                      <FaInstagramSquare />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
          <button
            className={aboutStyles.buttonRight}
            onClick={() => setIndex(index + 1)}
          >
            <FaChevronRight size="25px" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
