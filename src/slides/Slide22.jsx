import React, { useState } from 'react';

const Slide22 = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  
  return (
    <div className="slide-content">
      <h2 className="slide-title">Seeed Studio与MCP技术结合应用</h2>
      <h3 className="slide-subtitle">赋能产品与研发，创造智能硬件新体验</h3>
      
      <div className="Slide22-sections">
        <div 
          className={`Slide22-section internal ${hoveredSection === 'internal' ? 'hovered' : ''}`}
          onMouseEnter={() => setHoveredSection('internal')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <div className="section-header">
            <h4>对内：提升企业效率</h4>
            <span className="section-icon">🚀</span>
          </div>
          <div className="section-content">
            <div className="application-item">
              <div className="app-title">产品知识管理</div>
              <div className="app-detail">
                <p>建立统一的产品知识库：</p>
                <ul>
                  <li>将分散文档、规格转化为结构化数据</li>
                  <li>创建产品关联图谱，实现跨产品知识共享</li>
                  <li>自动关联供应链与生产信息</li>
                </ul>
              </div>
            </div>
            <div className="application-item">
              <div className="app-title">市场与销售支持</div>
              <div className="app-detail">
                <p>提供智能化销售工具：</p>
                <ul>
                  <li>根据客户需求自动匹配最佳产品组合</li>
                  <li>快速生成定制化提案和演示材料</li>
                  <li>实时提供竞品分析与差异化卖点</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className={`Slide22-section external ${hoveredSection === 'external' ? 'hovered' : ''}`}
          onMouseEnter={() => setHoveredSection('external')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <div className="section-header">
            <h4>对外：拓宽用户壁垒</h4>
            <span className="section-icon">🔄</span>
          </div>
          <div className="section-content">
            <div className="application-item">
              <div className="app-title">智能用户支持</div>
              <div className="app-detail">
                <p>大幅提升客户体验：</p>
                <ul>
                  <li>产品使用场景的自动推荐与定制化指南</li>
                  <li>智能解答技术疑问，降低使用障碍</li>
                  <li>收集用户反馈，形成产品改进闭环</li>
                </ul>
              </div>
            </div>
            <div className="application-item">
              <div className="app-title">社区生态赋能</div>
              <div className="app-detail">
                <p>激活开发者社区：</p>
                <ul>
                  <li>智能项目推荐与匹配系统</li>
                  <li>构建知识共享与问题解决平台</li>
                  <li>自动整合社区创意，促进用户创新</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="Slide22-implementation">
        <h4 className="section-title">Seeed Studio MCP应用方案</h4>
        <div className="implementation-diagram">
          <div 
            className={`diagram-item use-cases ${hoveredSection === 'use-cases' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredSection('use-cases')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="diagram-header">核心应用场景</div>
            <div className="diagram-content">
              <ul>
                <li>产品资料智能检索</li>
                <li>技术支持自动化</li>
                <li>用户项目智能推荐</li>
                <li>社区知识整合</li>
              </ul>
            </div>
          </div>
          <div className="diagram-arrow">
            <span className="arrow-icon">→</span>
          </div>
          <div 
            className={`diagram-item mcp-servers ${hoveredSection === 'mcp-servers' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredSection('mcp-servers')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="diagram-header">专用MCP服务器</div>
            <div className="diagram-content">
              <ul>
                <li>产品数据库服务</li>
                <li>社区资源服务</li>
                <li>Grove模块兼容性服务</li>
                <li>项目经验库服务</li>
              </ul>
            </div>
          </div>
          <div className="diagram-arrow">
            <span className="arrow-icon">→</span>
          </div>
          <div 
            className={`diagram-item benefits ${hoveredSection === 'benefits' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredSection('benefits')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="diagram-header">业务价值</div>
            <div className="diagram-content">
              <ul>
                <li>用户留存率显著提升</li>
                <li>技术支持成本大幅降低</li>
                <li>新品上市周期明显缩短</li>
                <li>生态系统扩展加速</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="Slide22-example">
        <h4 className="section-title">MCP服务与普通LLM的对比</h4>
        <div className="example-content">
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="comparison-cell header">用户需求场景</div>
              <div className="comparison-cell header">普通LLM回答</div>
              <div className="comparison-cell header">Seeed MCP服务</div>
            </div>
            <div 
              className={`comparison-row ${hoveredSection === 'comparison-1' ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredSection('comparison-1')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="comparison-cell">
                "哪些传感器适合水质监测？"
              </div>
              <div className="comparison-cell negative">
                提供过时或通用信息<br/>
                可能推荐已停产产品
              </div>
              <div className="comparison-cell positive">
                提供最新产品列表<br/>
                含详细规格和实际库存情况
              </div>
            </div>
            <div 
              className={`comparison-row ${hoveredSection === 'comparison-2' ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredSection('comparison-2')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="comparison-cell">
                "我的XIAO连接I2C传感器出错"
              </div>
              <div className="comparison-cell negative">
                提供通用I2C故障排除步骤<br/>
                不针对特定产品组合
              </div>
              <div className="comparison-cell positive">
                分析特定产品组合已知问题<br/>
                提供针对性解决方案和固件建议
              </div>
            </div>
            <div 
              className={`comparison-row ${hoveredSection === 'comparison-3' ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredSection('comparison-3')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="comparison-cell">
                "想做智能农业监测系统"
              </div>
              <div className="comparison-cell negative">
                概念性建议<br/>
                可能推荐非Seeed产品
              </div>
              <div className="comparison-cell positive">
                完整Seeed产品解决方案<br/>
                包含采购清单和代码示例
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="slide-note">
        MCP服务为Seeed提供超越普通文档或AI助手的智能支持系统，
        既能对内提升效率，又能对外打造专业壁垒，创造差异化竞争优势。
      </div>
    </div>
  );
};

export default Slide22;