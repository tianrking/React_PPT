// src/slides/Slide15.jsx - 要点回顾 & AI融入工作流的方式
import React from 'react';

const Slide15 = () => {
  return (
    <div className="slide-content">
      <h2>IV. 总结与展望：AI 开发的无限未来</h2>
      <h3>要点回顾 & AI融入工作流的多种方式</h3>
      
      <div className="summary-grid">
        <div className="summary-card">
          <h4>核心变革回顾</h4>
          <ul>
            <li>开发流程从<strong>手动执行</strong>转向<strong>AI辅助+人工引导</strong></li>
            <li>开发者角色从<strong>编码实现者</strong>转变为<strong>创意引导者</strong></li>
            <li>工作重心从<strong>编写代码</strong>转向<strong>解决问题和系统设计</strong></li>
            <li>效率提升可达<strong>200-300%</strong>，特别是在重复性任务中</li>
          </ul>
        </div>
        
        <div className="summary-card">
          <h4>AI融入工作流的方式</h4>
          <div className="method-grid">
            <div className="method-item">
              <div className="method-icon">🔌</div>
              <div className="method-content">
                <h5>IDE直接集成</h5>
                <p>Cursor、Trae等工具提供即插即用体验</p>
              </div>
            </div>
            
            <div className="method-item">
              <div className="method-icon">🔄</div>
              <div className="method-content">
                <h5>API调用集成</h5>
                <p>将AI能力嵌入现有工具链和系统</p>
              </div>
            </div>
            
            <div className="method-item">
              <div className="method-icon">⚙️</div>
              <div className="method-content">
                <h5>自动化流程</h5>
                <p>结合CI/CD、自动测试等DevOps流程</p>
              </div>
            </div>
            
            <div className="method-item">
              <div className="method-icon">👥</div>
              <div className="method-content">
                <h5>团队协作模式</h5>
                <p>AI扮演"虚拟团队成员"角色</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="selection-guide">
        <h4>选择适合的集成方式</h4>
        <table className="integration-table">
          <thead>
            <tr>
              <th>集成方式</th>
              <th>适用场景</th>
              <th>实施复杂度</th>
              <th>适合团队</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IDE集成</td>
              <td>个人开发提效、原型设计</td>
              <td>低 (直接使用)</td>
              <td>各类规模团队</td>
            </tr>
            <tr>
              <td>API集成</td>
              <td>定制化需求、企业应用</td>
              <td>中 (需开发)</td>
              <td>有开发资源的团队</td>
            </tr>
            <tr>
              <td>自动化流程</td>
              <td>重复性工作、质量控制</td>
              <td>中高 (系统集成)</td>
              <td>成熟DevOps团队</td>
            </tr>
            <tr>
              <td>协作模式</td>
              <td>复杂项目协作、知识共享</td>
              <td>高 (流程再造)</td>
              <td>创新型组织</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide15;