// src/slides/Slide5.jsx - 开发者角色转变
import React from 'react';

const Slide5 = () => {
  return (
    <div className="slide5_slide-content">
      <h2>I. 引言：智能开发新纪元</h2>
      <h3>开发者角色转变与职责重塑</h3>
      
      <div className="slide5_roles-container">
        <div className="slide5_roles-comparison">
          {/* 传统开发者角色 */}
          <div className="slide5_role-column slide5_traditional-role">
            <h4 className="slide5_role-header">传统开发中的开发者</h4>
            
            <div className="slide5_role-items">
              <div className="slide5_role-item">
                <div className="slide5_role-number">1</div>
                <div className="slide5_role-content">
                  <h5>编码实现者</h5>
                  <p>手动编写每一行代码，实现所有细节功能</p>
                  <div className="slide5_role-detail">大量时间用于解决语法和基础逻辑问题</div>
                </div>
              </div>
              
              <div className="slide5_role-item">
                <div className="slide5_role-number">2</div>
                <div className="slide5_role-content">
                  <h5>问题解决者</h5>
                  <p>独自调试复杂问题，逐行分析代码查找缺陷</p>
                  <div className="slide5_role-detail">在排除故障上花费大量时间</div>
                </div>
              </div>
              
              <div className="slide5_role-item">
                <div className="slide5_role-number">3</div>
                <div className="slide5_role-content">
                  <h5>知识搬运工</h5>
                  <p>反复查阅文档和StackOverflow寻找解决方案</p>
                  <div className="slide5_role-detail">需要记忆大量API和语法细节</div>
                </div>
              </div>
              
              <div className="slide5_role-item">
                <div className="slide5_role-number">4</div>
                <div className="slide5_role-content">
                  <h5>全栈负责人</h5>
                  <p>所有环节都需深入参与，精力分散</p>
                  <div className="slide5_role-detail">需掌握前端、后端、部署等多领域知识</div>
                </div>
              </div>
            </div>
            
            <div className="slide5_time-allocation">
              <h5>时间分配：</h5>
              <div className="slide5_time-bars">
                <div className="slide5_time-bar slide5_thinking" style={{width: '15%'}}>
                  <span className="slide5_time-label">创意思考 (15%)</span>
                </div>
                <div className="slide5_time-bar slide5_coding" style={{width: '60%'}}>
                  <span className="slide5_time-label">编码实现 (60%)</span>
                </div>
                <div className="slide5_time-bar slide5_testing" style={{width: '25%'}}>
                  <span className="slide5_time-label">测试 (25%)</span>
                </div>
              </div>
            </div>
            
            <div className="slide5_dev-challenges">
              <h5>主要挑战:</h5>
              <ul>
                <li>技术债务不断累积</li>
                <li>高度依赖个人经验</li>
                <li>创新受限于实现成本</li>
              </ul>
            </div>
          </div>
          
          {/* AI辅助开发者角色 */}
          <div className="slide5_role-column slide5_ai-role">
            <h4 className="slide5_role-header">AI辅助开发中的开发者</h4>
            
            <div className="slide5_role-items">
              <div className="slide5_role-item">
                <div className="slide5_role-number">1</div>
                <div className="slide5_role-content">
                  <h5>创意引导者</h5>
                  <p>定义目标和引导AI实现方向，专注创新思维</p>
                  <div className="slide5_role-detail">专注于"做什么"而非"怎么做"</div>
                </div>
              </div>
              
              <div className="slide5_role-item">
                <div className="slide5_role-number">2</div>
                <div className="slide5_role-content">
                  <h5>质量把关者</h5>
                  <p>审核AI生成内容，确保符合业务需求与标准</p>
                  <div className="slide5_role-detail">将精力集中在代码质量与安全性上</div>
                </div>
              </div>
              
              <div className="slide5_role-item">
                <div className="slide5_role-number">3</div>
                <div className="slide5_role-content">
                  <h5>系统设计师</h5>
                  <p>关注高层次架构与整体设计，委托实现细节</p>
                  <div className="slide5_role-detail">更多时间用于思考架构与扩展性</div>
                </div>
              </div>
              
              <div className="slide5_role-item">
                <div className="slide5_role-number">4</div>
                <div className="slide5_role-content">
                  <h5>协作编排者</h5>
                  <p>人机协作，各取所长，优化团队效能</p>
                  <div className="slide5_role-detail">学会高效引导AI成为开发伙伴</div>
                </div>
              </div>
            </div>
            
            <div className="slide5_time-allocation">
              <h5>时间分配：</h5>
              <div className="slide5_time-bars">
                <div className="slide5_time-bar slide5_thinking" style={{width: '65%'}}>
                  <span className="slide5_time-label">创意思考 (65%)</span>
                </div>
                <div className="slide5_time-bar slide5_coding" style={{width: '25%'}}>
                  <span className="slide5_time-label">审核优化 (25%)</span>
                </div>
                <div className="slide5_time-bar slide5_testing" style={{width: '10%'}}>
                  <span className="slide5_time-label">测试 (10%)</span>
                </div>
              </div>
            </div>
            
            <div className="slide5_dev-challenges">
              <h5>新技能需求:</h5>
              <ul>
                <li>精确需求表达与引导能力</li>
                <li>AI输出评估与提炼能力</li>
                <li>系统化思维与组合创新</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="slide5_paradigm-shift">
        <h4>开发范式转变</h4>
        <div className="slide5_paradigm-comparison">
          <div className="slide5_paradigm-item">
            <div className="slide5_paradigm-label">传统开发</div>
            <div className="slide5_paradigm-arrow">→</div>
            <div className="slide5_paradigm-new">AI辅助开发</div>
          </div>
          <div className="slide5_paradigm-detail">
            <span>手工编码</span>
            <span>→</span>
            <span>提示工程</span>
          </div>
          <div className="slide5_paradigm-detail">
            <span>反复试错</span>
            <span>→</span>
            <span>迭代优化</span>
          </div>
          <div className="slide5_paradigm-detail">
            <span>个体能力</span>
            <span>→</span>
            <span>人机协作</span>
          </div>
        </div>
      </div>
      
      <div className="slide5_notes">
        <p><strong>时间分配变化:</strong> 创意思考时间从15%提升至65%，编码实现时间从60%下降至25%</p>
        <p><strong>核心转变:</strong> 从"手写每一行代码"到"指导AI实现创意"的根本性角色转变</p>
      </div>
      
      <div className="slide5_footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide5;