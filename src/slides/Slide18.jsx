// src/slides/Slide18.jsx - 开发者(生产者)提效策略
import React from 'react';

const Slide18 = () => {
  return (
    <div className="slide-content">
      <h2>IV. 总结与展望：AI 开发的无限未来</h2>
      <h3>开发者(生产者)提效策略</h3>
      
      <div className="productivity-container">
        <div className="strategy-section">
          <h4>开发者效能提升策略</h4>
          <div className="strategies-grid">
            <div className="strategy-card">
              <div className="strategy-icon">⚡</div>
              <h5>任务分层</h5>
              <p>将开发任务分为创造性任务和机械性任务，将后者交给AI处理</p>
              <div className="example-bubble">
                <strong>例如:</strong> 让AI生成样板代码、单元测试和基础文档
              </div>
            </div>
            
            <div className="strategy-card">
              <div className="strategy-icon">🧩</div>
              <h5>模块化与复用</h5>
              <p>建立高质量Prompt和代码段库，在团队内共享和复用</p>
              <div className="example-bubble">
                <strong>例如:</strong> 创建公司特定架构的代码生成Prompt模板
              </div>
            </div>
            
            <div className="strategy-card">
              <div className="strategy-icon">🔄</div>
              <h5>迭代开发模式</h5>
              <p>使用AI快速创建原型，然后逐步精炼和完善</p>
              <div className="example-bubble">
                <strong>例如:</strong> 先用AI生成MVP版本，再迭代改进细节实现
              </div>
            </div>
            
            <div className="strategy-card">
              <div className="strategy-icon">📚</div>
              <h5>知识库联动</h5>
              <p>将团队知识库与AI助手集成，提供上下文相关的帮助</p>
              <div className="example-bubble">
                <strong>例如:</strong> 让AI助手能够检索和引用内部技术文档
              </div>
            </div>
          </div>
        </div>
        
        <div className="prompt-sharing">
          <h4>Prompt模板与会话共享策略</h4>
          <div className="sharing-container">
            <div className="sharing-item">
              <div className="sharing-header">
                <div className="sharing-icon">📋</div>
                <h5>建立公司Prompt模板库</h5>
              </div>
              <p>为不同场景和产品创建标准化Prompt，确保团队一致性和高质量输出</p>
              <div className="feature-list">
                <span className="feature-tag">产品文档模板</span>
                <span className="feature-tag">API开发模板</span>
                <span className="feature-tag">错误诊断模板</span>
              </div>
            </div>
            
            <div className="sharing-item">
              <div className="sharing-header">
                <div className="sharing-icon">🔗</div>
                <h5>大模型会话分享机制</h5>
              </div>
              <p>利用OpenAI、Gemini、Grok等提供的会话分享功能，创建专用产品会话并分享给团队和客户</p>
              <div className="benefits">
                <div className="benefit-point">
                  <span className="benefit-icon">✓</span>
                  <span>降低员工培训和知识传递成本</span>
                </div>
                <div className="benefit-point">
                  <span className="benefit-icon">✓</span>
                  <span>允许客户选择偏好的模型，规避隐私问题</span>
                </div>
                <div className="benefit-point">
                  <span className="benefit-icon">✓</span>
                  <span>针对不同产品创建特定上下文会话</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide18;