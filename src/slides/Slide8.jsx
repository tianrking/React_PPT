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
              <h4>Cursor: Tab, tab, tab</h4>
              <span className="feature-pill">代码生成</span>
            </div>
            <div className="video-wrapper">
              <video
                className="video-element"
                src="https://assets.basehub.com/191e7e6d/ad4eb38cfa78d745acec4f5faf8d73c1/current-best-for-one-mp4.mp4"
                controls
                autoPlay={false}
                loop
                muted
              />
            </div>
            <div className="video-caption">
              通过Chat或Composer快速生成功能代码
            </div>
          </div>
          
          {/* Trae代码生成 */}
          <div className="video-box trae">
            <div className="video-header">
              <h4>Trae: Upload images to clarify requirements</h4>
              <span className="feature-pill">代码生成</span>
            </div>
            <div className="video-wrapper">
              <video
                className="video-element"
                src="https://lf-cdn.trae.ai/obj/trae-ai-us/feature-multimodality.mp4"
                controls
                autoPlay={false}
                loop
                muted
              />
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
              <h4>Cursor: COMPOSER </h4>
              <span className="feature-pill">智能问答</span>
            </div>
            {/* https://x.com/Sumanth_077/status/1894022968285503791 */}
            <div className="video-wrapper">
              <video
                className="video-element"
                src="images/cursor_compose.mp4"
                controls
                autoPlay={false}
                loop
                muted
              />
            </div>
            <div className="video-caption">
              基于项目上下文的代码问题解决方案
            </div>
          </div>
          
          {/* Trae智能问答 */}
          <div className="video-box trae">
            <div className="video-header">
              <h4>Trae: Chat to build a project faster</h4>
              <span className="feature-pill">智能问答</span>
            </div>
            <div className="video-wrapper">
              <video
                className="video-element"
                src="https://lf-cdn.trae.ai/obj/trae-ai-us/feature-builder.mp4"
                controls
                autoPlay={false}
                loop
                muted
              />
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