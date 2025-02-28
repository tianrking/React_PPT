// src/slides/Slide19.jsx - 降低开发壁垒与拓展客户群体
import React from 'react';

const Slide19 = () => {
  return (
    <div className="slide-content">
      <h2>IV. 总结与展望：AI 开发的无限未来</h2>
      <h3>降低开发壁垒与拓展客户群体</h3>
      
      <div className="barriers-container">
        <div className="barriers-section">
          <h4>AI如何降低开发壁垒</h4>
          <div className="barriers-grid">
            <div className="barrier-card">
              <div className="barrier-header">
                <div className="barrier-icon">🚀</div>
                <h5>加速学习曲线</h5>
              </div>
              <p>新手开发者可以通过AI获得实时指导和解释，理解复杂概念和代码</p>
              <div className="transformation">
                <div className="before">从数月掌握技术栈</div>
                <div className="arrow">→</div>
                <div className="after">缩短至数周上手开发</div>
              </div>
            </div>
            
            <div className="barrier-card">
              <div className="barrier-header">
                <div className="barrier-icon">🌉</div>
                <h5>跨领域知识鸿沟</h5>
              </div>
              <p>AI助手可以填补专业领域知识空缺，支持跨学科开发</p>
              <div className="transformation">
                <div className="before">单一技术栈专家</div>
                <div className="arrow">→</div>
                <div className="after">多领域开发能力</div>
              </div>
            </div>
            
            <div className="barrier-card">
              <div className="barrier-header">
                <div className="barrier-icon">📝</div>
                <h5>从需求到代码的转换</h5>
              </div>
              <p>业务专家可以直接用自然语言描述需求，AI转化为可执行代码</p>
              <div className="transformation">
                <div className="before">依赖开发团队实现</div>
                <div className="arrow">→</div>
                <div className="after">业务专家直接参与开发</div>
              </div>
            </div>
            
            <div className="barrier-card">
              <div className="barrier-header">
                <div className="barrier-icon">🔍</div>
                <h5>错误诊断与修复</h5>
              </div>
              <p>AI可以解释复杂错误信息，提供解决方案和学习资源</p>
              <div className="transformation">
                <div className="before">卡壳数小时寻找解决方案</div>
                <div className="arrow">→</div>
                <div className="after">快速理解并解决问题</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="customer-expansion">
          <h4>拓展客户群体的实践策略</h4>
          <div className="strategies-container">
            <div className="expansion-strategy">
              <h5>AI增强的教程与文档</h5>
              <p>将静态文档转变为交互式学习体验，用户可提问并获得上下文回答</p>
              <div className="benefit">
                <strong>收益:</strong> 降低入门门槛，支持自助学习，减少支持成本
              </div>
            </div>
            
            <div className="expansion-strategy">
              <h5>低代码/无代码扩展</h5>
              <p>使用AI桥接图形化界面与代码实现，让非技术用户也能创建定制功能</p>
              <div className="benefit">
                <strong>收益:</strong> 产品可触达更广泛用户群体，包括业务分析师和领域专家
              </div>
            </div>
            
            <div className="expansion-strategy">
              <h5>智能模板与起始项目</h5>
              <p>提供AI生成的项目模板库，用户描述需求即可获得定制起点</p>
              <div className="benefit">
                <strong>收益:</strong> 减少创建新项目的摩擦，加速客户价值实现
              </div>
            </div>
            
            <div className="expansion-strategy">
              <h5>AI驱动的社区支持</h5>
              <p>建立AI辅助的用户社区，自动回答常见问题，总结解决方案</p>
              <div className="benefit">
                <strong>收益:</strong> 提升社区活跃度，增强用户黏性，降低支持成本
              </div>
            </div>
          </div>
        </div>
        
        <div className="success-story">
          <h4>真实案例：基于AI的客户群体扩展</h4>
          <div className="story-content">
            <p>某开发工具公司通过集成AI助手，将产品用户从专业开发者扩展到IT管理员和业务分析师，6个月内用户基数增长120%，其中非专业开发者占新增用户的65%。关键成功因素是将复杂API操作转换为自然语言交互，并提供智能模板和上下文辅助。</p>
          </div>
        </div>
      </div>
      
      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide19;