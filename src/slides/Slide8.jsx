// src/slides/Slide8.jsx - 功能实战对比演示 (第一部分)
import React from 'react';

const Slide8 = () => {
  return (
    <div className="slide-content">
      <h2>II. 双剑合璧：Cursor 与 Trae 深度解析</h2>
      <h3>功能实战演示对比 (一) - 代码生成与智能问答</h3>
      
      <div className="video-grid">
        {/* 第一行 - 代码自动生成 */}
        <div className="grid-row">
          {/* Cursor代码生成 */}
          <div className="video-card cursor">
            <div className="card-header">
              <h4>Cursor: Chat/Composer</h4>
              <div className="feature-tag">代码自动生成</div>
            </div>
            <div className="video-container">
              {/* 视频1将放置在这里 */}
              <div className="video-placeholder">
                <div className="video-overlay">Cursor代码生成演示</div>
              </div>
            </div>
            <div className="card-footer">
              <p>通过Chat或Composer从自然语言描述快速生成完整功能代码</p>
            </div>
          </div>
          
          {/* Trae代码生成 */}
          <div className="video-card trae">
            <div className="card-header">
              <h4>Trae: Builder模式</h4>
              <div className="feature-tag">代码自动生成</div>
            </div>
            <div className="video-container">
              {/* 视频2将放置在这里 */}
              <div className="video-placeholder">
                <div className="video-overlay">Trae代码生成演示</div>
              </div>
            </div>
            <div className="card-footer">
              <p>使用Builder模式根据需求描述自动构建代码架构和实现</p>
            </div>
          </div>
        </div>
        
        {/* 第二行 - 智能问答 */}
        <div className="grid-row">
          {/* Cursor智能问答 */}
          <div className="video-card cursor">
            <div className="card-header">
              <h4>Cursor: 上下文问答</h4>
              <div className="feature-tag">智能问答</div>
            </div>
            <div className="video-container">
              {/* 视频3将放置在这里 */}
              <div className="video-placeholder">
                <div className="video-overlay">Cursor智能问答演示</div>
              </div>
            </div>
            <div className="card-footer">
              <p>基于当前文件和项目结构的智能问答与解决方案生成</p>
            </div>
          </div>
          
          {/* Trae智能问答 */}
          <div className="video-card trae">
            <div className="card-header">
              <h4>Trae: 智能对话</h4>
              <div className="feature-tag">智能问答</div>
            </div>
            <div className="video-container">
              {/* 视频4将放置在这里 */}
              <div className="video-placeholder">
                <div className="video-overlay">Trae智能对话演示</div>
              </div>
            </div>
            <div className="card-footer">
              <p>侧边栏与内联两种对话模式帮助解决开发中的问题</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="notes">
        <p>两款IDE都能通过自然语言交互生成代码和解答问题，以上演示展示了各自的实现方式和特点</p>
      </div>
      
      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide8;