import React, { memo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Element } from './Styles';
import { row1, row2 } from './Tools';
import { logoVariants } from '../About/Animations';

const Skills = () => {
  return (
    <section id='skills' className='py-24 bg-zinc-800'>
      <div className='w-[70%] mx-auto'>
        <div
          className='grid grid-cols-2 md:grid-cols-3 gap-10 lg:columns-6 lg:flex lg:items-center lg:justify-between mb-16'>
          {row1.map(s => (
            <motion.a
              whileInView='active'
              initial='hidden'
              variants={logoVariants}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
              key={s.url}
              href={s.url}
              target='_blank'
              rel='noreferrer'
              className='flex items-center justify-center'
            >
              <Element className='flex items-center justify-center'>
                <Image src={s.image} alt={s.alt} width={s.width} height={s.height} />
              </Element>
            </motion.a>
          ))}
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-10 lg:columns-6 lg:flex lg:items-center lg:justify-between'>
          {row2.map(s => (
            <motion.a
              whileInView='active'
              initial='hidden'
              variants={logoVariants}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
              key={s.url}
              href={s.url}
              target='_blank'
              rel='noreferrer'
              className='flex items-center justify-center'
            >
              <Element className='flex items-center justify-center'>
                <Image src={s.image} alt={s.alt} width={s.width} height={s.height} />
              </Element>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Skills);
