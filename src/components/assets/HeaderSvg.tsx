import React from 'react';

export const HeaderSvg = (props: any) => {
  return (
    <div {...props}>
      <svg
        width="100%"
        viewBox="0 0 1440 631"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 -1H1440V204.131C1440 204.131 1234.56 503.037 672 503.037C109.44 503.037 0 631 0 631V-1Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="760.32"
            y1="-0.999998"
            x2="513.852"
            y2="791.737"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2AB58F" />
            <stop offset=".5" stopColor="#56EDB1" stopOpacity="0.67" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
