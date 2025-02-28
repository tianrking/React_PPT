// src/slides/Slide4.jsx - 实际开发案例对比
import React from 'react';

const Slide4 = () => {
  return (
    <div className="slide-content">
      <h2>I. 引言：智能开发新纪元</h2>
      <h3>实际开发案例：工作量对比</h3>
      
      <div className="cases-container">
        {/* 案例1：屏幕驱动移植 */}
        <div className="case-section">
          <h4 className="case-title">案例1：屏幕驱动移植</h4>
          
          <div className="case-comparison">
            {/* 传统方法 */}
            <div className="case-method">
              <h5 className="method-title">传统开发方法</h5>
              <ul className="method-points">
                <li>深入理解原始驱动源码</li>
                <li>手动分析硬件接口差异</li>
                <li>逐行调整关键参数</li>
                <li>反复测试与调试启动问题</li>
              </ul>
              <div className="method-effort">估计工作量：3-5天</div>
            </div>
            
            {/* AI辅助方法 */}
            <div className="case-method ai-method">
              <h5 className="method-title">AI辅助开发方法</h5>
              <ul className="method-points">
                <li>AI辅助理解驱动架构与API</li>
                <li>提供目标平台硬件参数，自动适配</li>
                <li>AI生成关键替换代码</li>
                <li>开发者专注异常情况分析</li>
              </ul>
              <div className="method-effort">估计工作量：1-2天</div>
            </div>
          </div>
        </div>
        
        {/* 分隔线 */}
        <div className="case-divider"></div>
        
        {/* 案例2：开源项目私有化部署 */}
        <div className="case-section">
          <h4 className="case-title">案例2：开源项目私有化部署</h4>
          
          <div className="case-comparison">
            {/* 传统方法 */}
            <div className="case-method">
              <h5 className="method-title">传统开发方法</h5>
              <ul className="method-points">
                <li>仔细阅读项目文档与依赖关系</li>
                <li>手动解决环境兼容性问题</li>
                <li>处理授权与认证系统调整</li>
                <li>调试网络与存储配置问题</li>
                <li>编写定制化部署文档</li>
              </ul>
              <div className="method-effort">估计工作量：1-2周</div>
            </div>
            
            {/* AI辅助方法 */}
            <div className="case-method ai-method">
              <h5 className="method-title">AI辅助开发方法</h5>
              <ul className="method-points">
                <li>AI分析项目架构与依赖图谱</li>
                <li>自动生成适配环境配置脚本</li>
                <li>提供安全性改造建议与代码</li>
                <li>AI生成定制部署管道</li>
                <li>自动生成详细部署文档</li>
              </ul>
              <div className="method-effort">估计工作量：2-4天</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="notes">
        <p><strong>显著提效：</strong> 嵌入式开发时间缩短50%+，开源项目部署时间从周级缩短至天级</p>
      </div>
      
      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide4;