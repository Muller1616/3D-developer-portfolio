import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { Tilt } from 'react-tilt';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        initial="hidden"
        animate="show"
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-ellipsis text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      {/* Fix: Ensure the heading animation triggers */}
      <motion.div variants={textVariant()} initial="hidden" animate="show">
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        animate="show"
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a professional Frontend Developer.
        I’m a dedicated and passionate full-stack web development, I enjoy creating seamless and engaging digital experiences. My journey into technology has been fueled by a love for solving complex problems and turning ideas into reality through innovative solutions.😎 <br /> <br />
        Beyond web development, I’m equally passionate about mobile app development. Currently, I’m diving deep into frameworks like Flutter, aiming to build user-friendly and efficient applications that make a difference in people’s lives. 🏇 <br /><br />
        But my interests don’t stop there! I have a creative side, and I thoroughly enjoy video editing. Crafting compelling visual stories allows me to express ideas in ways that resonate with others, blending my technical skills with creativity. 🤠 <br /><br />
        Problem-solving has always been at the core of who I am. Whether it’s debugging a piece of code, optimizing a system, or tackling real-world challenges, I thrive on finding solutions that work. This mindset has shaped my academic and personal growth, pushing me to continuously learn and improve my flexible skills.💪 <br /> <br />
        My portfolio showcases a diverse range of projects that highlight my skills and creativity. I am dedicated to delivering high-quality work and continuously pushing the boundaries of web development, design, and editing. 👨‍💻 <br /><br />
        I am excited to collaborate on new projects and contribute my expertise to create engaging and immersive digital experiences.🧑‍🧑‍🧒‍🧒
      </motion.p>

      {/* Fix: Ensure service cards are displayed */}
      {services && services.length > 0 ? (
        <motion.div
          variants={fadeIn("", "", 0.2, 1)}
          initial="hidden"
          animate="show"
          className="mt-20 flex flex-wrap gap-10"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </motion.div>
      ) : (
        <p className="text-white mt-10">No services available</p>
      )}
    </>
  );
};

export default SectionWrapper(About, "about");
