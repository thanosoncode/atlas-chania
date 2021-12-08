import Image from "next/image";
import { classes } from "../data/classes";
import classesStyles from "../styles/Classes.module.css";

const Classes = () => {
  return (
    <div className={classesStyles.container}>
      <h4>Get The Best Out For You</h4>
      <h1>Training Styles</h1>
      <div className={classesStyles.flex}>
        {classes.map((item, index) => {
          return (
            <div
              key={index}
              className={classesStyles.card}
              id="classes"
              data-aos={index % 2 == 0 ? "slide-right" : "slide-left"}
            >
              <div className={classesStyles.imgdiv}>
                <Image src={item.image} layout="fill" alt="" />
              </div>
              <div className={classesStyles.infoflex}>
                <div className={classesStyles.infotitle}>
                  <h1>{item.name}</h1>
                  <p>
                    Trained by - <span>{item.trainer}</span>
                  </p>
                </div>
                <div className={classesStyles.price}>Included</div>
              </div>
              <p className={classesStyles.text}>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Classes;
