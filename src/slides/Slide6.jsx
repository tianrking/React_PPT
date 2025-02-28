// src/slides/Slide6.jsx - 议程概览与其他智能体
import React from 'react';

const Slide6 = () => {
  return (
    <div className="slide-content">
      <h2>I. 引言：智能开发新纪元</h2>
      <h3>议程概览 & 其他热门开源智能体简介</h3>
      <div className="two-column">
        <div className="column">
          <h4>今日议程</h4>
          <ul>
            <li>全面了解Cursor与Trae的功能与特点</li>
            <li>如何结合开源框架提升开发效率</li>
            <li>实际案例演示：嵌入式开发与浏览器自动化</li>
            <li>未来展望：AI开发工具的发展方向</li>
          </ul>
        </div>
        
        <div className="column">
          <h4>其他热门AI开发辅助工具</h4>
          <ul>
            <li><strong>GitHub Copilot</strong>：集成于多种IDE的AI辅助工具</li>
            <li><strong>Codeium</strong>：轻量级免费替代方案</li>
            <li><strong>TabNine</strong>：注重隐私的本地AI补全</li>
            <li><strong>Devin</strong>：自主完成开发任务的AI工程师</li>
            <li><strong>AutoGPT</strong>：自动执行复杂任务的智能体</li>
          </ul>
        </div>
      </div>
      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide6;