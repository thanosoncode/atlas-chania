import { staff } from "../data/staff";

import Image from "next/image";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import aboutStyles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={aboutStyles.container}>
      <h4>Meet the coaches</h4>
      <h1>Our Team</h1>
      <section className={aboutStyles.flex}>
        <article>
          <h1>Hello, we are Atlas Chania</h1>
          <p>
            Atlas Chania is Powerlifting, Weightlifting, CrossTraining Gym
            located in Chania. <br />
            <p>
              Squat racks, competition benches, olympic weightlifting platforms,
              dozens of barbells, specialty bars, machines, dumbbells, sandbags,
              assault bikes and much more.
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
        {staff.map((person, index) => {
          return (
            <div className={aboutStyles.card} key={index}>
              <div className={aboutStyles.img}>
                <Image src={person.image} width="300px" height="450px" />
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
      </section>
    </div>
  );
};

export default About;
