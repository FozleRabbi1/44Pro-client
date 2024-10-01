import { useState } from 'react';
import './App.css';

function App() {
  const [elementColors, setElementColors] = useState({
    svg_1: '#FFFFFF',
    svg_3: '#FFFFFF',
    svg_5: '#000000',
    svg_6: '#000000',
  });

  const [selectedElementId, setSelectedElementId] = useState(null);

  const handleSvgClick = (id) => {
    setSelectedElementId(id);
  };

  const handleColorClick = (color) => {
    if (selectedElementId) {

      setElementColors((prevColors) => ({
        ...prevColors,
        [selectedElementId]: color,
      }));
    }
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center'>

        <svg width="160" height="300">
          <g>
            <title>Layer 1</title>
            <rect
              id="svg_1"
              height="148"
              width="79"
              y="129.25"
              x="44"
              strokeWidth="5"
              stroke="#000000"
              fill={elementColors.svg_1}
              onClick={() => handleSvgClick('svg_1')}
            />
            <circle
              id="svg_3"
              r="67.424034"
              cy="89.25"
              cx="81"
              strokeWidth="5"
              stroke="#000000"
              fill={elementColors.svg_3}
              onClick={() => handleSvgClick('svg_3')}
            />
            <circle
              id="svg_5"
              r="14.317822"
              cy="77.25"
              cx="51"
              strokeWidth="5"
              stroke="#000000"
              fill={elementColors.svg_5}
              onClick={() => handleSvgClick('svg_5')}
            />
            <circle
              id="svg_6"
              r="16.27882"
              cy="80.25"
              cx="107"
              strokeWidth="5"
              stroke="#000000"
              fill={elementColors.svg_6}
              onClick={() => handleSvgClick('svg_6')}
            />
          </g>
        </svg>

        <div>
          <button className='border mx-3 w-[120px] px-2 py-1  bg-red-500  ' onClick={() => handleColorClick('red')}>red</button>
          <button className='border mx-3 w-[120px] px-2 py-1  bg-green-500  ' onClick={() => handleColorClick('green')}>green</button>
          <button className='border mx-3 w-[120px] px-2 py-1  bg-yellow-500  ' onClick={() => handleColorClick('yellow')}>yellow</button>
          <button className='border mx-3 w-[120px] px-2 py-1  bg-sky-300  ' onClick={() => handleColorClick('aqua')}>aqua</button>
        </div>


      </div>
    </>
  );
}

export default App;
