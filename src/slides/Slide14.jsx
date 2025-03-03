// src/slides/Slide14.jsx - 案例 2 演示：Trae + browser-use
import React from 'react';

const Slide14 = () => {
  return (
    <div className="slide-content">
      <h2>案例 2：Trae + browser-use</h2>
      <h3>实战演示 - AI 驱动的浏览器自动化</h3>
      
      <div className="Slide14-video-container">
        <div className="Slide14-video-box">
          <div className="video-header">
            <h4>Trae + browser-use 演示</h4>
            <span className="feature-pill">自动化脚本</span>
          </div>
          <div className="video-wrapper">
            <video 
              className="demo-video" 
              controls
              src="/images/broweruse.mp4"
            >
              您的浏览器不支持视频播放
            </video>
          </div>
          <div className="video-caption">
            根据目标自动生成浏览器操作代码，实时适应页面变化并优化操作
          </div>
        </div>
      </div>
      
      <div className="slide-note">
        AI 让浏览器自动化更智能、更灵活
      </div>
      
      <div className="footer">案例 2 完成</div>
    </div>
  );
};

export default Slide14;