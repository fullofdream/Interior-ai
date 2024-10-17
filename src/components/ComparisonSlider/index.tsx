import { useState, useRef } from 'react';

const ComparisonSlider = ({}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);

  const handleMouseMove = (e) => {
    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newPosition = (offsetX / rect.width) * 100;

    if (newPosition >= 0 && newPosition <= 100) {
      setSliderPosition(newPosition);
    }
  };

  const handleTouchMove = (e) => {
    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const offsetX = e.touches[0].clientX - rect.left;
    const newPosition = (offsetX / rect.width) * 100;

    if (newPosition >= 0 && newPosition <= 100) {
      setSliderPosition(newPosition);
    }
  };

  return (
    <div
      className="relative w-full h-96 max-w-4xl mx-auto"
      ref={sliderRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image - This stays static */}
      <img
        src="/images/before.jpg"
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* After Image with a mask */}
      <img
        src="/images/after.jpg"
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          clipPath: `inset(0 0 0 ${sliderPosition}%)`,
        }}
      />

      {/* Slider Line */}
      <div
        className="absolute top-0 left-0 h-full border-r-4 border-gray-400"
        style={{ left: `${sliderPosition}%` }}
      ></div>

      {/* Draggable Slider with Centered Emoticon */}
      <div
        className="absolute top-0 h-full w-1 cursor-pointer bg-gray-600"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Add Emoticon/Icon centered */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full border border-gray-400 shadow-lg text-lg"
        >
          {/* Replace this with any icon/emoticon you prefer */}
          ↔️
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
