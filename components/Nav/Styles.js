export const styles = {
  nav: fullBackground =>
    `fixed w-screen top-0 right-0 flex h-16 items-center justify-end z-10 ${
      fullBackground ? 'bg-zinc-900 shadow-xl' : ''
    }`,
  langContainer:
    'absolute rounded overflow-hidden cursor-pointer left-[12px] top-[12px] md:left-6 md:top-[12px] translate-x-2/4 flex flex-col px-[8px] py-[8px]',
  flagContainer: 'mt-4',
  link:
    'text-zinc-400 mr-4 xs:mr-6 sm:mr-8 md:mr-12 text-sm sm:text-base md:text-lg cursor-pointer hover:underline hover:text-white',
  lastLink:
    'text-zinc-400 mr-4 xs:mr-8 sm:mr-12 md:mr-16 text-sm sm:text-base md:text-lg cursor-pointer hover:underline hover:text-white',
};
