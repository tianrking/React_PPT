// src/slides/Slide4.jsx - 大模型最新进展
import React from 'react';

const Slide4 = () => {
  return (
    <div className="slide-content">
      <h2>I. 引言：智能开发新纪元</h2>
      <h3>OPENAI, Claude, XAI... 大模型最新进展</h3>
      <div className="two-column">
        <div className="column">
          <h4>OpenAI - GPT-4o/4o-mini</h4>
          <ul>
            <li>多模态理解能力：文本、图像、代码联合理解</li>
            <li>更强大的上下文处理：32K上下文窗口</li>
            <li>代码理解深度提升：可理解复杂项目结构</li>
          </ul>
          
          <h4>Anthropic - Claude</h4>
          <ul>
            <li>200K超长上下文：处理大型代码库</li>
            <li>更精确的指令遵循能力</li>
            <li>优化的代码生成与解释能力</li>
          </ul>
        </div>
        
        <div className="column">
          <h4>XAI - Grok</h4>
          <ul>
            <li>开源生态友好，高度可定制</li>
            <li>优化的推理性能</li>
            <li>代码分析效率提升</li>
          </ul>
          
          <h4>代码特化模型</h4>
          <ul>
            <li>CodeLlama 2/Mistral Code：专注代码生成</li>
            <li>DeepSeek Coder：深度理解代码结构</li>
            <li>更精确的补全与推理能力</li>
          </ul>
        </div>
      </div>
      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide4;