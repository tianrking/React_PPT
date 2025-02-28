// src/slides/Slide8.jsx - 功能实战对比演示 (第一部分)
import React from 'react';

const Slide8 = () => {
  return (
    <div className="slide-content">
      <h2>II. 双剑合璧：Cursor 与 Trae 深度解析</h2>
      <h3>功能实战演示对比 (一) - 代码生成与智能问答</h3>
      
      <div className="responsive-video-grid">
        {/* 第一行 - 代码自动生成 */}
        <div className="video-row">
          {/* Cursor代码生成 */}
          <div className="video-box cursor">
            <div className="video-header">
              <h4>Cursor: Chat/Composer</h4>
              <span className="feature-pill">代码生成</span>
            </div>
            <div className="video-wrapper">
              {/* 视频1将放置在这里 */}
              <div className="video-placeholder">
                <div className="placeholder-text">Cursor代码生成演示</div>
              </div>
            </div>
            <div className="video-caption">
              通过Chat或Composer快速生成功能代码
            </div>
          </div>
          
          {/* Trae代码生成 */}
          <div className="video-box trae">
            <div className="video-header">
              <h4>Trae: Builder模式</h4>
              <span className="feature-pill">代码生成</span>
            </div>
            <div className="video-wrapper">
              {/* 视频2将放置在这里 */}
              <div className="video-placeholder">
                <div className="placeholder-text">Trae代码生成演示</div>
              </div>
            </div>
            <div className="video-caption">
              使用Builder模式自动构建项目架构
            </div>
          </div>
        </div>
        
        {/* 第二行 - 智能问答 */}
        <div className="video-row">
          {/* Cursor智能问答 */}
          <div className="video-box cursor">
            <div className="video-header">
              <h4>Cursor: 上下文问答</h4>
              <span className="feature-pill">智能问答</span>
            </div>
            <div className="video-wrapper">
              {/* 视频3将放置在这里 */}
              <div className="video-placeholder">
                <div className="placeholder-text">Cursor智能问答演示</div>
              </div>
            </div>
            <div className="video-caption">
              基于项目上下文的代码问题解决方案
            </div>
          </div>
          
          {/* Trae智能问答 */}
          <div className="video-box trae">
            <div className="video-header">
              <h4>Trae: 智能对话</h4>
              <span className="feature-pill">智能问答</span>
            </div>
            <div className="video-wrapper">
              {/* 视频4将放置在这里 */}
              <div className="video-placeholder">
                <div className="placeholder-text">Trae智能对话演示</div>
              </div>
            </div>
            <div className="video-caption">
              侧边栏与内联两种智能对话模式
            </div>
          </div>
        </div>
      </div>
      
      <div className="slide-note">
        两款IDE都提供了强大的AI辅助代码生成和智能问答能力，各有特色
      </div>
      
      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide8;