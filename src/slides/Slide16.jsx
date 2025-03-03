// src/slides/Slide16.jsx - Prompt工程与开发者效能
import React, { useState } from 'react';

const Slide16 = () => {
  const [activeTab, setActiveTab] = useState('embedded');
  
  const promptTemplates = {
    embedded: {
      title: "嵌入式开发Prompt模板",
      content: `你是嵌入式开发专家，精通PlatformIO。请帮我实现：
1. 环境：{操作系统}，{终端类型}
2. 硬件：{硬件平台}，针脚：{引脚规格}
3. 功能：{详细功能描述}

请提供以下内容：
- 完整环境设置命令
- platformio.ini配置
- 主要源代码实现
- 编译与烧录指南
- 常见错误处理方法

格式要求：使用Markdown分隔各部分，代码块使用\`\`\`标记`
    },
    web: {
      title: "前端组件开发模板",
      content: `你是React专家，精通现代前端开发。请帮我实现：
1. 组件名称：{组件名称}
2. 技术栈：React {版本}，{CSS框架}
3. 功能需求：{详细功能描述}
4. 状态管理：{状态管理方案}

请提供以下内容：
- 组件完整代码实现
- Props接口定义
- 状态管理逻辑
- 样式实现（使用{样式方案}）
- 单元测试示例
- 组件使用示例

性能考虑：
- 避免不必要的重渲染
- 优化大数据集渲染
- 确保可访问性(ARIA)支持`
    },
    backend: {
      title: "后端API开发模板",
      content: `你是后端架构师，精通{语言/框架}。请帮我设计并实现：
1. API名称：{API名称}
2. 功能描述：{功能详述}
3. 数据模型：{数据结构描述}
4. 安全要求：{认证/授权机制}

请提供以下内容：
- API端点定义（路径、方法、参数）
- 完整代码实现
- 数据库交互逻辑
- 错误处理策略
- API文档（Swagger/OpenAPI格式）
- 性能优化建议
- 单元测试与集成测试示例

遵循RESTful设计原则，考虑横向扩展性`
    },
    devops: {
      title: "DevOps自动化模板",
      content: `你是DevOps专家，精通CI/CD流程。请为{项目类型}创建：
1. 环境：{云平台}，{容器编排工具}
2. 项目技术栈：{语言/框架}
3. 部署需求：{部署要求与约束}

请提供以下内容：
- CI/CD流水线配置（使用{CI工具}）
- Dockerfile优化
- Kubernetes配置清单
- 基础设施即代码(IaC)脚本
- 监控与告警设置
- 自动扩缩容策略
- 安全扫描与合规检查集成

确保流程支持蓝绿部署及快速回滚机制`
    }
  };

  return (
    <div className="slide16_slide-content">
      <h2>IV. 总结与展望：AI 开发的无限未来</h2>
      <h3>Prompt工程：提升AI开发助手效能的关键</h3>
      
      <div className="slide16_prompt-engineering">
        <div className="slide16_principles-section">
          <h4>高效Prompt的核心原则</h4>
          <div className="slide16_principles-grid">
            <div className="slide16_principle-card">
              <div className="slide16_principle-icon">🎯</div>
              <h5>明确目标</h5>
              <p>清晰定义期望输出的格式和内容，明确说明需要的细节程度和专业水平</p>
            </div>
            
            <div className="slide16_principle-card">
              <div className="slide16_principle-icon">🧩</div>
              <h5>结构化信息</h5>
              <p>使用标题、列表、编号组织复杂需求，增强可读性和逻辑层次</p>
            </div>
            
            <div className="slide16_principle-card">
              <div className="slide16_principle-icon">🔍</div>
              <h5>提供上下文</h5>
              <p>共享必要的背景信息、相关代码、技术约束和项目术语</p>
            </div>
            
            <div className="slide16_principle-card">
              <div className="slide16_principle-icon">🔄</div>
              <h5>迭代优化</h5>
              <p>根据结果反馈调整提示词，保存有效模式，形成模板库</p>
            </div>

            <div className="slide16_principle-card">
              <div className="slide16_principle-icon">🎭</div>
              <h5>角色设定</h5>
              <p>为AI设定特定专业角色，引导其使用相关领域的思维模式和知识</p>
            </div>
            
            <div className="slide16_principle-card">
              <div className="slide16_principle-icon">📏</div>
              <h5>明确约束</h5>
              <p>提供具体的限制条件、格式要求和评判标准，引导输出方向</p>
            </div>
          </div>
        </div>
        
        <div className="slide16_patterns-section">
          <h4>开发场景的Prompt模式</h4>
          <div className="slide16_pattern-table-wrapper">
            <table className="slide16_pattern-table">
              <thead>
                <tr>
                  <th>场景</th>
                  <th>Prompt模式</th>
                  <th>关键要素</th>
                  <th>效果提升</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>代码生成</td>
                  <td>"你是[领域]专家，实现[功能]，考虑[约束]..."</td>
                  <td>功能需求、技术约束、示例输入/输出、边界条件</td>
                  <td>准确度提升40%</td>
                </tr>
                <tr>
                  <td>代码调试</td>
                  <td>"分析以下代码错误，解释原因并提供修复方案..."</td>
                  <td>错误信息、上下文代码、期望行为、环境细节</td>
                  <td>解决速度提升35%</td>
                </tr>
                <tr>
                  <td>代码重构</td>
                  <td>"优化下面的代码，关注[性能/可读性/安全性]..."</td>
                  <td>优化目标、当前代码、性能瓶颈、设计模式建议</td>
                  <td>代码质量提升50%</td>
                </tr>
                <tr>
                  <td>文档生成</td>
                  <td>"为以下代码生成[文档类型]，包括[要素]..."</td>
                  <td>代码片段、文档格式、目标受众、示例用法</td>
                  <td>文档完整度提升60%</td>
                </tr>
                <tr>
                  <td>架构设计</td>
                  <td>"设计[系统类型]架构，需要支持[需求]，考虑[约束]..."</td>
                  <td>系统需求、扩展性考虑、技术栈限制、未来演进</td>
                  <td>设计质量提升45%</td>
                </tr>
                <tr>
                  <td>测试生成</td>
                  <td>"为[功能/模块]生成单元测试，覆盖[场景]..."</td>
                  <td>功能代码、测试框架、边界条件、异常场景</td>
                  <td>覆盖率提升55%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="slide16_prompt-example">
          <h4>实用Prompt模板库</h4>
          
          <div className="slide16_template-tabs">
            <button 
              className={`slide16_tab-button ${activeTab === 'embedded' ? 'slide16_active-tab' : ''}`}
              onClick={() => setActiveTab('embedded')}
            >
              嵌入式开发
            </button>
            <button 
              className={`slide16_tab-button ${activeTab === 'web' ? 'slide16_active-tab' : ''}`}
              onClick={() => setActiveTab('web')}
            >
              前端组件
            </button>
            <button 
              className={`slide16_tab-button ${activeTab === 'backend' ? 'slide16_active-tab' : ''}`}
              onClick={() => setActiveTab('backend')}
            >
              后端API
            </button>
            <button 
              className={`slide16_tab-button ${activeTab === 'devops' ? 'slide16_active-tab' : ''}`}
              onClick={() => setActiveTab('devops')}
            >
              DevOps
            </button>
          </div>
          
          <div className="slide16_example-preview">
            <div className="slide16_template-header">
              <h5>{promptTemplates[activeTab].title}</h5>
              <div className="slide16_copy-button">复制模板</div>
            </div>
            <pre>{promptTemplates[activeTab].content}</pre>
          </div>
          
          <div className="slide16_prompt-tips">
            <p><strong>提示：</strong> 团队可以建立Prompt模板库，标准化AI交互，提高一致性和效率。每个专业领域维护特定模板，持续优化提升质量。</p>
          </div>
        </div>
      </div>
      
      <div className="slide16_footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide16;