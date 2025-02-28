// src/slides/Slide14.jsx - 案例 2 演示：Trae + browser-use
import React from 'react';

const Slide14 = () => {
  return (
    <div className="slide-content">
      <h2>案例 2：Trae + browser-use</h2>
      <h3>实战演示 - AI 驱动的浏览器自动化</h3>
      
      <div className="Slide14-video-grid">
        <div className="Slide14-video-box">
          <div className="video-header">
            <h4>Trae: 脚本生成</h4>
            <span className="feature-pill">自动化脚本</span>
          </div>
          <div className="video-wrapper">
            <div className="video-placeholder">
              <div className="placeholder-text">Trae 脚本生成演示</div>
            </div>
          </div>
          <div className="video-caption">
            根据目标自动生成浏览器操作代码
          </div>
        </div>
        <div className="Slide14-video-box">
          <div className="video-header">
            <h4>Trae: 动态调整</h4>
            <span className="feature-pill">智能调整</span>
          </div>
          <div className="video-wrapper">
            <div className="video-placeholder">
              <div className="placeholder-text">Trae 动态调整演示</div>
            </div>
          </div>
          <div className="video-caption">
            实时适应页面变化并优化操作
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