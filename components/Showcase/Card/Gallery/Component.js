import React, { memo } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

import { Container, Arrow } from './Styles';
import { variants } from './Animations';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Gallery = ({ images, ...props }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Container {...props} className="relative aspect-video mt-6">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            e.stopPropagation();
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <Arrow
        position="left"
        onClick={e => {
          e.stopPropagation();
          paginate(1);
        }}
        className="absolute bg-white w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg"
      >
        {'‣'}
      </Arrow>
      <Arrow
        position="right"
        onClick={e => {
          e.stopPropagation();
          paginate(-1);
        }}
        className="absolute bg-white w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg"
      >
        {'‣'}
      </Arrow>
    </Container>
  );
};

export default memo(Gallery);
