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
        
        <div className="implementation-guide">
          <h4>实施模型会话共享的步骤</h4>
          <div className="model-grid">
            <div className="model-card">
              <div className="model-header">
                <img src="/images/openai-logo.png" alt="OpenAI" className="model-logo" />
                <h5>OpenAI ChatGPT</h5>
              </div>
              <p>使用GPTs创建自定义应用并分享链接，允许团队和客户直接访问预设专业会话</p>
            </div>
            
            <div className="model-card">
              <div className="model-header">
                <img src="/images/gemini-logo.png" alt="Gemini" className="model-logo" />
                <h5>Google Gemini</h5>
              </div>
              <p>通过Gemini Extensions和共享功能，创建产品专用会话并发布给团队成员</p>
            </div>
            
            <div className="model-card">
              <div className="model-header">
                <img src="/images/grok-logo.png" alt="Grok" className="model-logo" />
                <h5>XAI Grok</h5>
              </div>
              <p>利用Grok的会话功能构建产品知识库，作为团队和客户的自助服务工具</p>
            </div>
            
            <div className="model-card">
              <div className="model-header">
                <img src="/images/claude-logo.png" alt="Claude" className="model-logo" />
                <h5>Anthropic Claude</h5>
              </div>
              <p>使用Claude Workspace建立团队共享空间，预设产品相关提示和知识</p>
            </div>
          </div>
        </div>
        
        <div className="tips-section">
          <h4>最佳实践建议</h4>
          <ul className="tips-list">
            <li><strong>创建模板目录：</strong>按产品、功能和使用场景分类组织Prompt模板</li>
            <li><strong>版本控制：</strong>对Prompt模板进行版本管理，记录有效改进</li>
            <li><strong>收集反馈：</strong>建立机制让用户反馈哪些会话和模板最有效</li>
            <li><strong>平衡隐私与效率：</strong>针对敏感数据提供本地模型选项</li>
            <li><strong>持续优化：</strong>根据用户反馈和新模型能力定期更新模板</li>
          </ul>
        </div>
      </div>
      
      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide18;