import * as React from "react";

function SvgWire3(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 160" {...props}>
      <g fill="none" fillRule="evenodd" strokeWidth={2}>
        <path
          d="M56 31c-19.813 9.866-32.816 18.746-33.376 26.407C21.75 69.472 43.312 68.907 44.727 80 46.142 91.093 4 102.081 4 136.698c0 23.574 31.68 24.135 52 4.302"
          stroke="#ffb300"
        />
        <path
          d="M116 4c-22.05 9.87-43.445 18.756-60 27m0 110c5.665-5.529 10.557-12.28 13.5-21"
          stroke="#FFF"
        />
      </g>
    </svg>
  );
}

export default SvgWire3;
