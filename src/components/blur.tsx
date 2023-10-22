import React, { SVGProps } from "react";

export const BlurBG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={1024}
    className="w-full"
    fill="none"
    {...props}
  >
    <g
      filter="url(#a)"
      opacity={0.25}
      style={{
        mixBlendMode: "lighten",
      }}
    >
      <ellipse cx={689.5} fill="url(#b)" rx={1127.5} ry={725} />
    </g>
    <defs>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 871 -1354.56 0 689.5 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </radialGradient>
      <filter
        id="a"
        width={3255}
        height={2450}
        x={-938}
        y={-1225}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_102_12133"
          stdDeviation={250}
        />
      </filter>
    </defs>
  </svg>
);