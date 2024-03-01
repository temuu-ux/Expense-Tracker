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
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 240 }}>
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
