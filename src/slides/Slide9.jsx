// src/slides/Slide9.jsx - 功能实战对比演示 (第二部分)
import React from 'react';

const Slide9 = () => {
  return (
    <div className="slide-content">
      <h2>II. 双剑合璧：Cursor 与 Trae 深度解析</h2>
      <h3>功能实战演示对比 (二) - 代码补全与复杂任务</h3>
      
      <div className="video-grid">
        {/* 第一行 - 代码自动补全 */}
        <div className="grid-row">
          {/* Cursor代码补全 */}
          <div className="video-card cursor">
            <div className="card-header">
              <h4>Cursor: Tab补全</h4>
              <div className="feature-tag">代码自动补全</div>
            </div>
            <div className="video-container">
              {/* 视频5将放置在这里 */}
              <div className="video-placeholder">
                <div className="video-overlay">Cursor代码补全演示</div>
              </div>
            </div>
            <div className="card-footer">
              <p>多行智能补全与自动修复，能够预测开发者的下一步操作</p>
            </div>
          </div>
          
          {/* Trae代码补全 */}
          <div className="video-card trae">
            <div className="card-header">
              <h4>Trae: 自动补全</h4>
              <div className="feature-tag">代码自动补全</div>
            </div>
            <div className="video-container">
              {/* 视频6将放置在这里 */}
              <div className="video-placeholder">
                <div className="video-overlay">Trae代码补全演示</div>
              </div>
            </div>
            <div className="card-footer">
              <p>基于上下文的代码自动续写与注释驱动的代码生成</p>
            </div>
          </div>
        </div>
        
        {/* 第二行 - 复杂任务处理 */}
        <div className="grid-row">
          {/* Cursor复杂任务 */}
          <div className="video-card cursor">
            <div className="card-header">
              <h4>Cursor: Agent模式</h4>
              <div className="feature-tag">复杂任务处理</div>
            </div>
            <div className="video-container">
              {/* 视频7将放置在这里 */}
              <div className="video-placeholder">
                <div className="video-overlay">Cursor复杂任务演示</div>
              </div>
            </div>
            <div className="card-footer">
              <p>自动找上下文并执行多文件修改、重构与终端命令</p>
            </div>
          </div>
          
          {/* Trae复杂任务 */}
          <div className="video-card trae">
            <div className="card-header">
              <h4>Trae: 多文件处理</h4>
              <div className="feature-tag">复杂任务处理</div>
            </div>
            <div className="video-container">
              {/* 视频8将放置在这里 */}
              <div className="video-placeholder">
                <div className="video-overlay">Trae复杂任务演示</div>
              </div>
            </div>
            <div className="card-footer">
              <p>自动分析项目结构并执行跨文件改动与命令运行</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="notes">
        <p>两款IDE都能通过AI自动化处理代码补全和复杂编程任务，各有特色和优势</p>
      </div>
      
      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide9;