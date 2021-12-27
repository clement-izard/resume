import styled from 'styled-components';

export const Loader = styled.div`
  @keyframes microLoadSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50px;
  background-image: linear-gradient(white, rgb(39 39 42 / var(--tw-bg-opacity)));
  animation: microLoadSpin 1s linear infinite;
  margin: 2rem auto 0 auto;
  &:before {
    content: ' ';
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50px;
    background-color: rgb(39 39 42 / var(--tw-bg-opacity));
  }
`;

export const styles = {
  container: 'bg-zinc-800 py-24',
  inner: 'w-[95%] xs:w-[80%] sm:w-[70%] md:w-[50%] lg:w-[40%] mx-auto flex flex-col',
  label: 'form-label inline-block mt-4 mb-2 text-zinc-400 cursor-pointer focus:text-white',
  inputField: `
    form-control
    block
    w-full
    px-3 py-1.5
    md:mb-8
    text-base
    font-normal
    text-zinc-400
    bg-zinc-800 bg-clip-padding
    border border-solid border-zinc-900
    transition
    ease-in-out
    hover:shadow-[3px_3px_18px_0_rgba(0,0,0,0.9)]
    focus:text-white focus:bg-zinc-800 focus:border-zinc-900 focus:outline-none focus:shadow-[3px_3px_18px_0_rgba(0,0,0,0.9)]
  `,
  error: 'text-sm text-gray-500 mt-1 ml-1 text-red-600',
  button: `
    px-6 py-2.5
    my-2 mt-8
    bg-zinc-800
    text-zinc-400
    font-medium
    text-normal
    leading-tight
    uppercase
    
    hover:shadow-[3px_3px_18px_0_rgba(0,0,0,0.9)]
    focus:shadow-[3px_3px_18px_0_rgba(0,0,0,0.9)] focus:outline-none focus:ring-0 
    transition duration-150 ease-in-out
  `,
};
