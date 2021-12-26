import React, { memo } from 'react';
import Image from 'next/image';

import { Inner, ImageContainer, Contact, AboutMe, Title, Paragraph } from './Styles';

const About = () => {
  return (
    <section id="about" className="bg-zinc-900 py-24">
      <Inner className="w-4/5 sm:w-3/5 mx-auto flex flex-col lg:grid lg:gap-x-16 lg:gap-y-8">
        <ImageContainer className="row-span-2 mx-auto w-40 rounded-md overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Profile picture"
            width={100}
            height={100}
            layout="responsive"
          />
        </ImageContainer>
        <AboutMe className="mt-6 lg:mt-0">
          <h2 className="pb-4 text-white font-semibold">About me</h2>
          <p className="text-zinc-400 mb-6">
            I love working with high performance frameworks that makes our lives easier, regardless
            of the language. I&apos;m thinking of stacks that can start and end a project quickly
            and efficiently while still being on the cutting edge.
          </p>
          <p className="text-zinc-400">
            Of course different needs mean different stacks, but with the state of tech right now
            and the increasing demand of doing things fast, Javascript is the Swiss army knife of
            the web development (among other things).
          </p>
        </AboutMe>
        <Contact className="mt-6 lg:mt-0">
          <h2 className="pb-4 mb-4 text-white font-semibold">Contact details</h2>
          <div className="flex">
            <a
              href="https://github.com/clement-izard"
              target="_blank"
              rel="noreferrer"
              className="mr-12"
            >
              <Image src="/icons/github.png" alt="Github icon" width={35} height={35} />
            </a>
            <a
              href="https://www.linkedin.com/in/clement-izard"
              target="_blank"
              rel="noreferrer"
              className="mr-12"
            >
              <Image src="/icons/linkedin.png" alt="Github icon" width={35} height={35} />
            </a>
            <a
              href="mailto:clementizard@tutanota.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center"
            >
              <Image src="/icons/mail.png" alt="Email icon" width={35} height={30} />
            </a>
          </div>
        </Contact>
      </Inner>
    </section>
  );
};

export default memo(About);
