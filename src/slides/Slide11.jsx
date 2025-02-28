// src/slides/Slide11.jsx - 案例 1 简介：Cursor + PlatformIO
import React from 'react';

const Slide11 = () => {
  return (
    <div className="slide-content">
      <h2>案例 1：Cursor + PlatformIO</h2>
      <h3>嵌入式开发利器</h3>
      
      <div className="Slide11-content-grid">
        <div className="Slide11-content-box">
          <h4>技术背景</h4>
          <p>
            PlatformIO 是一个开源的嵌入式开发生态系统，支持多平台硬件开发。
            Cursor 的 AI 能力为其注入智能支持。
          </p>
        </div>
        <div className="Slide11-content-box">
          <h4>AI 加持</h4>
          <ul>
            <li>自动生成硬件配置文件</li>
            <li>智能调试与错误提示</li>
            <li>优化嵌入式代码性能</li>
          </ul>
        </div>
      </div>
      
      <div className="slide-note">
        Cursor 让嵌入式开发更高效，降低学习曲线
      </div>
      
      <div className="footer">下一页：实战演示</div>
    </div>
  );
};

export default Slide11;