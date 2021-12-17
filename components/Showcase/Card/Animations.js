export const cardVariants = {
  initial: () => ({
    height: 150,
  }),
  open: () => ({
    height: '100%',
    transition: {
      height: {
        type: 'ease-out',
      },
    },
    boxShadow: '3px 3px 18px 0 rgba(0, 0, 0, 0.9)',
  }),
};
