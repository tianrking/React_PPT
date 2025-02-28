react-presentation/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── images/                  # 图片资源
├── src/
│   ├── components/              # 共享组件
│   │   ├── PresentationControls.jsx  # 控制按钮组件
│   │   └── SlideContainer.jsx        # 幻灯片容器
│   ├── slides/                  # 各幻灯片组件
│   │   ├── Slide1.jsx           # 封面幻灯片
│   │   ├── Slide2.jsx           # 引言幻灯片
│   │   └── index.js             # 导出所有幻灯片的索引文件
│   ├── styles/                  # 样式文件
│   │   ├── main.css             # 全局样式
│   │   └── slides.css           # 幻灯片特定样式
│   ├── App.jsx                  # 主应用组件
│   ├── index.jsx                # 入口文件
│   └── PresentationManager.jsx  # 演示管理器组件
└── package.json                 # 项目依赖


# 创建新的React项目
npx create-react-app ai-presentation

# 进入项目目录
cd ai-presentation

# 启动项目确认一切正常
npm start