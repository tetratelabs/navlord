import React from "react";

const Grid = ({scale}) => {

    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="528" className={scale}> 
      <defs>
        <clipPath id="a">
          <path fill="none" d="M0 0h1920v489H0z"/>
        </clipPath>
        <clipPath id="b">
          <path fill="none" d="M0 0h1880v528H0z"/>
        </clipPath>
      </defs>
      <g fill="none" stroke="#fff6e9">
        <g transform="translate(0 39)" clip-path="url(#a)">
          <path d="M0 .5h1366M0 40.5h1366M1366 .5h1366M1366 40.5h1366M0 61.5h1366M0 101.5h1366M1366 61.5h1366M1366 101.5h1366M0 122.5h1366M0 162.5h1366M1366 122.5h1366M1366 162.5h1366M0 183.5h1366M0 223.5h1366M1366 183.5h1366M1366 223.5h1366M0 244.5h1366M0 284.5h1366"/>
          <g>
            <path d="M1366 244.5h1366M1366 284.5h1366"/>
          </g>
          <g>
            <path d="M0 305.5h1366M0 345.5h1366"/>
          </g>
          <g>
            <path d="M1366 305.5h1366M1366 345.5h1366"/>
          </g>
          <g>
            <path d="M0 366.5h1366M0 406.5h1366"/>
          </g>
          <g>
            <path d="M1366 366.5h1366M1366 406.5h1366"/>
          </g>
          <g>
            <path d="M0 427.5h1366M0 467.5h1366"/>
          </g>
          <g>
            <path d="M1366 427.5h1366M1366 467.5h1366"/>
          </g>
          <g>
            <path d="M0 488.5h1366M0 528.5h1366"/>
          </g>
          <g>
            <path d="M1366 488.5h1366M1366 528.5h1366"/>
          </g>
        </g>
        <g transform="translate(39.5)" clip-path="url(#b)">
          <path d="M.5 0v528M40.5 0v528M61.5 0v528M101.5 0v528M122.5 0v528M162.5 0v528M183.5 0v528M223.5 0v528M244.5 0v528M284.5 0v528M305.5 0v528M345.5 0v528M366.5 0v528M406.5 0v528M427.5 0v528M467.5 0v528M488.5 0v528M528.5 0v528M549.5 0v528M589.5 0v528M610.5 0v528M650.5 0v528M671.5 0v528M711.5 0v528M732.5 0v528M772.5 0v528M793.5 0v528M833.5 0v528M854.5 0v528M894.5 0v528M915.5 0v528M955.5 0v528"/>
          <g>
            <path d="M976.5 0v528M1016.5 0v528"/>
          </g>
          <g>
            <path d="M1037.5 0v528M1077.5 0v528"/>
          </g>
          <g>
            <path d="M1098.5 0v528M1138.5 0v528"/>
          </g>
          <g>
            <path d="M1159.5 0v528M1199.5 0v528"/>
          </g>
          <g>
            <path d="M1220.5 0v528M1260.5 0v528"/>
          </g>
          <g>
            <path d="M1281.5 0v528M1321.5 0v528"/>
          </g>
          <g>
            <path d="M1342.5 0v528M1382.5 0v528"/>
          </g>
          <g>
            <path d="M1403.5 0v528M1443.5 0v528"/>
          </g>
          <g>
            <path d="M1464.5 0v528M1504.5 0v528"/>
          </g>
          <g>
            <path d="M1525.5 0v528M1565.5 0v528"/>
          </g>
          <g>
            <path d="M1586.5 0v528M1626.5 0v528"/>
          </g>
          <g>
            <path d="M1647.5 0v528M1687.5 0v528"/>
          </g>
          <g>
            <path d="M1708.5 0v528M1748.5 0v528"/>
          </g>
          <g>
            <path d="M1769.5 0v528M1809.5 0v528"/>
          </g>
          <g>
            <path d="M1830.5 0v528M1870.5 0v528"/>
          </g>
        </g>
      </g>
    </svg>
    
    );
};

export default Grid;
