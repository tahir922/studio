import type { SVGProps } from "react";

const UnityIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M128 64l-64 32V32zM0 64l64 32V32zm32-48l32-16 32 16-32 16zm64 96l-32 16-32-16 32-16z"/>
  </svg>
);

const CSharpIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path fill="currentColor" d="M440.6 134.3c-2.4-6.3-9.5-8.6-15.8-6.2L195.4 207.9l19.5 28.2 229.8-79.8c6.3-2.2 8.6-9.5 6.2-15.8zM413 241.2l-229.8 79.8c-6.3 2.2-8.6 9.5-6.2 15.8l2.4 6.3c2.4 6.3 9.5 8.6 15.8 6.2L425 269.5l-12-28.3zm-258.9-52.6L71.4 266.1c-6.3 2.2-8.6 9.5-6.2 15.8l2.4 6.3c2.4 6.3 9.5 8.6 15.8 6.2l82.7-28.5-18.2-28.4zm231 106l-82.7 28.5c-6.3 2.2-8.6 9.5-6.2 15.8l2.4 6.3c2.4 6.3 9.5 8.6 15.8 6.2l82.7-28.5 2.4-6.3c2.2-6.3-.1-13.4-6.4-15.8z" />
        <path fill="currentColor" d="M303.8 33.2c-7.5-7.5-20.3-7.5-27.8 0L24 285.4c-7.5 7.5-7.5 20.3 0 27.8l252.1 252.1c7.5 7.5 20.3 7.5 27.8 0l22.1-22.1c7.5-7.5 7.5-20.3 0-27.8L112.5 301.7 303.8 61c7.5-7.5 7.5-20.3 0-27.8l-22.1-22.1z" />
    </svg>
);

export const Icons = {
  unity: UnityIcon,
  csharp: CSharpIcon,
};
