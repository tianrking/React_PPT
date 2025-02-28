import React from 'react';

const PresentationControls = ({ 
  currentSlideIndex, 
  totalSlides, 
  goToPrevSlide, 
  goToNextSlide, 
  toggleFullscreen,
  isFullscreen
}) => {
  return (
    <div className="presentation-controls">
      {/* 全屏按钮 */}
      <button 
        className="fullscreen-btn" 
        onClick={toggleFullscreen}
      >
        {isFullscreen ? '退出全屏' : '全屏演示'}
      </button>
      
      {/* 幻灯片计数器 */}
      <div className="slide-counter">
        {currentSlideIndex + 1} / {totalSlides}
      </div>
      
      {/* 导航按钮 */}
      <div className="controls">
        <button 
          className="control-btn" 
          onClick={goToPrevSlide}
          disabled={currentSlideIndex === 0}
        >
          上一页
        </button>
        <button 
          className="control-btn" 
          onClick={goToNextSlide}
          disabled={currentSlideIndex === totalSlides - 1}
        >
          下一页
        </button>
      </div>
    </div>
  );
};

export default PresentationControls;