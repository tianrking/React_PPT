import React from 'react';

const Slide20 = () => {
  return (
    <div className="slide-content">
      <h2 className="slide-title">MCP与传统RAG技术对比</h2>
      <h3 className="slide-subtitle">全新架构下的AI解决方案效率比较</h3>
      
      <div className="comparison-container">
        {/* 左侧: MCP协议 */}
        <div className="comparison-column mcp-column">
          <div className="protocol-header">
            <h3 className="protocol-title">MCP协议</h3>
            <div className="protocol-badge">新一代信息交互标准</div>
          </div>
          
          <div className="architecture-diagram">
            <div className="diagram-header">架构流程</div>
            <div className="mcp-diagram">
              <div className="diagram-box user-box">
                <div className="box-icon">👤</div>
                <div className="box-title">用户</div>
                <div className="box-arrow">↓</div>
              </div>
              
              <div className="diagram-box client-box">
                <div className="box-icon">💻</div>
                <div className="box-title">MCP客户端</div>
                <div className="box-content">Claude Desktop, Cursor, Continue</div>
                <div className="box-arrow">↓</div>
              </div>
              
              <div className="diagram-flow-split">
                <div className="flow-line"></div>
                <div className="flow-line"></div>
                <div className="flow-line"></div>
              </div>
              
              <div className="diagram-boxes-row">
                <div className="diagram-box server-box">
                  <div className="box-icon">📂</div>
                  <div className="box-title">文件服务器</div>
                </div>
                
                <div className="diagram-box server-box">
                  <div className="box-icon">🔍</div>
                  <div className="box-title">搜索服务</div>
                </div>
                
                <div className="diagram-box server-box">
                  <div className="box-icon">🗃️</div>
                  <div className="box-title">数据库服务</div>
                </div>
              </div>
              
              <div className="diagram-flow-join">
                <div className="flow-line"></div>
                <div className="flow-line"></div>
                <div className="flow-line"></div>
              </div>
              
              <div className="diagram-box llm-box">
                <div className="box-icon">🧠</div>
                <div className="box-title">AI大语言模型</div>
                <div className="box-content">Claude, GPT-4, Gemini</div>
                <div className="box-arrow">↓</div>
              </div>
              
              <div className="diagram-box response-box">
                <div className="box-icon">💬</div>
                <div className="box-title">智能响应</div>
                <div className="box-content">上下文感知的回复</div>
              </div>
            </div>
          </div>
          
          <div className="advantages-section">
            <h4 className="section-title">主要优势</h4>
            <ul className="advantages-list">
              <li className="advantage-item">
                <span className="advantage-icon">🔌</span>
                <span className="advantage-text">标准化协议接口，类似AI世界的"USB-C"</span>
              </li>
              <li className="advantage-item">
                <span className="advantage-icon">🔄</span>
                <span className="advantage-text">即插即用的互操作性</span>
              </li>
              <li className="advantage-item">
                <span className="advantage-icon">🛠️</span>
                <span className="advantage-text">支持复杂工具调用与资源访问</span>
              </li>
              <li className="advantage-item">
                <span className="advantage-icon">📊</span>
                <span className="advantage-text">数据处理与传输效率高</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* 右侧: RAG框架 */}
        <div className="comparison-column rag-column">
          <div className="protocol-header">
            <h3 className="protocol-title">传统RAG框架</h3>
            <div className="protocol-badge">检索增强生成技术</div>
          </div>
          
          <div className="architecture-diagram">
            <div className="diagram-header">架构流程</div>
            <div className="rag-diagram">
              <div className="diagram-box user-box">
                <div className="box-icon">👤</div>
                <div className="box-title">用户</div>
                <div className="box-arrow">↓</div>
              </div>
              
              <div className="diagram-box query-box">
                <div className="box-icon">❓</div>
                <div className="box-title">用户查询</div>
                <div className="box-arrow">↓</div>
              </div>
              
              <div className="diagram-box retrieval-box">
                <div className="box-icon">🔍</div>
                <div className="box-title">检索系统</div>
                <div className="box-content">向量数据库搜索相关文档</div>
                <div className="box-arrow">↓</div>
              </div>
              
              <div className="diagram-box context-box">
                <div className="box-icon">📝</div>
                <div className="box-title">上下文组装</div>
                <div className="box-content">组织检索结果与原始问题</div>
                <div className="box-arrow">↓</div>
              </div>
              
              <div className="diagram-box llm-box">
                <div className="box-icon">🧠</div>
                <div className="box-title">AI大语言模型</div>
                <div className="box-content">基于检索内容生成答案</div>
                <div className="box-arrow">↓</div>
              </div>
              
              <div className="diagram-box response-box">
                <div className="box-icon">💬</div>
                <div className="box-title">生成回复</div>
                <div className="box-content">带有引用的答案</div>
              </div>
            </div>
          </div>
          
          <div className="advantages-section">
            <h4 className="section-title">局限性</h4>
            <ul className="limitations-list">
              <li className="limitation-item">
                <span className="limitation-icon">🔗</span>
                <span className="limitation-text">集成复杂，需定制开发对接</span>
              </li>
              <li className="limitation-item">
                <span className="limitation-icon">🧩</span>
                <span className="limitation-text">不同系统间互操作性差</span>
              </li>
              <li className="limitation-item">
                <span className="limitation-icon">📦</span>
                <span className="limitation-text">功能局限于文档检索与内容生成</span>
              </li>
              <li className="limitation-item">
                <span className="limitation-icon">⏱️</span>
                <span className="limitation-text">检索处理流程相对耗时</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="comparison-summary">
        <h4 className="summary-title">关键差异</h4>
        <div className="summary-points">
          <div className="summary-point">
            <span className="summary-icon">🔄</span>
            <div className="summary-content">
              <strong>交互方式:</strong> MCP提供双向通信协议，而传统RAG主要是单向检索增强
            </div>
          </div>
          <div className="summary-point">
            <span className="summary-icon">🧰</span>
            <div className="summary-content">
              <strong>扩展能力:</strong> MCP支持工具调用和资源访问，RAG专注于知识检索
            </div>
          </div>
          <div className="summary-point">
            <span className="summary-icon">🔌</span>
            <div className="summary-content">
              <strong>标准化程度:</strong> MCP旨在建立通用协议，RAG实现往往依赖特定框架
            </div>
          </div>
        </div>
      </div>
      
      <div className="slide-note">
        MCP协议为AI应用提供了比传统RAG更为灵活和可扩展的架构方案，
        特别适合需要与多种数据源和工具集成的复杂AI应用场景。
      </div>
    </div>
  );
};

export default Slide20;