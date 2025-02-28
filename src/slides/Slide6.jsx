// src/slides/Slide6.jsx - 大模型最新进展
import React from 'react';

const Slide6 = () => {
  return (
    <div className="slide-content">
      <h2>I. 引言：智能开发新纪元</h2>
      <h3>OPENAI, Claude, XAI... 大模型最新进展</h3>
      
      <div className="models-grid">
        <div className="model-card">
          <div className="model-header">
            <h4>Grok-3</h4>
            <div className="model-date">2025年2月17日</div>
          </div>
          <div className="model-content">
            <p className="model-tagline">xAI的"地球上最聪明的AI"</p>
            <ul className="model-features">
              <li>训练使用10倍计算资源(10万个H100 GPU)</li>
              <li>10万标记超长上下文窗口</li>
              <li>DeepSearch和Big Brain特殊推理模式</li>
              <li>数学和编码基准测试表现强劲</li>
            </ul>
          </div>
        </div>

        <div className="model-card highlight">
          <div className="model-header">
            <h4>Claude Sonnet 3.7</h4>
            <div className="model-date">2025年2月24日</div>
          </div>
          <div className="model-content">
            <p className="model-tagline">首个混合推理模型</p>
            <ul className="model-features">
              <li>提供快速响应和扩展思考两种模式</li>
              <li>SWE-bench得分70.3%，超越o3-mini</li>
              <li>减少不必要的拒绝率45%</li>
              <li>Amazon Bedrock和Google Cloud可用</li>
            </ul>
          </div>
        </div>

        <div className="model-card">
          <div className="model-header">
            <h4>GPT-4.5</h4>
            <div className="model-date">2025年2月27日</div>
          </div>
          <div className="model-content">
            <p className="model-tagline">OpenAI迄今最大模型(内部代号Orion)</p>
            <ul className="model-features">
              <li>通过ChatGPT Pro订阅($200/月)可用</li>
              <li>更像人类的情感智能与理解力</li>
              <li>优化的写作和编程能力</li>
              <li>更好地理解复杂用户提示</li>
            </ul>
          </div>
        </div>

        <div className="model-card">
          <div className="model-header">
            <h4>Gemini 2.0</h4>
            <div className="model-date">2024年12月(2025年2月更新)</div>
          </div>
          <div className="model-content">
            <p className="model-tagline">Google多模态旗舰模型</p>
            <ul className="model-features">
              <li>文本、图像和音频生成与理解</li>
              <li>速度是Gemini Pro 1.5的两倍</li>
              <li>推理和视觉理解能力优异</li>
              <li>Google AI Studio和Vertex AI可用</li>
            </ul>
          </div>
        </div>

        <div className="model-card">
          <div className="model-header">
            <h4>DeepSeek-R1</h4>
            <div className="model-date">2025年1月</div>
          </div>
          <div className="model-content">
            <p className="model-tagline">低成本开源模型(MIT许可)</p>
            <ul className="model-features">
              <li>训练成本仅600万美元(vs GPT-4的1亿)</li>
              <li>数学和编码能力与OpenAI o1相当</li>
              <li>MATH-500和AIME基准表现优异</li>
              <li>移动应用商店排名迅速攀升</li>
            </ul>
          </div>
        </div>

        <div className="model-card">
          <div className="model-header">
            <h4>Llama 3.3</h4>
            <div className="model-date">2024年12月</div>
          </div>
          <div className="model-content">
            <p className="model-tagline">Meta最新开源模型系列</p>
            <ul className="model-features">
              <li>参数规模从1B到405B</li>
              <li>适合多种应用场景</li>
              <li>全开源可商用</li>
              <li>社区驱动的持续改进</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="notes">
        <p><strong>发展趋势：</strong> 大模型朝着更大规模、更长上下文、更专业化推理能力和多模态理解方向发展</p>
      </div>
      
      <div className="footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide6;