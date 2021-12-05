import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
import ctaStyles from "../styles/CTA.module.css";

const CTA = () => {
  return (
    <div className={ctaStyles.container}>
      <div className={ctaStyles.flex}>
        <div className={ctaStyles.left}>
          <div className={ctaStyles.points}>
            <div className={ctaStyles.point}>
              <span>
                <BsCheckLg />
              </span>
              <div>
                customized training program specific to your strengths and
                abilities
              </div>
            </div>

            <div className={ctaStyles.point}>
              <span>
                <BsCheckLg />
              </span>
              <div>unlimited workout sessions</div>
            </div>
          </div>
          <h1>New to Atlas Chania?</h1>
          {/* <h4>We are looking forward to meet you!</h4> */}
          <p className={ctaStyles.book}>
            Book a free session and check out the gym!
          </p>
          <div className={ctaStyles.membership}>
            <Link href="#contact">
              <button className={ctaStyles.button}>Start right away</button>
            </Link>
          </div>
        </div>
        <div className={ctaStyles.line}></div>
        <div className={ctaStyles.right}>
          <h1>Working Hours</h1>
          <div>
            <p>Monday - Saturday</p>
            <p>9:00AM - 11:00PM</p>
            <p>Sunday : Closed</p>
            <p>Membership 40€ / month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
