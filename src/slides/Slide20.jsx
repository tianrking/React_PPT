// src/slides/Slide20.jsx - 要点回顾 & AI融入工作流的方式
import React from 'react';

const Slide20 = () => {
  return (
    <div className="slide-content">
      <h2>AI工具的底层原理与启示</h2>
      <h3>MCP架构：AI应用的核心实现机制</h3>
      
      <div className="Slide20-architecture">
        <div className="architecture-diagram">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 800 400" 
            className="architecture-image"
          >
            {/* 黄色背景 - Your Computer */}
            <rect x="10" y="10" width="680" height="330" fill="#ffffdd" stroke="#cccc88" strokeWidth="2" rx="5" ry="5" />
            <text x="350" y="30" textAnchor="middle" fontWeight="bold" fontSize="14">Your Computer</text>
            
            {/* MCP Client Box */}
            <rect x="50" y="170" width="150" height="70" fill="#e6e6ff" stroke="#9999cc" strokeWidth="1" rx="3" ry="3" />
            <text x="125" y="195" textAnchor="middle" fontWeight="bold" fontSize="12">Host with MCP Client</text>
            <text x="125" y="215" textAnchor="middle" fontSize="11">(Claude, IDEs, Tools)</text>
            
            {/* Server A */}
            <rect x="350" y="70" width="100" height="50" fill="#e6e6ff" stroke="#9999cc" strokeWidth="1" rx="3" ry="3" />
            <text x="400" y="100" textAnchor="middle" fontWeight="bold" fontSize="12">MCP Server A</text>
            
            {/* Server B */}
            <rect x="350" y="180" width="100" height="50" fill="#e6e6ff" stroke="#9999cc" strokeWidth="1" rx="3" ry="3" />
            <text x="400" y="210" textAnchor="middle" fontWeight="bold" fontSize="12">MCP Server B</text>
            
            {/* Server C */}
            <rect x="350" y="290" width="100" height="50" fill="#e6e6ff" stroke="#9999cc" strokeWidth="1" rx="3" ry="3" />
            <text x="400" y="320" textAnchor="middle" fontWeight="bold" fontSize="12">MCP Server C</text>
            
            {/* Data Source A */}
            <ellipse cx="600" cy="95" rx="70" ry="40" fill="#e6e6ff" stroke="#9999cc" strokeWidth="1" />
            <text x="600" y="90" textAnchor="middle" fontWeight="bold" fontSize="12">Local</text>
            <text x="600" y="105" textAnchor="middle" fontSize="12">Data Source A</text>
            
            {/* Data Source B */}
            <ellipse cx="600" cy="205" rx="70" ry="40" fill="#e6e6ff" stroke="#9999cc" strokeWidth="1" />
            <text x="600" y="200" textAnchor="middle" fontWeight="bold" fontSize="12">Local</text>
            <text x="600" y="215" textAnchor="middle" fontSize="12">Data Source B</text>
            
            {/* Internet Box */}
            <rect x="570" y="360" width="120" height="30" fill="#ffffdd" stroke="#cccc88" strokeWidth="2" rx="5" ry="5" />
            <text x="630" y="380" textAnchor="middle" fontWeight="bold" fontSize="14">Internet</text>
            
            {/* Remote Service */}
            <ellipse cx="630" cy="430" rx="70" ry="40" fill="#e6e6ff" stroke="#9999cc" strokeWidth="1" />
            <text x="630" y="425" textAnchor="middle" fontWeight="bold" fontSize="12">Remote</text>
            <text x="630" y="440" textAnchor="middle" fontSize="12">Service C</text>
            
            {/* Connection Lines */}
            {/* Client to Server A */}
            <path d="M 200 180 C 250 150, 300 95, 350 95" fill="none" stroke="#333" strokeWidth="1.5" />
            <text x="260" y="130" textAnchor="middle" fontSize="11">MCP Protocol</text>
            <polygon points="345,95 335,91 335,99" fill="#333" />
            
            {/* Client to Server B */}
            <line x1="200" y1="205" x2="350" y2="205" stroke="#333" strokeWidth="1.5" />
            <text x="275" y="195" textAnchor="middle" fontSize="11">MCP Protocol</text>
            <polygon points="345,205 335,201 335,209" fill="#333" />
            
            {/* Client to Server C */}
            <path d="M 200 230 C 250 260, 300 315, 350 315" fill="none" stroke="#333" strokeWidth="1.5" />
            <text x="260" y="280" textAnchor="middle" fontSize="11">MCP Protocol</text>
            <polygon points="345,315 335,311 335,319" fill="#333" />
            
            {/* Server A to Data Source A */}
            <line x1="450" y1="95" x2="530" y2="95" stroke="#333" strokeWidth="1.5" />
            <polygon points="525,95 515,91 515,99" fill="#333" />
            <polygon points="455,95 465,91 465,99" fill="#333" />
            
            {/* Server B to Data Source B */}
            <line x1="450" y1="205" x2="530" y2="205" stroke="#333" strokeWidth="1.5" />
            <polygon points="525,205 515,201 515,209" fill="#333" />
            <polygon points="455,205 465,201 465,209" fill="#333" />
            
            {/* Server C to Web API */}
            <path d="M 450 315 C 480 315, 520 350, 570 390" fill="none" stroke="#333" strokeWidth="1.5" />
            <text x="500" y="335" textAnchor="middle" fontSize="11">Web APIs</text>
            <polygon points="565,387 557,380 557,394" fill="#333" />
            
            {/* Internet to Remote Service */}
            <path d="M 630 390 C 630 400, 630 410, 630 390" fill="none" stroke="#333" strokeWidth="1.5" />
            <polygon points="630,390 626,400 634,400" fill="#333" />
            
            {/* Copyright */}
            <text x="700" y="455" textAnchor="end" fontSize="10" fill="#999">知乎 @goofy</text>
          </svg>
        </div>
        <div className="architecture-caption">
          Cursor、Trae 等AI工具底层均采用MCP (Model-Client-Provider)架构
        </div>
      </div>
      
      <div className="Slide20-principles-grid">
        <div className="principle-box">
          <h4>核心原理</h4>
          <ul>
            <li>MCP协议连接客户端工具与本地模型服务</li>
            <li>本地服务器可访问文件系统与外部API</li>
            <li>AI推理由服务端完成，结果返回客户端执行</li>
            <li>多服务器架构实现不同能力的组合</li>
          </ul>
        </div>
        <div className="principle-box">
          <h4>启示与机会</h4>
          <ul>
            <li>基于相同架构构建专业领域AI应用</li>
            <li>组合多种数据源扩展AI能力边界</li>
            <li>开发特定行业的MCP服务实现垂直场景</li>
            <li>利用本地计算+云端能力实现混合架构</li>
          </ul>
        </div>
      </div>
      
      <div className="Slide20-application">
        <h4>潜在应用方向</h4>
        <div className="application-examples">
          <div className="app-example">
            <span className="app-badge">设计领域</span>
            <p>连接设计软件与设计资源库，实现AI辅助创意生成与设计优化</p>
          </div>
          <div className="app-example">
            <span className="app-badge">数据分析</span>
            <p>打通分析工具与数据库，实现自然语言查询与智能报表生成</p>
          </div>
          <div className="app-example">
            <span className="app-badge">研发管理</span>
            <p>集成项目管理工具与代码库，提供智能化需求分析与任务分解</p>
          </div>
        </div>
      </div>
      
      <div className="slide-note">
        AI工具的核心价值：将AI能力与专业工具深度融合，突破传统软件的能力边界
      </div>
    </div>
  );
};

export default Slide20;