// src/slides/Slide16.jsx - Prompt工程与开发者效能
import React from 'react';

const Slide16 = () => {
  return (
    <div className="slide-content">
      <h2>IV. 总结与展望：AI 开发的无限未来</h2>
      <h3>Prompt工程：提升AI开发助手效能的关键</h3>
      
      <div className="prompt-engineering">
        <div className="principles-section">
          <h4>高效Prompt的核心原则</h4>
          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-icon">🎯</div>
              <h5>明确目标</h5>
              <p>清晰定义期望输出的格式和内容</p>
            </div>
            
            <div className="principle-card">
              <div className="principle-icon">🧩</div>
              <h5>结构化信息</h5>
              <p>使用标题、列表组织复杂需求</p>
            </div>
            
            <div className="principle-card">
              <div className="principle-icon">🔍</div>
              <h5>提供上下文</h5>
              <p>共享必要的背景和相关代码</p>
            </div>
            
            <div className="principle-card">
              <div className="principle-icon">🔄</div>
              <h5>迭代优化</h5>
              <p>根据结果反馈调整提示词</p>
            </div>
          </div>
        </div>
        
        <div className="patterns-section">
          <h4>开发场景的Prompt模式</h4>
          <div className="pattern-table-wrapper">
            <table className="pattern-table">
              <thead>
                <tr>
                  <th>场景</th>
                  <th>Prompt模式</th>
                  <th>关键要素</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>代码生成</td>
                  <td>"你是[领域]专家，实现[功能]，考虑[约束]..."</td>
                  <td>功能需求、技术约束、示例输入/输出</td>
                </tr>
                <tr>
                  <td>代码调试</td>
                  <td>"分析以下代码错误，解释原因并提供修复方案..."</td>
                  <td>错误信息、上下文代码、期望行为</td>
                </tr>
                <tr>
                  <td>代码重构</td>
                  <td>"优化下面的代码，关注[性能/可读性/安全性]..."</td>
                  <td>优化目标、当前代码、性能瓶颈</td>
                </tr>
                <tr>
                  <td>文档生成</td>
                  <td>"为以下代码生成[文档类型]，包括[要素]..."</td>
                  <td>代码片段、文档格式、目标受众</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="prompt-example">
          <h4>实例：嵌入式开发Prompt模板</h4>
          <div className="example-preview">
            <pre>
{`你是嵌入式开发专家，精通PlatformIO。请帮我实现：
1. 环境：{操作系统}，{终端类型}
2. 硬件：{硬件平台}，针脚：{引脚规格}
3. 功能：{详细功能描述}

请提供以下内容：
- 完整环境设置命令
- platformio.ini配置
- 主要源代码实现
- 编译与烧录指南

格式要求：使用Markdown分隔各部分，代码块使用\`\`\`标记`}
            </pre>
          </div>
          <div className="prompt-tips">
            <p><strong>提示：</strong> 团队可以建立Prompt模板库，标准化AI交互，提高一致性和效率</p>
          </div>
        </div>
      </div>
      
      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide16;