// import { useEffect, useState } from "react";

// function Slider() {
//   const [value, setValue] = useState(50);

//   useEffect(() => {
//     const tooltip = document.getElementById("tooltip");
//     const maxValue = document.getElementById("slider").getAttribute("max");

//     const center = (value / maxValue) * 100 + "%";

//     if (tooltip) {
//       tooltip.style.left = center;
//     }
//   });

//   return (
//     <>
//       <div className="range-wrap relative flex h-[24px] w-full items-center">
//         <input
//           className="range range-info relative flex w-full"
//           aria-valuemin={0}
//           type="range"
//           min="0"
//           max="1000"
//           value={value}
//           id="slider"
//           onChange={({ target: { value: radius } }) => {
//             setValue(radius);
//           }}
//         />
//         <div id="progress"></div>
//         <div
//           id="tooltip"
//           className="bubble absolute top-[-40px] left-1/2 flex h-[38px] w-[32px] -translate-x-1/2 items-center justify-center rounded-full bg-purple-400 align-middle text-body-medium text-white"
//         >
//           {value}
//         </div>
//       </div>
//     </>
//   );
// }

// export { Slider };

import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export function RangeSlider() {
  const [value, setValue] = React.useState([1, 1000]);

  console.log({ value });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const handleChange2 = (event, newValue2) => {
  //   setValue2(newValue2);
  // };

  return (
    <Box sx={{ width: 240 }}>
      <div className="flex gap-4">
        <div className="w-28 h-12 rounded-lg p-2 border-solid-1 border-[#D1D5DB] bg-[#F3F4F6] items-center inline-flex justify-center">
          <input
            type="number"
            className="w-20 h-6 text-base text-[#1F2937] not-italic font-normal bg-[#F3F4F6]"
            // value={setValue}
            placeholder={value[0]}
          />
        </div>
        <div className="w-28 h-12 rounded-lg p-2 border-solid-1 border-[#D1D5DB] bg-[#F3F4F6] items-center inline-flex justify-center">
          <input
            type="number"
            className="w-20 h-6 text-base text-[#1F2937] not-italic font-normal bg-[#F3F4F6]"
            // value={setValue}
            placeholder={value[1]}
          />
        </div>
      </div>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max="1000"
      />
    </Box>
  );
}
