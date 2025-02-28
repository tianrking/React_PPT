// src/slides/Slide13.jsx - 案例 2 简介：Trae + browser-use
import React from 'react';

const Slide13 = () => {
  return (
    <div className="slide-content">
      <h2>案例 2：Trae + browser-use</h2>
      <h3>AI 控制浏览器</h3>
      
      <div className="Slide13-content-grid">
        <div className="Slide13-content-box">
          <h4>技术背景</h4>
          <p>
            browser-use 是一个浏览器自动化框架，Trae 的 AI 能力让其实现智能操作。
          </p>
        </div>
        <div className="Slide13-content-box">
          <h4>AI 加持</h4>
          <ul>
            <li>自动生成浏览器操作脚本</li>
            <li>智能识别页面元素</li>
            <li>动态调整操作流程</li>
          </ul>
        </div>
      </div>
      
      <div className="slide-note">
        Trae 将浏览器自动化提升到新高度
      </div>
      
      <div className="footer">下一页：实战演示</div>
    </div>
  );
};

export default Slide13;