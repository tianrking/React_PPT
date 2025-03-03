import React from 'react';

const Slide21 = () => {
  return (
    <div className="slide-content">
      <h2>MCP技术：开放AI能力的新范式</h2>
      <h3>Model Context Protocol如何改变AI应用开发</h3>
      
      <div className="Slide21-intro">
        <p>
          MCP（Model Context Protocol）是一个开放协议，标准化了应用程序向AI模型提供上下文的方式，类似于AI世界的"USB-C接口"。
          它是Cursor、Trae等AI工具底层架构的技术标准化实现。
        </p>
      </div>
      
      <div className="Slide21-features-grid">
        <div className="feature-box">
          <h4>MCP核心能力</h4>
          <ul>
            <li><strong>Resources</strong> - 类文件数据，可被客户端读取</li>
            <li><strong>Tools</strong> - 由AI调用的函数（需用户批准）</li>
            <li><strong>Prompts</strong> - 预先编写的模板，辅助完成特定任务</li>
            <li><strong>Sampling</strong> - 允许服务器向AI请求完成</li>
          </ul>
        </div>
        <div className="feature-box">
          <h4>生态系统</h4>
          <ul>
            <li><strong>客户端</strong> - Claude Desktop、Cursor、Continue等</li>
            <li><strong>服务器</strong> - 文件系统、Git、Web抓取、数据库等</li>
            <li><strong>SDK</strong> - Python、TypeScript、Java、Kotlin</li>
            <li><strong>传输方式</strong> - stdio、SSE(Server-Sent Events)等标准通信机制</li>
          </ul>
        </div>
      </div>
      
      <div className="Slide21-implementation">
        <h4>实现示例：天气服务工作流程</h4>
        <div className="workflow-diagram">
          <div className="workflow-step client">
            <div className="step-header">1. 客户端（Claude桌面版）</div>
            <div className="step-content">
              <p>用户：<span className="user-query">"北京明天会下雨吗？"</span></p>
              <p>→ Claude识别需要天气数据</p>
              <p>→ 决定调用MCP天气服务</p>
            </div>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step server">
            <div className="step-header">2. 服务器（天气MCP服务）</div>
            <div className="step-content">
              <p>接收工具调用请求：</p>
              <div className="data-json">
                {`{
  "name": "get_forecast",
  "args": {
    "latitude": 39.9042,
    "longitude": 116.4074
  }
}`}
              </div>
              <p>→ 调用气象API获取数据</p>
              <p>→ 处理并格式化结果</p>
            </div>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step response">
            <div className="step-header">3. 返回结果</div>
            <div className="step-content">
              <p>服务器返回预报数据：</p>
              <div className="data-preview">
                {`明天:
温度: 22°C
风向: 东北风 3级
天气: 多云转晴
降水概率: 10%
---
后天:
温度: 24°C
风向: 东风 2级
天气: 晴
降水概率: 5%`}
              </div>
              <p>→ Claude处理结果</p>
              <p>→ 生成自然语言回答</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="Slide21-application-areas">
        <h4>广泛应用领域</h4>
        <div className="areas-grid">
          <div className="area-item">
            <span className="area-icon">📊</span>
            <div className="area-text">
              <strong>数据访问</strong>
              <p>Postgres、SQLite、Google Drive、文件系统</p>
            </div>
          </div>
          <div className="area-item">
            <span className="area-icon">💻</span>
            <div className="area-text">
              <strong>开发工具</strong>
              <p>Git、GitHub、GitLab、Sentry</p>
            </div>
          </div>
          <div className="area-item">
            <span className="area-icon">🌐</span>
            <div className="area-text">
              <strong>Web自动化</strong>
              <p>搜索、内容获取、浏览器自动化</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="slide-note">
        MCP为我们提供了创建AI增强应用的标准化方法，大幅降低了集成复杂度。<br/>
        基于这一协议，我们可以构建更强大、更开放的AI工具生态系统。
      </div>
    </div>
  );
};

export default Slide21;