// Slide23 - Manus AI Agent MCP功能演示
import React, { useState, useRef } from 'react';

const Slide23 = () => {
  // 视频引用
  const videoSrc1 = './images/manus_seo_demo.mp4';
  const videoSrc2 = './images/manus_seo_demo.mp4';
  const videoSrc3 = './images/manus_seo_demo.mp4';
  const videoSrc4 = './images/manus_seo_demo.mp4';
  
  // 视频引用和控制
  const videoRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];
  
  // 控制当前正在播放的视频
  const handleVideoPlay = (index) => {
    // 暂停其他所有视频
    videoRefs.forEach((ref, i) => {
      if (i !== index && ref.current) {
        ref.current.pause();
      }
    });
  };

  return (
    <div className="slide23_container">
      <h1 className="slide23_title">Manus AI Agent: MCP功能落地实例</h1>
      
      <div className="slide23_features_container">
        <div className="slide23_feature_description">
          <h2 className="slide23_subtitle">智能交互与数据摄入特性展示</h2>
          <p className="slide23_description">Manus AI Agent通过MCP协议实现了更高效的人机协同方式，以下四个视频展示了其核心能力</p>
        </div>
        
        <div className="slide23_video_grid">
          <div className="slide23_video_card slide23_card_blue">
            <div className="slide23_video_container">
              <video 
                className="slide23_video" 
                ref={videoRefs[0]}
                onPlay={() => handleVideoPlay(0)}
                controls
              >
                <source src={videoSrc1} type="video/mp4" />
                您的浏览器不支持视频标签
              </video>
              <div className="slide23_video_overlay">
                <div className="slide23_play_icon"></div>
              </div>
            </div>
            <div className="slide23_video_content">
              <div className="slide23_icon_wrapper slide23_icon_blue">
                <i className="slide23_feature_icon slide23_icon_chat"></i>
              </div>
              <h3 className="slide23_video_title">自然语言交互</h3>
              <p className="slide23_video_description">通过MCP实现上下文感知的智能对话与指令执行</p>
            </div>
          </div>
          
          <div className="slide23_video_card slide23_card_purple">
            <div className="slide23_video_container">
              <video 
                className="slide23_video" 
                ref={videoRefs[1]}
                onPlay={() => handleVideoPlay(1)}
                controls
              >
                <source src={videoSrc2} type="video/mp4" />
                您的浏览器不支持视频标签
              </video>
              <div className="slide23_video_overlay">
                <div className="slide23_play_icon"></div>
              </div>
            </div>
            <div className="slide23_video_content">
              <div className="slide23_icon_wrapper slide23_icon_purple">
                <i className="slide23_feature_icon slide23_icon_control"></i>
              </div>
              <h3 className="slide23_video_title">环境智能操控</h3>
              <p className="slide23_video_description">利用工具调用能力实时控制外部系统与设备</p>
            </div>
          </div>
          
          <div className="slide23_video_card slide23_card_green">
            <div className="slide23_video_container">
              <video 
                className="slide23_video" 
                ref={videoRefs[2]}
                onPlay={() => handleVideoPlay(2)}
                controls
              >
                <source src={videoSrc3} type="video/mp4" />
                您的浏览器不支持视频标签
              </video>
              <div className="slide23_video_overlay">
                <div className="slide23_play_icon"></div>
              </div>
            </div>
            <div className="slide23_video_content">
              <div className="slide23_icon_wrapper slide23_icon_green">
                <i className="slide23_feature_icon slide23_icon_data"></i>
              </div>
              <h3 className="slide23_video_title">高效数据摄入</h3>
              <p className="slide23_video_description">自动化数据采集、结构化处理与分析能力</p>
            </div>
          </div>
          
          <div className="slide23_video_card slide23_card_orange">
            <div className="slide23_video_container">
              <video 
                className="slide23_video" 
                ref={videoRefs[3]}
                onPlay={() => handleVideoPlay(3)}
                controls
              >
                <source src={videoSrc4} type="video/mp4" />
                您的浏览器不支持视频标签
              </video>
              <div className="slide23_video_overlay">
                <div className="slide23_play_icon"></div>
              </div>
            </div>
            <div className="slide23_video_content">
              <div className="slide23_icon_wrapper slide23_icon_orange">
                <i className="slide23_feature_icon slide23_icon_multimodal"></i>
              </div>
              <h3 className="slide23_video_title">多模态理解与执行</h3>
              <p className="slide23_video_description">结合视觉、文本和操作的复杂任务解决方案</p>
            </div>
          </div>
        </div>
        
        <div className="slide23_benefits">
          <h3 className="slide23_benefits_title">Manus AI Agent核心优势</h3>
          <ul className="slide23_benefits_list">
            <li className="slide23_benefit_item slide23_benefit_blue">
              <span className="slide23_highlight">资源访问:</span> 无缝连接多种数据源与服务
            </li>
            <li className="slide23_benefit_item slide23_benefit_purple">
              <span className="slide23_highlight">工具调用:</span> 自动化执行复杂操作流程
            </li>
            <li className="slide23_benefit_item slide23_benefit_green">
              <span className="slide23_highlight">上下文感知:</span> 保持长期对话与任务连贯性
            </li>
            <li className="slide23_benefit_item slide23_benefit_orange">
              <span className="slide23_highlight">模块化扩展:</span> 轻松集成新功能与第三方服务
            </li>
          </ul>
        </div>
      </div>
      
      <div className="slide23_footer">
        <div className="slide23_footer_text">MCP协议实践：从概念到落地的创新应用</div>
        <div className="slide23_page_number">23</div>
      </div>
    </div>
  );
};

export default Slide23;
