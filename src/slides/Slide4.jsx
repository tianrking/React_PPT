// src/slides/Slide4.jsx - 实际开发案例对比
import React from 'react';

const Slide4 = () => {
  const [expandedCode, setExpandedCode] = React.useState({
    stm32: false,
    rp2040: false,
    ldap: false,
    deployment: false
  });

  const toggleCodeBlock = (block) => {
    setExpandedCode(prev => ({
      ...prev,
      [block]: !prev[block]
    }));
  };
  
  return (
    <div className="slide4_slide-content">
      <h2>I. 引言：智能开发新纪元</h2>
      <h3>实际开发案例：工作量对比</h3>
      
      <div className="slide4_cases-container">
        {/* 案例1：屏幕驱动移植 */}
        <div className="slide4_case-section">
          <h4 className="slide4_case-title">案例1：屏幕驱动移植（SPI显示屏跨平台适配）</h4>
          
          <div className="slide4_case-comparison">
            {/* 传统方法 */}
            <div className="slide4_case-method">
              <h5 className="slide4_method-title">传统开发方法</h5>
              
              <div className="slide4_code-example">
                <div className="slide4_code-header" onClick={() => toggleCodeBlock('stm32')}>
                  <span className="slide4_code-platform">STM32 HAL实现方式</span>
                  <span className="slide4_toggle-icon">{expandedCode.stm32 ? '▼' : '▶'}</span>
                </div>
                {expandedCode.stm32 && (
                  <pre className="slide4_code-block">
{`// 初始化SPI配置 
void LCD_SPI_Init(void) {
  hspi1.Instance = SPI1;
  hspi1.Init.Mode = SPI_MODE_MASTER;
  hspi1.Init.CLKPolarity = SPI_POLARITY_HIGH;
  // ...其他STM32特定配置
  HAL_SPI_Init(&hspi1);
}

// 数据发送函数
void LCD_SPI_Send(uint8_t *data, uint16_t size) {
  HAL_SPI_Transmit(&hspi1, data, size, 100);
}

// DMA发送实现
void LCD_SPI_SendDMA(uint8_t *data, uint16_t size) {
  HAL_SPI_Transmit_DMA(&hspi1, data, size);
}`}</pre>
                )}
                {!expandedCode.stm32 && (
                  <div className="slide4_code-summary">
                    点击查看STM32 HAL实现代码（初始化、SPI发送、DMA配置）
                  </div>
                )}
              </div>
              
              <ul className="slide4_method-points">
                <li>耗时分析不同平台SPI硬件规格差异</li>
                <li>手动转换初始化函数与时序参数</li>
                <li>重写DMA发送机制与中断处理</li>
                <li>反复测试解决时序相关问题</li>
              </ul>
              <div className="slide4_method-effort">估计工作量：3-5天</div>
            </div>
            
            {/* AI辅助方法 */}
            <div className="slide4_case-method slide4_ai-method">
              <h5 className="slide4_method-title">AI辅助开发方法</h5>
              
              <div className="slide4_code-example">
                <div className="slide4_code-header" onClick={() => toggleCodeBlock('rp2040')}>
                  <span className="slide4_code-platform">RP2040移植效果</span>
                  <span className="slide4_toggle-icon">{expandedCode.rp2040 ? '▼' : '▶'}</span>
                </div>
                {expandedCode.rp2040 && (
                  <pre className="slide4_code-block">
{`// AI生成的RP2040 PicoSDK适配代码
void LCD_SPI_Init(void) {
  // RP2040特定配置，由AI自动适配
  spi_init(spi0, 10000000);
  spi_set_format(spi0, 8, SPI_CPOL_1, SPI_CPHA_1, SPI_MSB_FIRST);
  gpio_set_function(PIN_SCK, GPIO_FUNC_SPI);
  // ...其他Pico特定引脚配置
}

// 数据发送函数 - AI自动适配接口
void LCD_SPI_Send(uint8_t *data, uint16_t size) {
  spi_write_blocking(spi0, data, size);
}

// DMA发送实现 - AI适配DMA通道
void LCD_SPI_SendDMA(uint8_t *data, uint16_t size) {
  dma_channel_configure(dma_tx, &c, 
                     &spi0->dr, data, size, true);
}`}</pre>
                )}
                {!expandedCode.rp2040 && (
                  <div className="slide4_code-summary">
                    点击查看AI生成的RP2040适配代码（保持相同API）
                  </div>
                )}
              </div>
              
              <ul className="slide4_method-points">
                <li>AI自动分析平台差异并生成等效代码</li>
                <li>智能适配初始化参数与时钟配置</li>
                <li>保持一致的API接口简化集成</li>
                <li>针对不同硬件自动优化DMA配置</li>
              </ul>
              <div className="slide4_method-effort">估计工作量：1-2天</div>
            </div>
          </div>
        </div>
        
        {/* 分隔线 */}
        <div className="slide4_case-divider"></div>
        
        {/* 案例2：开源项目私有化部署 */}
        <div className="slide4_case-section">
          <h4 className="slide4_case-title">案例2：开源项目私有化部署（Grafana监控平台）</h4>
          
          <div className="slide4_case-comparison">
            {/* 传统方法 */}
            <div className="slide4_case-method">
              <h5 className="slide4_method-title">传统开发方法</h5>
              
              <div className="slide4_deployment-steps">
                <div className="slide4_step">
                  <div className="slide4_step-number">1</div>
                  <div className="slide4_step-content">
                    <h6>调研与环境搭建</h6>
                    <p>阅读官方文档、GitHub问题，解决依赖冲突，配置服务器环境</p>
                  </div>
                </div>
                
                <div className="slide4_step">
                  <div className="slide4_step-number">2</div>
                  <div className="slide4_step-content">
                    <h6>认证系统集成</h6>
                    <p>替换默认认证为企业LDAP/OAuth，手动配置加密参数和权限规则</p>
                  </div>
                </div>
                
                <div className="slide4_step">
                  <div className="slide4_step-number">3</div>
                  <div className="slide4_step-content">
                    <h6>数据源安全配置</h6>
                    <p>为内部数据源配置加密传输，处理网络隔离问题，解决证书验证错误</p>
                  </div>
                </div>
                
                <div className="slide4_step">
                  <div className="slide4_step-number">4</div>
                  <div className="slide4_step-content">
                    <h6>容器化与编排</h6>
                    <p>手写Dockerfile和docker-compose文件，调试持久化存储和网络问题</p>
                  </div>
                </div>
              </div>
              
              <div className="slide4_method-effort">估计工作量：1-2周</div>
            </div>
            
            {/* AI辅助方法 */}
            <div className="slide4_case-method slide4_ai-method">
              <h5 className="slide4_method-title">AI辅助开发方法</h5>
              
              <div className="slide4_ai-assistance">
                <div className="slide4_ai-example">
                  <div className="slide4_ai-header" onClick={() => toggleCodeBlock('ldap')}>
                    <span>配置文件适配</span>
                    <span className="slide4_toggle-icon">{expandedCode.ldap ? '▼' : '▶'}</span>
                  </div>
                  {expandedCode.ldap && (
                    <pre className="slide4_ai-block">
{`# AI生成的Grafana LDAP配置示例
[[servers]]
host = "ldap.example.org"
port = 636
use_ssl = true
bind_dn = "cn=grafana,dc=example,dc=org"
search_filter = "(sAMAccountName=%s)"
# AI自动添加安全最佳实践配置
ssl_skip_verify = false
start_tls = true
# ...其他自动生成的安全配置`}</pre>
                  )}
                  {!expandedCode.ldap && (
                    <div className="slide4_code-summary">
                      点击查看AI生成的LDAP配置（含安全最佳实践）
                    </div>
                  )}
                </div>

                <div className="slide4_ai-example">
                  <div className="slide4_ai-header" onClick={() => toggleCodeBlock('deployment')}>
                    <span>自动生成部署脚本</span>
                    <span className="slide4_toggle-icon">{expandedCode.deployment ? '▼' : '▶'}</span>
                  </div>
                  {expandedCode.deployment && (
                    <pre className="slide4_ai-block">
{`# AI生成的部署自动化脚本
#!/bin/bash
# 智能检测环境并安装依赖
detect_os() {
  case $(uname) in
    Linux*)  setup_linux ;;
    Darwin*) setup_macos ;;
  esac
}

setup_linux() {
  # 适配不同Linux发行版
  if [ -f /etc/debian_version ]; then
    apt update && apt install -y ...
  elif [ -f /etc/redhat-release ]; then
    yum install -y ...
  fi
  # ...自动配置防火墙规则
}`}</pre>
                  )}
                  {!expandedCode.deployment && (
                    <div className="slide4_code-summary">
                      点击查看AI生成的跨平台部署脚本
                    </div>
                  )}
                </div>
              </div>
              
              <div className="slide4_ai-benefits">
                <div className="slide4_ai-benefit">
                  <i className="slide4_benefit-icon">⚡</i>
                  <span>AI分析项目架构，生成定制化配置模板</span>
                </div>
                <div className="slide4_ai-benefit">
                  <i className="slide4_benefit-icon">🔒</i>
                  <span>自动应用企业安全最佳实践，无需安全专家介入</span>
                </div>
                <div className="slide4_ai-benefit">
                  <i className="slide4_benefit-icon">🔄</i>
                  <span>生成跨平台部署脚本，自动处理环境差异</span>
                </div>
                <div className="slide4_ai-benefit">
                  <i className="slide4_benefit-icon">📄</i>
                  <span>自动生成企业级部署文档与故障排除指南</span>
                </div>
              </div>
              
              <div className="slide4_method-effort">估计工作量：2-4天</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="slide4_notes">
        <p><strong>显著提效：</strong> 嵌入式驱动移植效率提升60%+，开源平台私有化部署从周级缩短至天级</p>
      </div>
      
      <div className="slide4_footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide4;