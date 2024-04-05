import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaBootstrap,
  FaFlask,
  FaPython,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiFlutter
} from 'react-icons/si';

//  about data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={Date.now()} />,
          <FaCss3 key={Date.now()} />,
          <FaJs key={Date.now()} />,
          <FaPython key={Date.now()} />,
          <FaFlask key={Date.now()} />,
          <FaReact key={Date.now()} />,
          <SiTailwindcss key={Date.now()} />,
          <FaBootstrap key={Date.now()} />,
        ],
      },
      {
        title: 'Mobile Development',
        icons: [
          <FaJs key={Date.now()} />,
          <FaReact key={Date.now()} />,
          <SiFlutter key={Date.now()} />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key={Date.now()} />,
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: '3rd Place Sustainable Development Track KomodoHacks Hackathon',
        stage: '2022',
      },
      {
        title: '2nd Place Web Development Competition FASTTEKNO ITB Stikom Bali',
        stage: '2022',
      },
      {
        title: '2nd Place Web Development Competition Dies Natalis ITTelkom Surabaya',
        stage: '2021',
      },
      {
        title: '3nd Place Web Development Competition NGOBAR Universitas Islam As-Syafiyyah',
        stage: '2020',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Software and Research Development - KOMATIK UGM',
        stage: '2024 - now',
      },
      {
        title: 'Hacker (Software Engineering) Member - GDSC UGM',
        stage: '2023 - now',
      },
      {
        title: 'IT Staff - Bonlap Islamic Festival - SMAN 1 Tambun Selatan',
        stage: '2022',
      },
    ],
  },
  {
    title: 'Certifications',
    info: [
      {
        title: 'Developing Front-End Apps with React - IBM',
        stage: '2024',
      },
      {
        title: 'Algorithm & Data Structures with Python - Skilvul',
        stage: '2024',
      },
      {
        title: 'Python Lanjutan- Skilvul',
        stage: '2024',
      },
      {
        title: 'Python Lanjutan - Skilvul',
        stage: '2024',
      },
      {
        title: 'Supervised Machine Learning: Regression and Classification - DeepLearning.AI',
        stage: '2023',
      },
      {
        title: 'Belajar Dasar Visualisasi Data - Dicoding',
        stage: '2023',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import ParticlesContainer from '../../components/ParticlesContainer';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <ParticlesContainer />
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            A tech enthusiast who always strives to <span className='text-accent'>push the limits</span>!
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            A few years ago, I embarked on a journey to explore the beauty of the programming world. This experience ignited my commitment to excellence and passion for pushing boundaries, making me ready to tackle unique challenges and deliver standout solutions
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={3} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>
              {/* awards */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>|</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className='text-2xl text-white' key={Date.now()}>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
