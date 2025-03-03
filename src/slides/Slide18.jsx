// src/slides/Slide18.jsx - 开发者(生产者)提效策略
import React from 'react';

const Slide18 = () => {
  return (
    <div className="slide18_slide-content">
      <h2>IV. 总结与展望：AI 开发的无限未来</h2>
      <h3>开发者(生产者)提效策略</h3>
      
      <div className="slide18_productivity-container">
        <div className="slide18_strategy-section">
          <h4>开发者效能提升策略</h4>
          <div className="slide18_strategies-grid">
            <div className="slide18_strategy-card">
              <div className="slide18_strategy-icon">⚡</div>
              <h5>任务分层</h5>
              <p>将开发任务分为创造性任务和机械性任务，将后者交给AI处理</p>
              <div className="slide18_example-bubble">
                <strong>例如:</strong> 让AI生成样板代码、单元测试和基础文档
              </div>
              <div className="slide18_benefit-tag">提升开发速度30-50%</div>
            </div>
            
            <div className="slide18_strategy-card">
              <div className="slide18_strategy-icon">🧩</div>
              <h5>模块化与复用</h5>
              <p>建立高质量Prompt和代码段库，在团队内共享和复用</p>
              <div className="slide18_example-bubble">
                <strong>例如:</strong> 创建公司特定架构的代码生成Prompt模板
              </div>
              <div className="slide18_benefit-tag">减少80%重复工作</div>
            </div>
            
            <div className="slide18_strategy-card">
              <div className="slide18_strategy-icon">🔄</div>
              <h5>迭代开发模式</h5>
              <p>使用AI快速创建原型，然后逐步精炼和完善</p>
              <div className="slide18_example-bubble">
                <strong>例如:</strong> 先用AI生成MVP版本，再迭代改进细节实现
              </div>
              <div className="slide18_benefit-tag">缩短40%项目周期</div>
            </div>
            
            <div className="slide18_strategy-card">
              <div className="slide18_strategy-icon">📚</div>
              <h5>知识库联动</h5>
              <p>将团队知识库与AI助手集成，提供上下文相关的帮助</p>
              <div className="slide18_example-bubble">
                <strong>例如:</strong> 让AI助手能够检索和引用内部技术文档
              </div>
              <div className="slide18_benefit-tag">知识获取提速65%</div>
            </div>
          </div>
        </div>
        
        <div className="slide18_prompt-sharing">
          <h4>Prompt模板与会话共享策略</h4>
          <div className="slide18_sharing-container">
            <div className="slide18_sharing-item">
              <div className="slide18_sharing-header">
                <div className="slide18_sharing-icon">📋</div>
                <h5>建立公司Prompt模板库</h5>
              </div>
              <p>为不同场景和产品创建标准化Prompt，确保团队一致性和高质量输出</p>
              <div className="slide18_implementation-steps">
                <div className="slide18_step">
                  <span className="slide18_step-number">1</span>
                  <span className="slide18_step-text">审核并记录团队成功的Prompt模式</span>
                </div>
                <div className="slide18_step">
                  <span className="slide18_step-number">2</span>
                  <span className="slide18_step-text">创建中央版本控制库进行管理</span>
                </div>
                <div className="slide18_step">
                  <span className="slide18_step-number">3</span>
                  <span className="slide18_step-text">建立分类体系与标签系统</span>
                </div>
              </div>
              <div className="slide18_feature-list">
                <span className="slide18_feature-tag">产品文档模板</span>
                <span className="slide18_feature-tag">API开发模板</span>
                <span className="slide18_feature-tag">错误诊断模板</span>
                <span className="slide18_feature-tag">测试案例生成</span>
                <span className="slide18_feature-tag">架构评审模板</span>
              </div>
            </div>
            
            <div className="slide18_sharing-item">
              <div className="slide18_sharing-header">
                <div className="slide18_sharing-icon">🔗</div>
                <h5>大模型会话分享机制</h5>
              </div>
              <p>利用OpenAI、Gemini、Grok等提供的会话分享功能，创建专用产品会话并分享给团队和客户</p>
              <div className="slide18_model-examples">
                <div className="slide18_model-example">
                  <span className="slide18_model-logo openai">GPT</span>
                  <span className="slide18_model-text">GPTs自定义助手</span>
                </div>
                <div className="slide18_model-example">
                  <span className="slide18_model-logo gemini">G</span>
                  <span className="slide18_model-text">Gemini Extensions</span>
                </div>
                <div className="slide18_model-example">
                  <span className="slide18_model-logo claude">C</span>
                  <span className="slide18_model-text">Claude Workspaces</span>
                </div>
              </div>
              <div className="slide18_benefits">
                <div className="slide18_benefit-point">
                  <span className="slide18_benefit-icon">✓</span>
                  <span>降低员工培训和知识传递成本，提高新员工上手速度达45%</span>
                </div>
                <div className="slide18_benefit-point">
                  <span className="slide18_benefit-icon">✓</span>
                  <span>允许客户选择偏好的模型，规避隐私问题，增强合规性</span>
                </div>
                <div className="slide18_benefit-point">
                  <span className="slide18_benefit-icon">✓</span>
                  <span>针对不同产品创建特定上下文会话，提升答案准确性70%+</span>
                </div>
                <div className="slide18_benefit-point">
                  <span className="slide18_benefit-icon">✓</span>
                  <span>自动记录常见问题与解决方案，建立自动化知识库</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="slide18_footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide18;