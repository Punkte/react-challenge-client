import React from 'react';

interface Props {
  style?: any;
}

export const HeaderFormsSvg: React.FC<Props> = props => {
  return (
    <svg
      width="267"
      height="140"
      viewBox="0 0 267 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="239"
        cy="46"
        r="81.5"
        stroke="url(#paint0_linear)"
        strokeWidth="25"
      />
      <rect
        x="-0.0681891"
        y="-5.65644"
        width="12.5693"
        height="12.5693"
        transform="matrix(0.698532 -0.715579 -0.715579 -0.698532 10.6508 60.4307)"
        stroke="url(#paint1_linear)"
        strokeWidth="8"
      />
      <rect
        x="-0.0358031"
        y="-2.96994"
        width="4.20044"
        height="4.20044"
        transform="matrix(0.698532 -0.715579 -0.715579 -0.698532 41.7519 64.6859)"
        stroke="url(#paint2_linear)"
        strokeWidth="4.20044"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="109"
          y1="56"
          x2="327.5"
          y2="62.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#79DCBC" stopOpacity="0" />
          <stop offset="1" stopColor="#2FB992" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="-29.4163"
          y1="-39.4435"
          x2="11.6958"
          y2="26.0596"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4DC7A3" />
          <stop offset="1" stopColor="#5BCEAB" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="-12.0142"
          y1="-16.1095"
          x2="4.77678"
          y2="10.6432"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4DC7A3" />
          <stop offset="1" stopColor="#5BCEAB" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
