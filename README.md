# AI辅助编程幻灯片演示项目

基于React的模块化幻灯片演示系统，专为"AI辅助编程浪潮来袭"主题设计。每个幻灯片都是一个独立的React组件，便于维护和扩展。

## 项目结构

```
ai-presentation/
├── public/                # 静态资源
│   ├── images/            # 图片资源
│   │   ├── ai-dev-flowchart.svg
│   │   ├── ai-dev-cases.svg
│   │   └── developer-roles.svg
│   └── index.html         # HTML入口文件
├── src/                   # 源代码
│   ├── components/        # 共享组件
│   │   ├── PresentationControls.jsx  # 控制按钮组件
│   │   └── SlideContainer.jsx        # 幻灯片容器
│   ├── slides/            # 各幻灯片组件
│   │   ├── Slide1.jsx     # 封面幻灯片
│   │   ├── Slide2.jsx     # 引言幻灯片
│   │   ├── Slide3.jsx     # 流程对比幻灯片(可选)
│   │   └── index.js       # 导出所有幻灯片的索引文件
│   ├── styles/            # 样式文件
│   │   ├── main.css       # 全局样式
│   │   └── slides.css     # 幻灯片特定样式
│   ├── App.js             # 主应用组件
│   ├── index.js           # 入口文件
│   └── PresentationManager.jsx # 演示管理器组件
└── package.json           # 项目依赖
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

### 构建生产版本

```bash
npm run build
```

## 如何添加新幻灯片

### 步骤1: 创建新的幻灯片组件

在`src/slides`目录下创建一个新的组件文件，例如`Slide4.jsx`：

```jsx
import React from 'react';

const Slide4 = () => {
  return (
    <div className="slide-content">
      <h2>实际开发案例：工作量对比</h2>
      <div className="image-container">
        <img src="/images/ai-dev-cases.svg" alt="实际开发案例" />
      </div>
      <div className="notes">
        <p><strong>说明要点：</strong> 工作量估计基于行业观察与项目实践</p>
      </div>
      <div className="footer">AI辅助编程浪潮来袭</div>
    </div>
  );
};

export default Slide4;
```

### 步骤2: 在索引文件中注册幻灯片

打开`src/slides/index.js`文件，导入并添加新幻灯片组件：

```javascript
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';  // 导入新幻灯片

// 导出所有幻灯片的数组
const allSlides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,  // 添加到数组
];

export default allSlides;
```

就这样，新幻灯片已经添加完成！刷新浏览器，您将看到新添加的幻灯片。

## 幻灯片模板示例

### 标准文本幻灯片

```jsx
import React from 'react';

const StandardSlide = () => {
  return (
    <div className="slide-content">
      <h2>标准页面标题</h2>
      <ul>
        <li>第一个要点</li>
        <li>第二个要点</li>
        <li>第三个要点</li>
      </ul>
      <div className="footer">AI辅助编程浪潮来袭</div>
    </div>
  );
};

export default StandardSlide;
```

### 带图片的幻灯片

```jsx
import React from 'react';

const ImageSlide = () => {
  return (
    <div className="slide-content">
      <h2>带图片的页面</h2>
      <div className="image-container">
        <img src="/images/your-image.svg" alt="图片描述" />
      </div>
      <div className="notes">
        <p><strong>说明：</strong> 这里是图片说明文字</p>
      </div>
      <div className="footer">AI辅助编程浪潮来袭</div>
    </div>
  );
};

export default ImageSlide;
```

### 双栏布局幻灯片

```jsx
import React from 'react';

const TwoColumnSlide = () => {
  return (
    <div className="slide-content">
      <h2>双栏布局页面</h2>
      <div className="two-column">
        <div className="column">
          <h3>左侧标题</h3>
          <ul>
            <li>左侧第一点</li>
            <li>左侧第二点</li>
          </ul>
        </div>
        <div className="column">
          <h3>右侧标题</h3>
          <ul>
            <li>右侧第一点</li>
            <li>右侧第二点</li>
          </ul>
        </div>
      </div>
      <div className="footer">AI辅助编程浪潮来袭</div>
    </div>
  );
};

export default TwoColumnSlide;
```

## 高级用法

### 带状态的交互式幻灯片

```jsx
import React, { useState } from 'react';

const InteractiveSlide = () => {
  const [activeItem, setActiveItem] = useState(0);
  
  const items = [
    { title: '项目一', content: '项目一的详细说明' },
    { title: '项目二', content: '项目二的详细说明' },
    { title: '项目三', content: '项目三的详细说明' },
  ];
  
  return (
    <div className="slide-content">
      <h2>交互式幻灯片</h2>
      <div className="interactive-content">
        <div className="tabs">
          {items.map((item, index) => (
            <button 
              key={index}
              className={`tab ${activeItem === index ? 'active' : ''}`}
              onClick={() => setActiveItem(index)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {items[activeItem].content}
        </div>
      </div>
      <div className="footer">AI辅助编程浪潮来袭</div>
    </div>
  );
};

export default InteractiveSlide;
```

### 带动画的幻灯片

```jsx
import React, { useEffect, useState } from 'react';

const AnimatedSlide = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // 幻灯片显示时触发动画
    setIsVisible(true);
  }, []);
  
  return (
    <div className="slide-content">
      <h2>带动画的幻灯片</h2>
      <ul>
        {['第一点', '第二点', '第三点'].map((item, index) => (
          <li 
            key={index}
            className="fade-in-item"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="footer">AI辅助编程浪潮来袭</div>
    </div>
  );
};

export default AnimatedSlide;
```

## 添加SVG图片

1. 将SVG文件放在`public/images/`目录下
2. 在幻灯片组件中使用相对路径引用图片：

```jsx
<img src="/images/your-image.svg" alt="图片描述" />
```

## 键盘快捷键

- **右箭头**/**空格**/**Page Down**: 下一页
- **左箭头**/**Page Up**: 上一页
- **Home**: 跳到第一页
- **End**: 跳到最后一页

## 自定义样式

如果需要为特定幻灯片添加自定义样式，可以：

1. 在`src/styles/slides.css`中添加新的样式类
2. 在幻灯片组件中使用这些样式类

或者使用内联样式：

```jsx
<div style={{ color: 'red', fontWeight: 'bold' }}>
  自定义样式内容
</div>
```

## 注意事项

- 每个幻灯片组件必须导出为默认导出（export default）
- 需要在`src/slides/index.js`中注册新幻灯片才能显示
- 图片等资源应放在`public/images/`目录下