import React, { memo } from 'react';

import Card from './Card';
import { education, experiences } from './Tools';

const Showcase = () => {
  return (
    <section id="showcase" className="py-24 bg-zinc-900">
      <div className="w-full xs:w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto flex flex-col">
        {experiences.map(e => (
          <Card {...e} key={e.title} />
        ))}
        <div className="bg-white w-full h-[1px] my-14" />
        {education.map(e => (
          <Card {...e} key={e.title} />
        ))}
      </div>
    </section>
  );
};

export default memo(Showcase);
