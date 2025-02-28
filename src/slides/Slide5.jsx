// src/slides/Slide5.jsx - 两款AI驱动的IDE
import React from 'react';

const Slide5 = () => {
  return (
    <div className="slide-content">
      <h2>I. 引言：智能开发新纪元</h2>
      <h3>Cursor & Trae: 两款 AI 驱动的 IDE</h3>
      <div className="two-column">
        <div className="column">
          <h4>Cursor</h4>
          <ul>
            <li>基于VSCode的增强型编辑器</li>
            <li>强大的AI代码生成与补全</li>
            <li>内置聊天功能，直接与AI对话</li>
            <li>支持多种编程语言和框架</li>
            <li>跨平台支持(Win/Mac/Linux)</li>
            <li>全项目上下文理解能力</li>
          </ul>
        </div>
        
        <div className="column">
          <h4>Trae</h4>
          <ul>
            <li>新一代专注AI协作的编辑器</li>
            <li>无需API Key即可使用高级模型</li>
            <li>独特的Agent模式，可执行复杂任务</li>
            <li>简洁直观的用户界面</li>
            <li>自动化工作流支持</li>
            <li>与浏览器深度集成的功能</li>
          </ul>
        </div>
      </div>
      <div className="notes">
        <p>这两款工具代表了当前AI辅助编程的不同方向：Cursor更侧重全面集成，Trae更注重简洁与浏览器协作</p>
      </div>
      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide5;