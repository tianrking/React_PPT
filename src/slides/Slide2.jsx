// src/slides/Slide2.jsx - 目录幻灯片
import React from 'react';

const Slide2 = () => {
  return (
    <div className="slide-content">
      <h2>目录</h2>
      <div className="two-column">
        <div className="column">
          <h3>I. 引言：智能开发新纪元</h3>
          <ul>
            <li>AI 辅助编程浪潮来袭</li>
            <li>OPENAI, Claude, XAI... 大模型最新进展</li>
            <li>Cursor & Trae: 两款 AI 驱动的 IDE</li>
            <li>议程概览 & 其他热门开源智能体简介</li>
          </ul>
          
          <h3>II. 双剑合璧：Cursor 与 Trae 深度解析</h3>
          <ul>
            <li>Cursor：跨平台的老牌智能编程伙伴</li>
            <li>Trae：新型的 AI 编程利器</li>
            <li>对比与选择：谁更适合你？</li>
          </ul>
        </div>
        
        <div className="column">
          <h3>III. 实战演练：AI 赋能开发</h3>
          <ul>
            <li>案例 1：Cursor + platformio = 嵌入式开发利器</li>
            <li>案例 2：Trae + browser-use = AI 控制浏览器</li>
          </ul>
          
          <h3>IV. 总结与展望：AI 开发的无限未来</h3>
          <ul>
            <li>要点回顾 & AI 融入工作流的N种方式</li>
            <li>未来趋势与发展方向</li>
            <li>开发者(生产者)提效的一些分享</li>
            <li>扩大客户群体，降低开发壁垒</li>
          </ul>
        </div>
      </div>
      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide2;