import React, { useState } from "react";
import "./Accordion.css";
import { motion } from "framer-motion";

const AccordionComponent = () => {
  const [tabActive, setTabActive] = useState(1);

  function tabs(TabsIndex) {
    setTabActive(TabsIndex);
    console.log(TabsIndex);
  }
  return (
    <div className="tabs-container">
      <div className="bloc-tabs">
        <div
          className={tabActive === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => tabs(1)}
        >
         Our Mission
        </div>
        <div
          className={tabActive === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => tabs(2)}
        >
        Our Vision
        </div>
        <div
          className={tabActive === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => tabs(3)}
        >
          Our Value
        </div>
      </div>
      <div className="content-tabs">
        <div className={tabActive === 1 ? "content active-content" : "content"}>
          <motion.p
        initial="hidden"
          whileInView="visible"
          viewport={{ once: true}}
          transition={{ delay: 0.2, duration: 1.1 }}
          variants={{
            hidden: {
              opacity: 0,
              scale: 0,
            },
            visible: {
              opacity: 1,
              scale: 1,
            },
          }}>
            To maintain the highest levels of professionalism, integrity,
            honesty and fairness in our relationships with our suppliers,
            subcontractors, professional associates and customers
          </motion.p>
        </div>
        <div className={tabActive === 2 ? "content active-content" : "content"}>
          <motion.p
        initial="hidden"
          whileInView="visible"
          viewport={{ once: true}}
          transition={{ delay: 0.2, duration: 1.1 }}
          variants={{
            hidden: {
              opacity: 0,
              scale: 0,
            },
            visible: {
              opacity: 1,
              scale: 1,
            },
          }}>
          Our Client's satisfaction is the essence of our success and as such we will continually strive to provide each and every Client with an extraordinary experience, while delivering every project on time, within budget and with the highest level of quality and professionalism.
          </motion.p>
        </div>
        <div className={tabActive === 3 ? "content active-content" : "content"}>
          <motion.p
        initial="hidden"
          whileInView="visible"
          viewport={{ once: true}}
          transition={{ delay: 0.2, duration: 1.1 }}
          variants={{
            hidden: {
              opacity: 0,
              scale: 0,
            },
            visible: {
              opacity: 1,
              scale: 1,
            },
          }}>
          CityBuilder Construction takes pride in quality workmanship, quality people and quality materials. Utilizing the latest technologies.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
