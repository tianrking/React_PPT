// src/slides/Slide3.jsx - 传统VS AI开发流程
import React from 'react';

const Slide3 = () => {
  return (
    <div className="slide-content">
      <h2>I. 引言：智能开发新纪元</h2>
      <h3>传统开发 vs AI辅助开发流程对比</h3>
      
      <div className="comparison-container">
        {/* 左右两栏比较 */}
        <div className="comparison-columns">
          {/* 左侧：传统开发 */}
          <div className="comparison-column">
            <h4 className="column-title">传统开发流程</h4>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-box">
                  <h5>需求分析</h5>
                  <p>开发者：深入理解领域知识和技术规范</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-box">
                  <h5>设计架构</h5>
                  <p>开发者：查阅大量文档和最佳实践</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-box">
                  <h5>编写代码</h5>
                  <p>开发者：逐行编写、调试复杂逻辑</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-box">
                  <h5>代码测试</h5>
                  <p>开发者：设计测试用例、边界条件分析</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-box">
                  <h5>人工检验与代码审查</h5>
                  <p>团队成员互相检查代码质量和安全性</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-box">
                  <h5>持续集成与部署</h5>
                  <p>开发者：建立和维护复杂的CI/CD管道</p>
                </div>
              </div>
            </div>
            <div className="feedback-loop">
              <span className="feedback-arrow">↑</span>
              <span className="feedback-line">────────────</span>
              <span className="feedback-arrow">←</span>
            </div>
          </div>
          
          {/* 中间连接线 */}
          <div className="comparison-connector">
            <div className="connector-arrow">→</div>
            <div className="connector-arrow">→</div>
            <div className="connector-arrow">→</div>
            <div className="connector-arrow">→</div>
            <div className="connector-arrow">→</div>
            <div className="connector-arrow">→</div>
          </div>
          
          {/* 右侧：AI辅助开发 */}
          <div className="comparison-column highlighted">
            <h4 className="column-title">AI辅助开发流程</h4>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-box">
                  <h5>AI辅助需求分析</h5>
                  <p>开发者：提供高层目标，审核AI建议</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-box">
                  <h5>AI推荐架构方案</h5>
                  <p>开发者：选择最佳方案，调整细节</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-box">
                  <h5>AI代码生成与补全</h5>
                  <p>开发者：引导生成方向，审核与修改</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-box">
                  <h5>AI辅助测试生成</h5>
                  <p>开发者：补充特定测试场景，验证结果</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-box">
                  <h5>混合代码审查</h5>
                  <p>AI初筛问题，人工决策关键点</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-box">
                  <h5>智能化CI/CD</h5>
                  <p>开发者：审核自动配置，关注异常点</p>
                </div>
              </div>
            </div>
            <div className="feedback-loop highlighted">
              <span className="feedback-arrow">↑</span>
              <span className="feedback-line">────────────</span>
              <span className="feedback-arrow">←</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="notes">
        <p><strong>关键变革：</strong> 每个环节从"手动执行"转向"AI辅助+人工引导"模式，开发者角色从执行者变为决策者</p>
      </div>
      
      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide3;