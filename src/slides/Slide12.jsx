// src/slides/Slide12.jsx - 案例 1 演示：Cursor + PlatformIO 点亮 WS2812
import React, { useState } from 'react';

// 假 URL，后续替换为真实路径
const setupVideo = 'https://fakeurl.com/cursor_ws2812_setup.mp4';
const codeVideo = 'https://fakeurl.com/cursor_ws2812_code.mp4';

const Slide12 = () => {
  const [isPromptOpen, setIsPromptOpen] = useState(false); // 控制折叠状态

  return (
    <div className="slide-content">
      <h2>案例 1：Cursor + PlatformIO</h2>
      <h3>实战教学 - 从零点亮 WS2812 灯珠</h3>
      
      {/* 文案区域 */}
      <div className="Slide12-intro">
        <p>
          <strong>目标：</strong> 通过 Cursor 的 AI 能力，打破嵌入式开发的门槛，拓展用户群体的边界。
          我们希望让完全不懂编程的新手，或仅略懂一点的 makers 和艺术家，也能快速上手，独立完成一个简单的业务逻辑——点亮 WS2812 灯珠。
          这个过程将展示如何下载工具、配置环境、指定硬件配置、编写代码、实现逻辑、编译并烧录到设备，最终点亮灯珠，满足用户从创意到实践的需求。
        </p>
        <p>
          <strong>现状与改进：</strong> 虽然 Cursor 提供了强大的自动化功能，但对于新手来说，缺乏明确的引导可能导致摸索时间过长。
          我们需要的，是<span className="highlight">规范的、有引导性的产品资料</span>，以及一个<span className="highlight">预先设定好的 Prompt</span>，
          帮助用户快速理解步骤并高效输入指令，从而降低学习曲线，真正实现“人人可创作”的目标。
          <span
            className="Slide12-toggle-prompt"
            onClick={() => setIsPromptOpen(!isPromptOpen)}
          >
            {isPromptOpen ? '收起 Prompt 示例' : '查看 Prompt 示例'}
          </span>
        </p>
        
        {/* 折叠的 Prompt 示例 */}
        {isPromptOpen && (
          <div className="Slide12-prompt-box">
            <h4>嵌入式开发专家 Prompt 示例</h4>
            <p>
              你是一个嵌入式开发专家，精通 PlatformIO，用于项目创建、代码编写、编译和烧录。我需要你帮助我实现一个自动化嵌入式开发流程，使用 PlatformIO。以下是具体要求和步骤：
            </p>
            <h5>环境使能命令表</h5>
            <p>根据操作系统和终端类型，提供以下激活 PlatformIO 虚拟环境的命令（假设 PlatformIO 已通过 `pip` 全局安装）：</p>
            <table>
              <thead>
                <tr>
                  <th>操作系统</th>
                  <th>终端类型</th>
                  <th>命令</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Windows</td>
                  <td>CMD</td>
                  <td><code>%USERPROFILE%\.platformio\penv\Scripts\activate.bat</code></td>
                </tr>
                <tr>
                  <td>Windows</td>
                  <td>PowerShell</td>
                  <td><code>. "$env:USERPROFILE\.platformio\penv\Scripts\Activate.ps1"</code></td>
                </tr>
                <tr>
                  <td>macOS</td>
                  <td>Terminal (zsh/bash)</td>
                  <td><code>source ~/.platformio/penv/bin/activate</code></td>
                </tr>
                <tr>
                  <td>Linux</td>
                  <td>Terminal (bash/zsh)</td>
                  <td><code>source ~/.platformio/penv/bin/activate</code></td>
                </tr>
              </tbody>
            </table>
            <h5>开发流程要求</h5>
            <ol>
              <li><strong>环境准备</strong>：根据我指定的操作系统和终端类型，从上表中选择并提供激活命令。如果无效，提示安装 PlatformIO：`python -m pip install platformio`。</li>
              <li><strong>创建项目</strong>：根据硬件平台（例如 "xiaoesp32s3"）和框架（例如 "arduino-esp32-2.0.17"），生成项目，使用 `pio init` 配置 `platformio.ini`。</li>
              <li><strong>生成代码</strong>：在 `src/main.cpp` 中生成适配硬件和引脚的代码（例如 WS2812 控制），添加库依赖。</li>
              <li><strong>编译项目</strong>：提供命令 `pio run`，解释成功输出，列出常见错误及解决方法。</li>
              <li><strong>烧录代码</strong>：提供命令 `pio run -t upload`，若需串口，询问并说明设置。</li>
              <li><strong>输出格式</strong>：用 Markdown 标题分隔，提供可复制命令和代码，用简洁语言解释。</li>
            </ol>
            <h5>用户输入</h5>
            <p>现在，请根据以下信息执行完整流程：</p>
            <ul>
              <li>操作系统：&lt;用户填入，例如 Windows&gt;</li>
              <li>终端类型：&lt;用户填入，例如 PowerShell&gt;</li>
              <li>硬件平台：&lt;用户填入，例如 xiaoesp32s3&gt;</li>
              <li>框架：&lt;用户填入，例如 arduino-esp32-2.0.17&gt;</li>
              <li>引脚：&lt;用户填入，例如 D0-D10&gt;</li>
              <li>功能需求（可选）：&lt;用户填入，例如 使用 D1 控制 WS2812 灯珠&gt;</li>
            </ul>
            <p>请从头到尾实现这个流程，并支持后续动态调整。</p>
          </div>
        )}
      </div>
      
      {/* 教学步骤与视频 */}
      <div className="Slide12-content-grid">
        {/* 第一步：初始化与配置 */}
        <div className="Slide12-step-box">
          <div className="Slide12-step-header">
            <h4>1. 下载工具与配置环境</h4>
            <span className="feature-pill">自动配置</span>
          </div>
          <div className="Slide12-step-content">
            <p>
              使用 Cursor 初始化 PlatformIO 项目，自动下载 ESP32 支持和 FastLED 库，生成 WS2812 配置文件。
            </p>
            <div className="Slide12-video-wrapper">
              <video controls width="100%">
                <source src={setupVideo} type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>
            <div className="Slide12-video-caption">
              Cursor 自动化生成项目结构与配置文件，简化新手入门。
            </div>
          </div>
        </div>
        
        {/* 第二步：代码编写与烧录 */}
        <div className="Slide12-step-box">
          <div className="Slide12-step-header">
            <h4>2. 编写代码与烧录运行</h4>
            <span className="feature-pill">智能开发</span>
          </div>
          <div className="Slide12-step-content">
            <p>
              Cursor 根据提示生成 WS2812 控制代码，调试错误并烧录到 ESP32，点亮灯珠。
            </p>
            <div className="Slide12-video-wrapper">
              <video controls width="100%">
                <source src={codeVideo} type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>
            <div className="Slide12-video-caption">
              从代码生成到运行，Cursor 助力新手快速实现创意。
            </div>
          </div>
        </div>
      </div>
      
      {/* 备注 */}
      <div className="slide-note">
        Cursor + PlatformIO：通过规范引导与智能 Prompt，解锁嵌入式开发的无限可能。
      </div>
      
      {/* 页脚 */}
      <div className="footer">案例 1 完成 - WS2812 项目实战教学</div>
    </div>
  );
};

export default Slide12;