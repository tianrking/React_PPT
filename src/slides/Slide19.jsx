// src/slides/Slide19.jsx - 降低开发壁垒与拓展客户群体
import React from 'react';

const Slide19 = () => {
  return (
    <div className="slide19_slide-content">
      <h2>IV. 总结与展望：AI 开发的无限未来</h2>
      <h3>降低开发壁垒与拓展客户群体</h3>
      
      <div className="slide19_barriers-container">
        <div className="slide19_barriers-section">
          <h4>AI如何降低开发壁垒</h4>
          <div className="slide19_barriers-grid">
            <div className="slide19_barrier-card">
              <div className="slide19_barrier-header">
                <div className="slide19_barrier-icon">🚀</div>
                <h5>加速学习曲线</h5>
              </div>
              <p>新手开发者可以通过AI获得实时指导和解释，理解复杂概念和代码</p>
              <div className="slide19_transformation">
                <div className="slide19_before">从数月掌握技术栈</div>
                <div className="slide19_arrow">→</div>
                <div className="slide19_after">缩短至数周上手开发</div>
              </div>
            </div>
            
            <div className="slide19_barrier-card">
              <div className="slide19_barrier-header">
                <div className="slide19_barrier-icon">🌉</div>
                <h5>跨领域知识鸿沟</h5>
              </div>
              <p>AI助手可以填补专业领域知识空缺，支持跨学科开发</p>
              <div className="slide19_transformation">
                <div className="slide19_before">单一技术栈专家</div>
                <div className="slide19_arrow">→</div>
                <div className="slide19_after">多领域开发能力</div>
              </div>
            </div>
            
            <div className="slide19_barrier-card">
              <div className="slide19_barrier-header">
                <div className="slide19_barrier-icon">📝</div>
                <h5>从需求到代码的转换</h5>
              </div>
              <p>业务专家可以直接用自然语言描述需求，AI转化为可执行代码</p>
              <div className="slide19_transformation">
                <div className="slide19_before">依赖开发团队实现</div>
                <div className="slide19_arrow">→</div>
                <div className="slide19_after">业务专家直接参与开发</div>
              </div>
            </div>
            
            <div className="slide19_barrier-card">
              <div className="slide19_barrier-header">
                <div className="slide19_barrier-icon">🔍</div>
                <h5>错误诊断与修复</h5>
              </div>
              <p>AI可以解释复杂错误信息，提供解决方案和学习资源</p>
              <div className="slide19_transformation">
                <div className="slide19_before">卡壳数小时寻找解决方案</div>
                <div className="slide19_arrow">→</div>
                <div className="slide19_after">快速理解并解决问题</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="slide19_customer-expansion">
          <h4>拓展客户群体的实践策略</h4>
          <div className="slide19_strategies-grid">
            <div className="slide19_expansion-strategy">
              <h5>AI增强的教程与文档</h5>
              <p>将静态文档转变为交互式学习体验，用户可提问并获得上下文回答</p>
              <div className="slide19_benefit">
                <strong>收益:</strong> 降低入门门槛，支持自助学习，减少支持成本
              </div>
            </div>
            
            <div className="slide19_expansion-strategy">
              <h5>低代码/无代码扩展</h5>
              <p>使用AI桥接图形化界面与代码实现，让非技术用户也能创建定制功能</p>
              <div className="slide19_benefit">
                <strong>收益:</strong> 产品可触达更广泛用户群体，包括业务分析师和领域专家
              </div>
            </div>
            
            <div className="slide19_expansion-strategy">
              <h5>智能模板与起始项目</h5>
              <p>提供AI生成的项目模板库，用户描述需求即可获得定制起点</p>
              <div className="slide19_benefit">
                <strong>收益:</strong> 减少创建新项目的摩擦，加速客户价值实现
              </div>
            </div>
            
            <div className="slide19_expansion-strategy">
              <h5>AI驱动的社区支持</h5>
              <p>建立AI辅助的用户社区，自动回答常见问题，总结解决方案</p>
              <div className="slide19_benefit">
                <strong>收益:</strong> 提升社区活跃度，增强用户黏性，降低支持成本
              </div>
            </div>
          </div>
        </div>
        
        <div className="slide19_implementation-guide">
          <h4>实施模型会话共享的步骤</h4>
          <div className="slide19_model-grid">
            <div className="slide19_model-card">
              <h5>OpenAI ChatGPT</h5>
              <p>使用GPTs创建自定义应用并分享链接，允许团队和客户直接访问预设专业会话</p>
              <div className="slide19_qr-code-container">
                <img src="/images/openai_demo.png" alt="OpenAI Demo QR" className="slide19_qr-code" />
                <p className="slide19_qr-label">扫码体验</p>
              </div>
            </div>
            
            <div className="slide19_model-card">
              <h5>Google Gemini</h5>
              <p>通过Gemini Extensions和共享功能，创建产品专用会话并发布给团队成员</p>
              <div className="slide19_qr-code-container">
                <img src="/images/gemini_demo.png" alt="Gemini Demo QR" className="slide19_qr-code" />
                <p className="slide19_qr-label">扫码体验</p>
              </div>
            </div>
            
            <div className="slide19_model-card">
              <h5>XAI Grok</h5>
              <p>利用Grok的会话功能构建产品知识库，作为团队和客户的自助服务工具</p>
              <div className="slide19_qr-code-container">
                <img src="/images/grok_demo.png" alt="Grok Demo QR" className="slide19_qr-code" />
                <p className="slide19_qr-label">扫码体验</p>
              </div>
            </div>
            
            <div className="slide19_model-card">
              <h5>Anthropic Claude</h5>
              <p>使用Claude Workspace建立团队共享空间，预设产品相关提示和知识</p>
              <div className="slide19_qr-code-container">
                <img src="/images/claude_demo.png" alt="Claude Demo QR" className="slide19_qr-code" />
                <p className="slide19_qr-label">扫码体验</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="slide19_tips-section">
          <h4>最佳实践建议</h4>
          <ul className="slide19_tips-list">
            <li><strong>创建模板目录：</strong>按产品、功能和使用场景分类组织Prompt模板</li>
            <li><strong>版本控制：</strong>对Prompt模板进行版本管理，记录有效改进</li>
            <li><strong>收集反馈：</strong>建立机制让用户反馈哪些会话和模板最有效</li>
            <li><strong>平衡隐私与效率：</strong>针对敏感数据提供本地模型选项</li>
            <li><strong>持续优化：</strong>根据用户反馈和新模型能力定期更新模板</li>
          </ul>
        </div>
      </div>
      
      <div className="slide19_footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide19;