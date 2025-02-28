// src/slides/Slide5.jsx - 开发者角色转变
import React from 'react';

const Slide5 = () => {
  return (
    <div className="slide-content">
      <h2>I. 引言：智能开发新纪元</h2>
      <h3>开发者角色转变</h3>
      
      <div className="roles-container">
        <div className="roles-comparison">
          {/* 传统开发者角色 */}
          <div className="role-column">
            <h4 className="role-header">传统开发中的开发者</h4>
            
            <div className="role-items">
              <div className="role-item">
                <div className="role-number">1</div>
                <div className="role-content">
                  <h5>编码实现者</h5>
                  <p>手动编写每一行代码</p>
                </div>
              </div>
              
              <div className="role-item">
                <div className="role-number">2</div>
                <div className="role-content">
                  <h5>问题解决者</h5>
                  <p>独自调试复杂问题</p>
                </div>
              </div>
              
              <div className="role-item">
                <div className="role-number">3</div>
                <div className="role-content">
                  <h5>知识搬运工</h5>
                  <p>反复查阅文档和StackOverflow</p>
                </div>
              </div>
              
              <div className="role-item">
                <div className="role-number">4</div>
                <div className="role-content">
                  <h5>全栈负责人</h5>
                  <p>所有环节都需深入参与</p>
                </div>
              </div>
            </div>
            
            <div className="time-allocation">
              <h5>时间分配：</h5>
              <div className="time-bars">
                <div className="time-bar thinking" style={{width: '15%'}}>
                  <span className="time-label">创意思考 (15%)</span>
                </div>
                <div className="time-bar coding" style={{width: '60%'}}>
                  <span className="time-label">编码实现 (60%)</span>
                </div>
                <div className="time-bar testing" style={{width: '25%'}}>
                  <span className="time-label">测试 (25%)</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI辅助开发者角色 */}
          <div className="role-column ai-role">
            <h4 className="role-header">AI辅助开发中的开发者</h4>
            
            <div className="role-items">
              <div className="role-item">
                <div className="role-number">1</div>
                <div className="role-content">
                  <h5>创意引导者</h5>
                  <p>定义目标和引导AI实现方向</p>
                </div>
              </div>
              
              <div className="role-item">
                <div className="role-number">2</div>
                <div className="role-content">
                  <h5>质量把关者</h5>
                  <p>审核AI生成内容，确保质量</p>
                </div>
              </div>
              
              <div className="role-item">
                <div className="role-number">3</div>
                <div className="role-content">
                  <h5>系统设计师</h5>
                  <p>关注高层次架构与整体设计</p>
                </div>
              </div>
              
              <div className="role-item">
                <div className="role-number">4</div>
                <div className="role-content">
                  <h5>协作编排者</h5>
                  <p>人机协作，各取所长</p>
                </div>
              </div>
            </div>
            
            <div className="time-allocation">
              <h5>时间分配：</h5>
              <div className="time-bars">
                <div className="time-bar thinking" style={{width: '65%'}}>
                  <span className="time-label">创意思考 (65%)</span>
                </div>
                <div className="time-bar coding" style={{width: '25%'}}>
                  <span className="time-label">审核 (25%)</span>
                </div>
                <div className="time-bar testing" style={{width: '10%'}}>
                  <span className="time-label">测试 (10%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="notes">
        <p><strong>时间分配变化：</strong> 创意思考时间从15%提升至65%，编码实现时间从60%下降至25%</p>
      </div>
      
      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide5;