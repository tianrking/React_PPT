// src/slides/Slide9.jsx - 功能实战对比演示 (第二部分)
import React from 'react';

const Slide9 = () => {
  return (
    <div className="slide-content">
      <h2>II. 双剑合璧：Cursor 与 Trae 深度解析</h2>
      <h3>功能实战演示对比 (二) - 代码补全与复杂任务</h3>
      
      <div className="responsive-video-grid">
        {/* 第一行 - 代码自动补全 */}
        <div className="video-row">
          {/* Cursor代码补全 */}
          <div className="video-box cursor">
            <div className="video-header">
              <h4>Cursor: Tab补全</h4>
              <span className="feature-pill">代码补全</span>
            </div>
            <div className="video-wrapper">
              {/* 视频5将放置在这里 */}
              <div className="video-placeholder">
                <div className="placeholder-text">Cursor代码补全演示</div>
              </div>
            </div>
            <div className="video-caption">
              多行智能补全与自动修复代码错误
            </div>
          </div>
          
          {/* Trae代码补全 */}
          <div className="video-box trae">
            <div className="video-header">
              <h4>Trae: 自动补全</h4>
              <span className="feature-pill">代码补全</span>
            </div>
            <div className="video-wrapper">
              {/* 视频6将放置在这里 */}
              <div className="video-placeholder">
                <div className="placeholder-text">Trae代码补全演示</div>
              </div>
            </div>
            <div className="video-caption">
              基于上下文的代码自动续写与生成
            </div>
          </div>
        </div>
        
        {/* 第二行 - 复杂任务处理 */}
        <div className="video-row">
          {/* Cursor复杂任务 */}
          <div className="video-box cursor">
            <div className="video-header">
              <h4>Cursor: Agent模式</h4>
              <span className="feature-pill">复杂任务</span>
            </div>
            <div className="video-wrapper">
              {/* 视频7将放置在这里 */}
              <div className="video-placeholder">
                <div className="placeholder-text">Cursor复杂任务演示</div>
              </div>
            </div>
            <div className="video-caption">
              自动处理多文件修改与终端命令执行
            </div>
          </div>
          
          {/* Trae复杂任务 */}
          <div className="video-box trae">
            <div className="video-header">
              <h4>Trae: 多文件处理</h4>
              <span className="feature-pill">复杂任务</span>
            </div>
            <div className="video-wrapper">
              {/* 视频8将放置在这里 */}
              <div className="video-placeholder">
                <div className="placeholder-text">Trae复杂任务演示</div>
              </div>
            </div>
            <div className="video-caption">
              自动执行跨文件改动与项目级更新
            </div>
          </div>
        </div>
      </div>
      
      <div className="slide-note">
        两款IDE都能通过AI辅助技术大幅提升代码补全效率和复杂任务处理能力
      </div>
      
      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide9;