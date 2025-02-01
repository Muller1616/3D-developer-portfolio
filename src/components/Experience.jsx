import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
//import 'react-vertical-timeline-component/styles.min.css';
import { motion } from 'framer-motion';

import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const ExperienceCard = ({ experience }) =>(
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1838',
        color: '#fff',
        borderRadius: '8px',
        padding:'20px',
        width:'70%',// Rounded edges
      }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={<span className="text-gray-300 text-sm">{experience.date}</span>}
      iconStyle={{
        background: experience.iconBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '80%',
        width: '50px',
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-12 h-12 object-contain rounded-full" // Adjusted for proper scaling
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-gray-400 text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="list-disc ml-5 space-y-3 text-gray-200">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-[14px] tracking-wide leading-relaxed">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I Did So Far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
      </motion.div>
      <div className="mt-10 flex flex-row justify-center">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
