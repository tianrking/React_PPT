// src/slides/Slide3.jsx - 传统VS AI开发流程
import React, { useState, useEffect } from 'react';

const Slide3 = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // 处理鼠标悬停事件
  const handleMouseEnter = (stepId) => {
    setHoveredStep(stepId);
  };
  
  const handleMouseLeave = () => {
    setHoveredStep(null);
  };

  // 在组件挂载时触发一次动画
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`slide3-content ${isAnimating ? 'slide3-initial-animation' : ''}`}>
      <h2 className="slide3-title">I. 引言：智能开发新纪元</h2>
      <h3 className="slide3-subtitle">传统开发 vs AI辅助开发流程对比</h3>
      
      <div className="slide3-comparison-container">
        {/* 左右两栏比较 */}
        <div className="slide3-comparison-columns">
          {/* 左侧：传统开发 */}
          <div className="slide3-comparison-column">
            <h4 className="slide3-column-title">传统开发流程</h4>
            <div className="slide3-process-steps">
              <div 
                className={`slide3-process-step ${hoveredStep === 'trad1' ? 'slide3-hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter('trad1')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="slide3-step-box">
                  <div className="slide3-step-number">1</div>
                  <div className="slide3-step-content">
                    <h5>需求分析与技术选型</h5>
                    <p>开发者：深入理解领域知识，手动筛选技术栈和框架</p>
                  </div>
                </div>
              </div>
              <div 
                className={`slide3-process-step ${hoveredStep === 'trad2' ? 'slide3-hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter('trad2')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="slide3-step-box">
                  <div className="slide3-step-number">2</div>
                  <div className="slide3-step-content">
                    <h5>设计架构</h5>
                    <p>开发者：查阅大量文档，配置开发环境，解决依赖问题</p>
                  </div>
                </div>
              </div>
              <div 
                className={`slide3-process-step ${hoveredStep === 'trad3' ? 'slide3-hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter('trad3')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="slide3-step-box">
                  <div className="slide3-step-number">3</div>
                  <div className="slide3-step-content">
                    <h5>整体开发</h5>
                    <p>开发者：按功能层级逐行编写，整体构建复杂逻辑</p>
                  </div>
                </div>
              </div>
              <div 
                className={`slide3-process-step ${hoveredStep === 'trad4' ? 'slide3-hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter('trad4')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="slide3-step-box">
                  <div className="slide3-step-number">4</div>
                  <div className="slide3-step-content">
                    <h5>代码测试</h5>
                    <p>开发者：手动设计测试用例，编写单元测试，反复调试</p>
                  </div>
                </div>
              </div>
              <div 
                className={`slide3-process-step ${hoveredStep === 'trad5' ? 'slide3-hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter('trad5')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="slide3-step-box">
                  <div className="slide3-step-number">5</div>
                  <div className="slide3-step-content">
                    <h5>人工检验与代码审查</h5>
                    <p>团队成员互相检查代码质量，手动追踪问题根源</p>
                  </div>
                </div>
              </div>
              <div 
                className={`slide3-process-step ${hoveredStep === 'trad6' ? 'slide3-hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter('trad6')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="slide3-step-box">
                  <div className="slide3-step-number">6</div>
                  <div className="slide3-step-content">
                    <h5>持续集成与部署</h5>
                    <p>开发者：手动配置部署脚本，管理环境变量和依赖</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide3-feedback-loop">
              <span className="slide3-feedback-arrow">↑</span>
              <span className="slide3-feedback-line">────────────</span>
              <span className="slide3-feedback-arrow">←</span>
            </div>
          </div>
          
          {/* 中间连接线 */}
          <div className="slide3-comparison-connector">
            <div className={`slide3-connector-arrow ${hoveredStep?.startsWith('trad1') || hoveredStep?.startsWith('ai1') ? 'slide3-active-arrow' : ''}`}>→</div>
            <div className={`slide3-connector-arrow ${hoveredStep?.startsWith('trad2') || hoveredStep?.startsWith('ai2') ? 'slide3-active-arrow' : ''}`}>→</div>
            <div className={`slide3-connector-arrow ${hoveredStep?.startsWith('trad3') || hoveredStep?.startsWith('ai3') ? 'slide3-active-arrow' : ''}`}>→</div>
            <div className={`slide3-connector-arrow ${hoveredStep?.startsWith('trad4') || hoveredStep?.startsWith('ai4') ? 'slide3-active-arrow' : ''}`}>→</div>
            <div className={`slide3-connector-arrow ${hoveredStep?.startsWith('trad5') || hoveredStep?.startsWith('ai5') ? 'slide3-active-arrow' : ''}`}>→</div>
            <div className={`slide3-connector-arrow ${hoveredStep?.startsWith('trad6') || hoveredStep?.startsWith('ai6') ? 'slide3-active-arrow' : ''}`}>→</div>
          </div>
          
          {/* 右侧：AI辅助开发 */}
          <div className="slide3-comparison-column slide3-highlighted">
            <h4 className="slide3-column-title">AI辅助开发流程</h4>
            <div className="slide3-process-steps">
              <div 
                className={`slide3-process-step ${hoveredStep === 'ai1' ? 'slide3-hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter('ai1')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="slide3-step-box">
                  <div className="slide3-step-number">1</div>
                  <div className="slide3-step-content">
                    <h5>AI辅助需求分析与技术选型</h5>
                    <p>开发者：<strong>明确目标平台和框架版本</strong>，让AI推荐最佳技术栈</p>
                  </div>
                  <div className="slide3-tooltip">
                    向AI清晰描述目标平台（Web/移动/桌面），指定框架偏好（React/Vue/Angular等）及版本要求，提供目标用户群体特征
                  </div>
                </div>
              </div>
              <div 
                className={`slide3-process-step ${hoveredStep === 'ai2' ? 'slide3-hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter('ai2')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="slide3-step-box">
                  <div className="slide3-step-number">2</div>
                  <div className="slide3-step-content">
                    <h5>AI推荐架构方案与解耦</h5>
                    <p>开发者：<strong>提供关键文档和参考资料</strong>，引导AI将复杂产品解耦为小型模块</p>
                  </div>
                  <div className="slide3-tooltip">
                    上传API文档、设计规范和参考架构，让AI理解业务领域，协助拆分成独立的功能模块，保证接口一致性
                  </div>
                </div>
              </div>
              <div 
                className={`slide3-process-step ${hoveredStep === 'ai3' ? 'slide3-hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter('ai3')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="slide3-step-box">
                  <div className="slide3-step-number">3</div>
                  <div className="slide3-step-content">
                    <h5>AI代码生成与补全</h5>
                    <p>开发者：<strong>逐个模块引导AI开发</strong>，明确软件版本与依赖约束</p>
                  </div>
                  <div className="slide3-tooltip">
                    避免将整个项目一次性提交给AI，而是逐个模块生成代码，确保版本兼容性，指定依赖限制和性能要求
                  </div>
                </div>
              </div>
              <div 
                className={`slide3-process-step ${hoveredStep === 'ai4' ? 'slide3-hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter('ai4')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="slide3-step-box">
                  <div className="slide3-step-number">4</div>
                  <div className="slide3-step-content">
                    <h5>AI辅助测试生成</h5>
                    <p>开发者：<strong>提供测试规范</strong>，验证各模块边界条件与集成效果</p>
                  </div>
                  <div className="slide3-tooltip">
                    指定测试框架和覆盖率要求，让AI生成单元测试、集成测试和端到端测试，确保各模块正确工作并高效协作
                  </div>
                </div>
              </div>
              <div 
                className={`slide3-process-step ${hoveredStep === 'ai5' ? 'slide3-hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter('ai5')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="slide3-step-box">
                  <div className="slide3-step-number">5</div>
                  <div className="slide3-step-content">
                    <h5>混合代码审查</h5>
                    <p>AI扫描代码质量和安全问题，<strong>人工审核模块间交互与业务逻辑</strong></p>
                  </div>
                  <div className="slide3-tooltip">
                    利用AI快速识别常见问题（内存泄漏、安全漏洞、性能瓶颈），团队重点审查业务核心逻辑和模块间通信
                  </div>
                </div>
              </div>
              <div 
                className={`slide3-process-step ${hoveredStep === 'ai6' ? 'slide3-hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter('ai6')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="slide3-step-box">
                  <div className="slide3-step-number">6</div>
                  <div className="slide3-step-content">
                    <h5>智能化CI/CD</h5>
                    <p>开发者：<strong>指定部署环境要求</strong>，AI生成部署配置与监控方案</p>
                  </div>
                  <div className="slide3-tooltip">
                    明确目标环境（AWS/Azure/GCP）、容器化要求和扩展性需求，让AI生成适合的部署脚本和监控配置
                  </div>
                </div>
              </div>
            </div>
            <div className="slide3-feedback-loop slide3-highlighted">
              <span className="slide3-feedback-arrow">↑</span>
              <span className="slide3-feedback-line">────────────</span>
              <span className="slide3-feedback-arrow">←</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="slide3-notes">
        <p><strong>关键变革：</strong> 从"开发者执行全部任务"到"开发者指导AI+关键决策"模式，提供明确的<strong>平台、框架、版本</strong>及<strong>参考资料</strong>，通过模块化开发提高效率与质量</p>
      </div>
      
      <div className="slide3-key-principles">
        <div className="slide3-principle">
          <div className="slide3-principle-icon">📋</div>
          <div className="slide3-principle-content">
            <h5>明确平台与框架</h5>
            <p>向AI提供明确的目标平台、框架版本和约束条件</p>
          </div>
        </div>
        <div className="slide3-principle">
          <div className="slide3-principle-icon">🧩</div>
          <div className="slide3-principle-content">
            <h5>拆分与解耦</h5>
            <p>将复杂产品解耦为独立模块，逐个实现而非整体生成</p>
          </div>
        </div>
        <div className="slide3-principle">
          <div className="slide3-principle-icon">📚</div>
          <div className="slide3-principle-content">
            <h5>提供充分文档</h5>
            <p>输入相关API文档、设计规范和行业最佳实践</p>
          </div>
        </div>
      </div>
      
      <div className="slide3-footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide3;