// src/slides/Slide7.jsx - Cursor & Trae 详细对比
import React from 'react';

const Slide7 = () => {
  return (
    <div className="slide7_slide-content">
      <h2>II. 双剑合璧：Cursor 与 Trae 深度解析</h2>
      <h3>两款顶尖AI驱动IDE的全方位对比</h3>
      
      <div className="slide7_ide-comparison">
        {/* Cursor部分 */}
        <div className="slide7_ide-card slide7_cursor">
          <div className="slide7_ide-header">
            <h4>Cursor</h4>
            <div className="slide7_ide-subtitle">基于VS Code的AI编辑器 (Anysphere出品)</div>
          </div>
          
          <div className="slide7_ide-content">
            <div className="slide7_feature-section">
              <div className="slide7_feature-block">
                <h5><span className="slide7_feature-icon">⚡</span> 核心功能</h5>
                <ul className="slide7_feature-list">
                  <li><span className="slide7_feature-highlight">Tab 智能补全</span> - 多行预测与自动修复</li>
                  <li><span className="slide7_feature-highlight">Chat 上下文对话</span> - 理解代码库的AI助手</li>
                  <li><span className="slide7_feature-highlight">Agent 代理模式</span> - 端到端完成复杂任务</li>
                  <li><span className="slide7_feature-highlight">Ctrl+K 快速编辑</span> - 内联生成与修改代码</li>
                  <li><span className="slide7_feature-highlight">Composer 项目创建</span> - 交互式构建完整应用</li>
                </ul>
              </div>
            </div>
            
            <div className="slide7_feature-section">
              <div className="slide7_feature-block">
                <h5><span className="slide7_feature-icon">🔍</span> 技术亮点</h5>
                <ul className="slide7_feature-list">
                  <li>一键迁移VS Code配置，零学习成本</li>
                  <li>多平台支持(Windows/Mac/Linux)</li>
                  <li>SOC 2认证的企业级安全保障</li>
                  <li>支持@引用文件和完整代码库</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="slide7_ide-pricing">
            <span className="slide7_pricing-tag">定价:</span> 免费版可用 | Pro版$20/月
          </div>
        </div>
        
        {/* 中间相似功能对比 */}
        <div className="slide7_comparison-column">
          <div className="slide7_similar-features">
            <div className="slide7_similar-feature">
              <div className="slide7_feature-match">
                <div className="slide7_left-feature">Composer</div>
                <div className="slide7_vs">≈</div>
                <div className="slide7_right-feature">Builder</div>
              </div>
              <p>项目级代码生成与构建</p>
            </div>
            
            <div className="slide7_similar-feature">
              <div className="slide7_feature-match">
                <div className="slide7_left-feature">Chat</div>
                <div className="slide7_vs">≈</div>
                <div className="slide7_right-feature">智能问答</div>
              </div>
              <p>上下文感知的AI对话</p>
            </div>
            
            <div className="slide7_similar-feature">
              <div className="slide7_feature-match">
                <div className="slide7_left-feature">Tab补全</div>
                <div className="slide7_vs">≈</div>
                <div className="slide7_right-feature">自动补全</div>
              </div>
              <p>AI驱动的代码生成</p>
            </div>
            
            <div className="slide7_similar-feature">
              <div className="slide7_feature-match">
                <div className="slide7_left-feature">@引用</div>
                <div className="slide7_vs">≈</div>
                <div className="slide7_right-feature">上下文管理</div>
              </div>
              <p>精准理解项目结构</p>
            </div>
          </div>
        </div>
        
        {/* Trae部分 */}
        <div className="slide7_ide-card slide7_trae">
          <div className="slide7_ide-header">
            <h4>Trae</h4>
            <div className="slide7_ide-subtitle">字节跳动出品的AI协作IDE</div>
          </div>
          
          <div className="slide7_ide-content">
            <div className="slide7_feature-section">
              <div className="slide7_feature-block">
                <h5><span className="slide7_feature-icon">⚡</span> 核心功能</h5>
                <ul className="slide7_feature-list">
                  <li><span className="slide7_feature-highlight">Builder模式</span> - 从零构建完整项目</li>
                  <li><span className="slide7_feature-highlight">智能问答</span> - 侧边与内联两种交互方式</li>
                  <li><span className="slide7_feature-highlight">代码自动补全</span> - 智能续写与生成</li>
                  <li><span className="slide7_feature-highlight">多模态输入</span> - 支持图片需求表达</li>
                  <li><span className="slide7_feature-highlight">上下文管理</span> - @引用增强精准度</li>
                </ul>
              </div>
            </div>
            
            <div className="slide7_feature-section">
              <div className="slide7_feature-block">
                <h5><span className="slide7_feature-icon">🔍</span> 技术亮点</h5>
                <ul className="slide7_feature-list">
                  <li>内置AI模型，无需API Key即可使用</li>
                  <li>Webview实时预览，一键浏览器打开</li>
                  <li>自动生成并运行终端命令</li>
                  <li>支持回退至最近10轮对话状态</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="slide7_ide-pricing">
            <span className="slide7_pricing-tag">支持平台:</span> macOS 10.15+ | Windows 10/11
          </div>
        </div>
      </div>
      
      <div className="slide7_use-case-section">
        <h4>应用场景对比</h4>
        <div className="slide7_use-cases">
          <div className="slide7_use-case slide7_cursor-case">
            <div className="slide7_use-case-title">Cursor最适合</div>
            <ul className="slide7_use-case-list">
              <li>VS Code用户无缝过渡</li>
              <li>需要全平台支持的团队</li>
              <li>注重扩展生态系统的项目</li>
              <li>需要企业级安全认证</li>
            </ul>
          </div>
          
          <div className="slide7_use-case slide7_common-case">
            <div className="slide7_use-case-title">共同优势</div>
            <ul className="slide7_use-case-list">
              <li>大幅提升编码效率</li>
              <li>快速原型设计与构建</li>
              <li>智能化解决方案生成</li>
              <li>降低开发门槛</li>
            </ul>
          </div>
          
          <div className="slide7_use-case slide7_trae-case">
            <div className="slide7_use-case-title">Trae最适合</div>
            <ul className="slide7_use-case-list">
              <li>无AI API密钥的快速启动</li>
              <li>需要多模态输入表达需求</li>
              <li>从零构建完整项目</li>
              <li>实时预览应用效果</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="slide7_notes">
        <p>两款IDE各有所长，选择合适的取决于您的具体需求和工作流程。它们代表了当前AI编程辅助工具的不同发展方向。</p>
      </div>
      
      <div className="slide7_footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide7;