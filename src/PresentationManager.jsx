import React, { useState, useEffect, useCallback } from 'react';
import SlideContainer from './components/SlideContainer';
import PresentationControls from './components/PresentationControls';
import allSlides from './slides';

const PresentationManager = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // 处理键盘事件
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      // 下一页
      if (currentSlideIndex < allSlides.length - 1) {
        setCurrentSlideIndex(prevIndex => prevIndex + 1);
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      // 上一页
      if (currentSlideIndex > 0) {
        setCurrentSlideIndex(prevIndex => prevIndex - 1);
      }
    } else if (e.key === 'Home') {
      // 第一页
      setCurrentSlideIndex(0);
    } else if (e.key === 'End') {
      // 最后一页
      setCurrentSlideIndex(allSlides.length - 1);
    }
  }, [currentSlideIndex]);

  // 注册键盘事件监听
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // 切换全屏模式
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.error(`全屏请求错误: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        });
      }
    }
  };

  // 跳转到上一页
  const goToPrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prevIndex => prevIndex - 1);
    }
  };

  // 跳转到下一页
  const goToNextSlide = () => {
    if (currentSlideIndex < allSlides.length - 1) {
      setCurrentSlideIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <div className="presentation-container">
      <SlideContainer 
        slides={allSlides} 
        currentSlideIndex={currentSlideIndex} 
      />
      <PresentationControls 
        currentSlideIndex={currentSlideIndex}
        totalSlides={allSlides.length}
        goToPrevSlide={goToPrevSlide}
        goToNextSlide={goToNextSlide}
        toggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
      />
    </div>
  );
};

export default PresentationManager;