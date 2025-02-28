import React from 'react';
import '../styles/slides.css';

const SlideContainer = ({ slides, currentSlideIndex }) => {
  // 当前要显示的幻灯片组件
  // const CurrentSlide = slides[currentSlideIndex];
  
  return (
    <div className="slide-container">
      {slides.map((Slide, index) => {
        // 根据是否是当前幻灯片决定是否显示
        const isActive = index === currentSlideIndex;
        return (
          <div 
            key={index} 
            className={`slide ${isActive ? 'active' : ''}`}
          >
            <Slide />
          </div>
        );
      })}
    </div>
  );
};

export default SlideContainer;