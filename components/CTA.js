import { BsCheckLg } from "react-icons/bs";
import ctaStyles from "../styles/CTA.module.css";

const CTA = () => {
  return (
    <div className={ctaStyles.container}>
      <div className={ctaStyles.flex}>
        <div className={ctaStyles.left}>
          <h1>New to Atlas Chania?</h1>
          <h4>We are looking forward to meet you!</h4>
          <span>Book a free session and check out our gym today!</span>
          <div className={ctaStyles.points}>
            <div className={ctaStyles.point}>
              <span>
                <BsCheckLg />
              </span>
              customized training program specific to your needs
            </div>

            <div className={ctaStyles.point}>
              <span>
                <BsCheckLg />
              </span>
              unlimited workout sessions
            </div>
          </div>
          <p>Membership is 40€ / month</p>
          <button className={ctaStyles.button}>Start right away</button>
        </div>
        <div className={ctaStyles.line}></div>
        <div className={ctaStyles.right}>
          <h1>Working Hours</h1>
          <p>Monday - Saturday</p>
          <p>9:00AM - 11:00PM</p>
          <p>Sunday : Closed</p>
        </div>
      </div>
    </div>
  );
};

export default CTA;