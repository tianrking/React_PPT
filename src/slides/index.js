// src/slides/index.js
import Slide1 from './Slide1'; // 封面
import Slide2 from './Slide2'; // 目录
import Slide3 from './Slide3'; // 传统vs AI开发流程
import Slide4 from './Slide4'; // 实际开发案例对比
import Slide5 from './Slide5'; // 开发者角色转变
import Slide6 from './Slide6'; // 大模型最新进展
import Slide7 from './Slide7'; // Cursor与Trae对比
import Slide8 from './Slide8'; // 功能实战对比一
import Slide9 from './Slide9'; // 功能实战对比二
import Slide10 from './Slide10'; // 实战演练标题页
import Slide11 from './Slide11'; // 案例1简介
import Slide12 from './Slide12'; // 案例1演示
import Slide13 from './Slide13'; // 案例2简介
import Slide14 from './Slide14'; // 案例2演示

import Slide15 from './Slide15';
import Slide16 from './Slide16';
import Slide17 from './Slide17';
import Slide18 from './Slide18';
import Slide19 from './Slide19';

import Slide20 from './Slide20';

import Slide21 from './Slide21';

import Slide22 from './Slide22';
// 导出所有幻灯片的数组
// const allSlides = [
//   Slide1,
//   Slide2,
//   Slide3,
//   Slide4,
//   Slide5,
//   Slide6,
//   Slide7,
//   Slide8,
//   Slide9,
//   Slide10,
//   Slide11,
//   Slide12,
//   Slide13,
//   Slide14,

//   ///MCP
//   Slide21, //15
//   Slide20, //16 
//   Slide22, //17
//   //MCP END

//   // Slide15, //18
//   Slide16,  //19 //18
//   // Slide17,  //20 
//   Slide18,  //21  /19
//   Slide19,  //22  /20


// ];

const allSlides = [
  Slide1,  // 封面
  Slide2,  // 目录
  
  // I. 引言：智能开发新纪元
  Slide6,  // 大模型最新进展 (原本在第6位，现移到引言开始)
  Slide3,  // 传统开发vs AI辅助开发流程对比
  Slide4,  // 实际开发案例工作量对比
  Slide5,  // 开发者角色转变与职责重塑 
  
  // II. 双剑合璧：Cursor与Trae深度解析
  Slide7,  // 两款顶尖AI驱动IDE的全方位对比
  Slide8,  // 功能实战演示对比(一)
  Slide9,  // 功能实战演示对比(二)
  
  // III. 技术深入与实战演练
  Slide10, // 案例介绍
  Slide11, // 案例1：Cursor + PlatformIO
  Slide12, // 案例1实战
  Slide13, // 案例2：Trae + browser-use
  Slide14, // 案例2实战
  
  // MCP技术部分
  Slide21, // MCP技术：开放AI能力的新范式
  Slide20, // MCP与传统RAG技术对比
  Slide22, // Seeed Studio与MCP技术结合应用
  
  // IV. 未来展望与实践指南
  Slide16, // Prompt工程：提升AI开发助手效能的关键
  Slide18, // 开发者(生产者)提效策略
  Slide19, // 降低开发壁垒与拓展客户群体
];

export default allSlides;