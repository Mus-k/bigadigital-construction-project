import "./Expert.css";
import { motion } from "framer-motion";
import { default as link } from "../../assets/icons/linkedin.png";
import { default as face } from "../../assets/icons/facebook-logo.png";
import { default as insta } from "../../assets/icons/instagram.png";
import { default as twit } from "../../assets/icons/twitter.png";
import expertData from "../../api/ExpertData";
const Expert = () => {
  return (
    <section className="expert">
      <h4 className="expertMainTitle">Meet out experts</h4>
      <div className="expertContainer">
        {expertData &&
          expertData.map((info) => (
            <motion.div
              key={info.id}
              className="expertCard"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2, duration: 1.1 }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              <img src={info.image} alt="" width="100%" />

              <div className="expertInfo">
                <h4 className="expertName">{info.name}</h4>
                <p className="expertTitle">{info.title}</p>
              </div>
              <div className="logoDiv">
                <p className="expertLogo">
                  <img src={link} alt="linkedin" width="100%" />
                </p>
                <p className="expertLogo">
                  <img src={twit} alt="twitter" width="100%" />
                </p>
                <p className="expertLogo">
                  <img src={face} alt="facebook" width="100%" />
                </p>
                <p className="expertLogo">
                  <img src={insta} alt="instagram" width="100%" />
                </p>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default Expert;
