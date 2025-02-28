// src/slides/Slide12.jsx - 案例 1 演示：Cursor + PlatformIO 点亮 WS2812
import React, { useState } from 'react';

// 假 URL，后续替换为真实路径
const setupVideo = 'images/CURSOR_CODE-2.mp4';
const codeVideo = 'images/CURSOR_LED.mp4';

const Slide12 = () => {
  const [isPromptVisible, setIsPromptVisible] = useState(false); // 控制悬浮窗口显示

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
            className="Slide12-show-prompt"
            onClick={() => setIsPromptVisible(true)}
          >
            查看 Prompt 示例
          </span>
        </p>
      </div>

      {/* 悬浮 Prompt 窗口 */}
      {isPromptVisible && (
        <div className="Slide12-prompt-overlay" onClick={() => setIsPromptVisible(false)}>
          <div className="Slide12-prompt-box" onClick={(e) => e.stopPropagation()}>
            <h4>嵌入式开发专家 Prompt 示例</h4>
            <div className="Slide12-prompt-content">
              <p>
                你是一个嵌入式开发专家，精通 PlatformIO，用于项目创建、代码编写、编译和烧录。我需要你帮助我实现一个自动化嵌入式开发流程，使用 PlatformIO。以下是具体要求和步骤：
              </p>

              <h5>环境使能命令表</h5>
              <p>根据操作系统和终端类型，提供以下激活 PlatformIO 虚拟环境的命令（假设 PlatformIO 已通过 pip 全局安装）：</p>

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
                <li>
                  <strong>环境准备</strong>：
                  <p>根据我指定的操作系统（Windows、macOS 或 Linux）和终端类型（CMD、PowerShell、Terminal），从上表中选择并提供激活 PlatformIO 虚拟环境的命令。</p>
                  <p>如果命令无效，提示我安装 PlatformIO：<code>python -m pip install platformio</code>。</p>
                </li>
                <li>
                  <strong>创建项目</strong>：
                  <p>根据我提供的硬件平台（限定为 "seeed_xiao_esp32c3" 或 "seeed_xiao_esp32s3"），生成 PlatformIO 项目。</p>
                  <p>使用 pio init 命令，确保项目结构正确。</p>
                  <p>在 platformio.ini 中配置模板如下：</p>
                  <pre>[env:&lt;board&gt;]
                    platform = espressif32
                    board = &lt;seeed_xiao_esp32c3 或 seeed_xiao_esp32s3&gt;
                    platform_packages =
                    framework-arduinoespressif32 @ https://github.com/espressif/arduino-esp32.git#2.0.17
                    framework = arduino
                    monitor_speed = 115200</pre>
                  <p>支持用户可选配置：lib_deps、build_flags、board_build.partitions，如未指定则留空。</p>
                </li>
                <li>
                  <strong>生成代码</strong>：
                  <p>在 src/main.cpp 中生成示例代码（例如 LED 闪烁或特定功能），适配我指定的硬件平台和引脚。</p>
                  <p>如果我指定了功能（例如 WS2812 控制），添加对应代码，并在 platformio.ini 中添加相关 lib_deps（例如 fastled/FastLED）。</p>
                </li>
                <li>
                  <strong>编译项目</strong>：
                  <p>提供编译命令（pio run），并简要解释成功的输出（例如 "SUCCESS" 表示编译完成）。</p>
                  <p>列出常见编译错误及解决方法（如缺少库、引脚定义错误）。</p>
                </li>
                <li>
                  <strong>烧录代码</strong>：
                  <p>提供烧录命令（pio run -t upload）。</p>
                  <p>如果需要指定串口（例如 COM3 或 /dev/ttyUSB0），询问我并说明如何在 platformio.ini 中添加 upload_port = &lt;端口&gt;。</p>
                </li>
                <li>
                  <strong>输出格式</strong>：
                  <p>用 Markdown 标题分隔每步（例如 ## Step 1: 环境准备）。</p>
                  <p>提供可复制的命令和代码块。</p>
                  <p>用简洁自然的语言解释每步的目的。</p>
                  <p>提示用户可以在 platformio.ini 中配置 lib_deps（库依赖）、build_flags（编译标志）、board_build.partitions（分区表，例如 huge_app.csv）。</p>
                </li>
              </ol>

              <h5>用户输入</h5>
              <ul>
                <li>操作系统：&lt;用户填入，例如 Windows&gt;</li>
                <li>终端类型：&lt;用户填入，例如 PowerShell&gt;</li>
                <li>硬件平台：&lt;用户填入，仅限 seeed_xiao_esp32c3 或 seeed_xiao_esp32s3&gt;</li>
                <li>引脚：&lt;用户填入，例如 D0-D10&gt;</li>
                <li>功能需求（可选）：&lt;用户填入，例如 使用 D1 控制 WS2812 灯珠&gt;</li>
                <li>可选配置（可选）：&lt;用户填入，例如 lib_deps = fastled/FastLED, build_flags = -D CORE_DEBUG_LEVEL=5, board_build.partitions = huge_app.csv&gt;</li>
              </ul>

              <p>请从头到尾实现这个流程。如果我后续有其他需求（例如更换硬件或增加功能），根据我的输入动态调整。确保 platformio.ini 使用指定模板，限制 framework = arduino、monitor_speed = 115200、platform_packages = framework-arduinoespressif32 @ https://github.com/espressif/arduino-esp32.git#2.0.17，并只支持 seeed_xiao_esp32c3 或 seeed_xiao_esp32s3 两种板型。</p>
            </div>

            <button
              className="Slide12-close-btn"
              onClick={() => setIsPromptVisible(false)}
            >
              关闭
            </button>
          </div>
        </div>
      )}

      {/* 教学步骤与视频 */}
      <div className="Slide12-content-grid">
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

      <div className="slide-note">
        Cursor + PlatformIO：通过规范引导与智能 Prompt，解锁嵌入式开发的无限可能。
      </div>

      <div className="footer">案例 1 完成 - WS2812 项目实战教学</div>
    </div>
  );
};

export default Slide12;