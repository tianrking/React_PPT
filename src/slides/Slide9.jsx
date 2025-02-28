// src/slides/Slide9.jsx - 功能实战对比演示 (第二部分)
import React from 'react';

const Slide9 = () => {
  return (
    <div className="slide-content">
      <h2>II. 双剑合璧：Cursor 与 Trae 深度解析</h2>
      <h3>功能实战演示对比 (二) - 自然语言编程与复杂任务</h3>

      <div className="responsive-video-grid">
        {/* 第一行 - 自然语言编辑与代码补全 */}
        <div className="video-row">
          {/* Cursor自然语言编辑 */}
          <div className="video-box cursor">
            <div className="video-header">
              <h4>Cursor: Edit in natural language</h4>
              <span className="feature-pill">自然语言编辑</span>
            </div>
            <div className="video-wrapper">
              <video
                className="video-element"
                src="https://assets.basehub.com/191e7e6d/8ea9258a063943d01c1454f028b5294b/website-three-mp4.mp4"
                controls
                autoPlay={false}
                loop
                muted
              />
            </div>
            <div className="video-caption">
              通过简单指令更新整个类或函数逻辑
            </div>
          </div>

          {/* Trae代码补全 */}
          <div className="video-box trae">
            <div className="video-header">
              <h4>Trae: Get better results with full context</h4>
              <span className="feature-pill">全文本分析</span>
            </div>
            <div className="video-wrapper">
              <video
                className="video-element"
                src="https://lf-cdn.trae.ai/obj/trae-ai-us/feature-context.mp4"
                controls
                autoPlay={false}
                loop
                muted
              />
            </div>
            <div className="video-caption">
              基于上下文的代码自动续写与生成
            </div>
          </div>
        </div>

        {/* 第二行 - Cursor一键构建与Trae复杂任务 */}
        <div className="video-row">
          {/* Cursor一键构建 */}
          <div className="video-box cursor">
            <div className="video-header">
              <h4>Cursor: Knows your codebase</h4>
              <span className="feature-pill">一键构建</span>
            </div>
            <div className="video-wrapper">
              <video
                className="video-element"
                src="https://assets.basehub.com/191e7e6d/2c99e8a087f981290dc74d2b621a7192/current-best-for-two-mp4.mp4"
                controls
                autoPlay={false}
                loop
                muted
              />
            </div>
            <div className="video-caption">
              交互式创建完整项目，从设计到实现
            </div>
          </div>

          {/* Trae复杂任务 */}
          <div className="video-box trae">
            <div className="video-header">
              <h4>Trae: Boost efficiency with smart completion</h4>
              <span className="feature-pill">智能补全提效</span>
            </div>
            <div className="video-wrapper">
              <video
                className="video-element"
                src="https://lf-cdn.trae.ai/obj/trae-ai-us/feature-completion.mp4"
                controls
                autoPlay={false}
                loop
                muted
              />
            </div>
            <div className="video-caption">
              自动执行跨文件改动与项目级更新
            </div>
          </div>
        </div>
      </div>

      <div className="slide-note">
        两款IDE都能理解自然语言指令，并将其转化为高质量代码，处理从单行修改到项目级构建的各种任务
      </div>

      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide9;