// src/slides/Slide17.jsx - 未来趋势与发展方向
import React from 'react';

const Slide17 = () => {
  return (
    <div className="slide-content">
      <h2>IV. 总结与展望：AI 开发的无限未来</h2>
      <h3>未来趋势与发展方向</h3>
      
      <div className="trends-container">
        <div className="trends-row">
          <div className="trend-card">
            <div className="trend-header">
              <div className="trend-icon">🧠</div>
              <h4>技术趋势</h4>
            </div>
            <ul className="trend-list">
              <li>
                <strong>更深层的代码理解</strong>
                <p>从文件级到项目级语义理解，掌握复杂系统架构</p>
              </li>
              <li>
                <strong>自主性提升</strong>
                <p>从辅助编码到自主完成复杂开发任务的能力演进</p>
              </li>
              <li>
                <strong>领域特化AI</strong>
                <p>针对特定技术栈和行业领域的专业化模型出现</p>
              </li>
              <li>
                <strong>多模态交互</strong>
                <p>结合语音、图像识别，支持更自然的开发交互方式</p>
              </li>
            </ul>
          </div>
          
          <div className="trend-card">
            <div className="trend-header">
              <div className="trend-icon">🔧</div>
              <h4>工具生态趋势</h4>
            </div>
            <ul className="trend-list">
              <li>
                <strong>IDE深度融合</strong>
                <p>AI能力成为IDE标准功能，无缝集成开发环境</p>
              </li>
              <li>
                <strong>本地化与私有化</strong>
                <p>小型高效模型支持企业私有化部署，保护代码安全</p>
              </li>
              <li>
                <strong>团队级AI助手</strong>
                <p>学习团队代码风格和架构知识的定制化助手</p>
              </li>
              <li>
                <strong>智能化DevOps</strong>
                <p>贯穿开发、测试、部署全流程的AI自动化工具链</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="paradigm-shift">
          <h4>软件工程范式转变</h4>
          <div className="shift-timeline">
            <div className="timeline-point past">
              <div className="point-time">过去</div>
              <div className="point-content">
                <strong>手工编码驱动</strong>
                <p>开发者手写所有代码，关注实现细节</p>
              </div>
            </div>
            
            <div className="timeline-point present">
              <div className="point-time">现在</div>
              <div className="point-content">
                <strong>AI辅助编码</strong>
                <p>开发者与AI协作，关注问题解决</p>
              </div>
            </div>
            
            <div className="timeline-point future">
              <div className="point-time">未来</div>
              <div className="point-content">
                <strong>需求驱动开发</strong>
                <p>开发者描述需求，AI生成实现，人类审核</p>
              </div>
            </div>
            
            <div className="timeline-point far-future">
              <div className="point-time">远期</div>
              <div className="point-content">
                <strong>意图驱动系统</strong>
                <p>用户直接描述需求，AI设计并实现完整系统</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide17;