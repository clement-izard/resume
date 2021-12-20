export const cardVariants = {
  initial: closedHeight => ({
    height: closedHeight,
  }),
  open: () => ({
    height: '100%',
    transition: {
      height: {
        type: 'ease-out',
      },
    },
  }),
};
