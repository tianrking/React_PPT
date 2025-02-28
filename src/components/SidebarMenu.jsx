// src/components/SidebarMenu.jsx
import React from 'react';

const SidebarMenu = ({ 
  slides, 
  currentSlideIndex, 
  goToSlide, 
  isOpen, 
  toggleSidebar 
}) => {
  return (
    <div className={`sidebar-menu ${isOpen ? 'open' : 'closed'}`}>
      {/* 侧边栏内容 */}
      <div className="sidebar-content">
        <div className="sidebar-header">
          <h3>目录</h3>
          <button className="close-btn" onClick={toggleSidebar}>×</button>
        </div>
        <ul className="toc-list">
          {slides.map((Slide, index) => {
            // 获取幻灯片标题
            let slideTitle = `幻灯片 ${index + 1}`;
            if (index === 0) slideTitle = "封面";
            if (index === 1) slideTitle = "目录";
            if (index >= 2 && index <= 5) slideTitle = `I-${index-1}: 引言`;
            if (index >= 6 && index <= 8) slideTitle = `II-${index-5}: Cursor与Trae`;
            if (index >= 9 && index <= 10) slideTitle = `III-${index-8}: 实战演练`;
            if (index >= 11) slideTitle = `IV-${index-10}: 总结展望`;
            
            return (
              <li 
                key={index}
                className={currentSlideIndex === index ? 'active' : ''}
                onClick={() => {
                  goToSlide(index);
                  // 在移动设备上，选择后自动关闭侧边栏
                  if (window.innerWidth <= 768) {
                    toggleSidebar();
                  }
                }}
              >
                {slideTitle}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;