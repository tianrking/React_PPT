// src/slides/Slide4.jsx - 实际开发案例对比
import React from 'react';

const Slide4 = () => {
  const [expandedCode, setExpandedCode] = React.useState({
    stm32: false,
    rp2040: false,
    topic: false,
    visual: false,
    sensor: false,
    pipeline: false
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
        
        {/* 案例2：ROS2数据仿真与链路调试 - 替换原有案例 */}
        <div className="slide4_case-section">
          <h4 className="slide4_case-title">案例2：ROS2数据仿真与链路调试（传感器数据可视化与链路验证）</h4>
          
          <div className="slide4_case-comparison">
            {/* 传统方法 */}
            <div className="slide4_case-method">
              <h5 className="slide4_method-title">传统开发方法</h5>
              
              <div className="slide4_code-example">
                <div className="slide4_code-header" onClick={() => toggleCodeBlock('topic')}>
                  <span className="slide4_code-platform">Topic定义与消息发布</span>
                  <span className="slide4_toggle-icon">{expandedCode.topic ? '▼' : '▶'}</span>
                </div>
                {expandedCode.topic && (
                  <pre className="slide4_code-block">
{`// 手动创建传感器数据发布节点
#include "rclcpp/rclcpp.hpp"
#include "sensor_msgs/msg/imu.hpp"
#include <chrono>

class ImuPublisher : public rclcpp::Node {
public:
  ImuPublisher() : Node("imu_publisher") {
    publisher_ = create_publisher<sensor_msgs::msg::Imu>(
      "imu/data", 10);
    timer_ = create_wall_timer(
      std::chrono::milliseconds(100),
      std::bind(&ImuPublisher::publish_data, this));
  }

private:
  void publish_data() {
    auto message = sensor_msgs::msg::Imu();
    // 手动填充IMU数据，需要逐一设置
    message.header.stamp = now();
    message.header.frame_id = "imu_frame";
    message.linear_acceleration.x = 0.5;  // 静态测试值
    message.linear_acceleration.y = 0.0;
    message.linear_acceleration.z = 9.8;
    // ...其他数据需要手动填充
    publisher_->publish(message);
  }

  rclcpp::Publisher<sensor_msgs::msg::Imu>::SharedPtr publisher_;
  rclcpp::TimerBase::SharedPtr timer_;
};`}</pre>
                )}
                {!expandedCode.topic && (
                  <div className="slide4_code-summary">
                    点击查看手动创建ROS2传感器消息发布节点代码
                  </div>
                )}
              </div>
              
              <div className="slide4_deployment-steps">
                <div className="slide4_step">
                  <div className="slide4_step-number">1</div>
                  <div className="slide4_step-content">
                    <h6>手动创建ROS2节点</h6>
                    <p>编写多个发布者/订阅者节点，配置消息类型和参数</p>
                  </div>
                </div>
                
                <div className="slide4_step">
                  <div className="slide4_step-number">2</div>
                  <div className="slide4_step-content">
                    <h6>数据模拟与注入</h6>
                    <p>手动编写传感器数据生成逻辑，难以覆盖全部场景</p>
                  </div>
                </div>
                
                <div className="slide4_step">
                  <div className="slide4_step-number">3</div>
                  <div className="slide4_step-content">
                    <h6>RViz2可视化配置</h6>
                    <p>手动创建复杂的RViz配置文件，调试显示参数</p>
                  </div>
                </div>
                
                <div className="slide4_step">
                  <div className="slide4_step-number">4</div>
                  <div className="slide4_step-content">
                    <h6>链路验证测试</h6>
                    <p>逐一验证各消息链路，编写测试脚本和结果分析程序</p>
                  </div>
                </div>
              </div>
              
              <div className="slide4_method-effort">估计工作量：7-10天</div>
            </div>
            
            {/* AI辅助方法 */}
            <div className="slide4_case-method slide4_ai-method">
              <h5 className="slide4_method-title">AI辅助开发方法</h5>
              
              <div className="slide4_ai-assistance">
                <div className="slide4_ai-example">
                  <div className="slide4_ai-header" onClick={() => toggleCodeBlock('sensor')}>
                    <span>智能传感器数据模拟</span>
                    <span className="slide4_toggle-icon">{expandedCode.sensor ? '▼' : '▶'}</span>
                  </div>
                  {expandedCode.sensor && (
                    <pre className="slide4_ai-block">
{`# AI生成的数据模拟Python脚本
import rclpy
from rclpy.node import Node
from sensor_msgs.msg import Imu, NavSatFix, PointCloud2
import numpy as np
import time
from geometry_msgs.msg import TransformStamped
import tf2_ros

class MultisensorSimulator(Node):
    def __init__(self):
        super().__init__('multisensor_simulator')
        
        # 智能配置多个传感器发布者
        self.imu_pub = self.create_publisher(Imu, 'imu/data', 10)
        self.gps_pub = self.create_publisher(NavSatFix, 'gps/fix', 10)
        self.lidar_pub = self.create_publisher(PointCloud2, 'lidar/points', 10)
        
        # 智能配置TF发布
        self.tf_broadcaster = tf2_ros.TransformBroadcaster(self)
        
        # 配置模拟场景和运动模式
        self.scenario = self.declare_parameter('scenario', 'urban').value
        self.noise_level = self.declare_parameter('noise_level', 0.05).value
        
        # 根据场景配置更新频率
        timer_period = 0.01  # 100Hz为高精度IMU模拟
        self.timer = self.create_timer(timer_period, self.timer_callback)
        
        # 初始化运动状态
        self.init_motion_model()
        
    def init_motion_model(self):
        # AI生成的智能运动模型，根据场景选择不同参数
        if self.scenario == 'urban':
            self.max_accel = 3.0  # m/s^2
            self.max_turn_rate = 0.8  # rad/s
        elif self.scenario == 'highway':
            self.max_accel = 2.0
            self.max_turn_rate = 0.3
        elif self.scenario == 'offroad':
            self.max_accel = 5.0
            self.max_turn_rate = 1.2
            
        # 初始化运动状态向量
        self.pos = np.array([0.0, 0.0, 0.0])
        self.vel = np.array([0.0, 0.0, 0.0])
        self.accel = np.array([0.0, 0.0, 0.0])
        self.orientation = np.array([0.0, 0.0, 0.0, 1.0])  # 四元数
        
        self.get_logger().info(f'初始化{self.scenario}场景的多传感器模拟器')
    
    def timer_callback(self):
        # 更新运动模型
        self.update_motion_model()
        
        # 发布IMU数据
        self.publish_imu_data()
        
        # 发布GPS数据 (较低频率)
        if int(time.time() * 10) % 10 == 0:  # 1Hz
            self.publish_gps_data()
            
        # 发布LiDAR数据 (中等频率)
        if int(time.time() * 100) % 20 == 0:  # 5Hz
            self.publish_lidar_data()
            
        # 发布TF变换
        self.publish_tf()
            
    # ... 更多AI自动生成的数据模拟方法 ...`}</pre>
                  )}
                  {!expandedCode.sensor && (
                    <div className="slide4_code-summary">
                      点击查看AI生成的多传感器数据智能模拟器代码
                    </div>
                  )}
                </div>

                <div className="slide4_ai-example">
                  <div className="slide4_ai-header" onClick={() => toggleCodeBlock('visual')}>
                    <span>RViz2可视化配置自动生成</span>
                    <span className="slide4_toggle-icon">{expandedCode.visual ? '▼' : '▶'}</span>
                  </div>
                  {expandedCode.visual && (
                    <pre className="slide4_ai-block">
{`# AI生成的RViz2配置生成Python脚本
import yaml
import os
from ament_index_python.packages import get_package_share_directory

def generate_rviz_config(sensors, robot_model_path=None):
    """
    根据传感器配置智能生成RViz2配置文件
    
    参数:
        sensors: 字典，包含要显示的传感器列表
        robot_model_path: 可选，机器人URDF模型路径
    """
    config = {
        "Visualization Manager": {
            "Global Options": {
                "Fixed Frame": "base_link",
                "Background Color": "48; 48; 48"
            },
            "Tools": [
                {"Class": "rviz_default_plugins/MoveCamera"},
                {"Class": "rviz_default_plugins/Select"},
                {"Class": "rviz_default_plugins/Measure"},
                {"Class": "rviz_default_plugins/PublishPoint"}
            ],
            "Displays": []
        }
    }
    
    # 添加TF显示
    config["Visualization Manager"]["Displays"].append({
        "Class": "rviz_default_plugins/TF",
        "Name": "TF",
        "Enabled": True,
        "Marker Scale": 1.0,
        "Show Names": True,
        "Show Axes": True,
        "Show Arrows": True,
        "Frame Timeout": 15.0
    })
    
    # 添加机器人模型（如果提供）
    if robot_model_path:
        config["Visualization Manager"]["Displays"].append({
            "Class": "rviz_default_plugins/RobotModel",
            "Name": "Robot Model",
            "Enabled": True,
            "Visual Enabled": True,
            "Collision Enabled": False,
            "Description Topic": "/robot_description",
            "Description Source": "Topic"
        })
    
    # 根据传感器类型自动添加适当的显示设置
    for sensor, properties in sensors.items():
        if sensor == "imu":
            config["Visualization Manager"]["Displays"].append({
                "Class": "rviz_default_plugins/Imu",
                "Name": "IMU",
                "Enabled": True,
                "Topic": properties.get("topic", "/imu/data"),
                "Acceleration Color": "255; 0; 0",
                "Acceleration Arrow Scale": 1.0,
                "Acceleration Vector Alpha": 1.0,
                "Angular Velocity Color": "0; 255; 0",
                "Angular Velocity Arrow Scale": 1.0,
                "Fixed Frame Transform": "base_link",
                "History Length": 1
            })
        
        elif sensor == "lidar":
            config["Visualization Manager"]["Displays"].append({
                "Class": "rviz_default_plugins/PointCloud2",
                "Name": "LiDAR Points",
                "Enabled": True,
                "Topic": properties.get("topic", "/lidar/points"),
                "Style": "Points",
                "Size (Pixels)": 3,
                "Color Transformer": "Intensity",
                "Channel Name": "intensity",
                "Min Color": "0; 0; 0",
                "Max Color": "255; 255; 255"
            })
        
        elif sensor == "gps":
            # GPS数据一般转换为可视化标记
            config["Visualization Manager"]["Displays"].append({
                "Class": "rviz_default_plugins/Marker",
                "Name": "GPS Position",
                "Enabled": True,
                "Topic": properties.get("marker_topic", "/gps/position_marker")
            })
            
    # ... 添加其他传感器类型的可视化设置 ...
    
    return config

# 使用示例
sensors = {
    "imu": {"topic": "/imu/data"},
    "lidar": {"topic": "/lidar/points"},
    "gps": {"topic": "/gps/fix", "marker_topic": "/gps/position_marker"}
}

rviz_config = generate_rviz_config(sensors, "/path/to/robot.urdf")

# 保存配置文件
output_dir = os.path.join(get_package_share_directory('my_robot_viz'), 'config')
os.makedirs(output_dir, exist_ok=True)
with open(os.path.join(output_dir, 'sensor_viz.rviz'), 'w') as f:
    yaml.dump(rviz_config, f, default_flow_style=False)`}</pre>
                  )}
                  {!expandedCode.visual && (
                    <div className="slide4_code-summary">
                      点击查看AI生成的RViz2可视化配置生成脚本
                    </div>
                  )}
                </div>
                
                <div className="slide4_ai-example">
                  <div className="slide4_ai-header" onClick={() => toggleCodeBlock('pipeline')}>
                    <span>自动链路测试与验证</span>
                    <span className="slide4_toggle-icon">{expandedCode.pipeline ? '▼' : '▶'}</span>
                  </div>
                  {expandedCode.pipeline && (
                    <pre className="slide4_ai-block">
{`# AI生成的ROS2链路自动测试脚本
import rclpy
from rclpy.node import Node
import unittest
import pytest
from launch import LaunchDescription
from launch_ros.actions import Node as LaunchNode
from launch_testing.actions import ReadyToTest
import numpy as np
import time
import threading
import json
import matplotlib.pyplot as plt
from pathlib import Path

class SensorPipelineTest(Node):
    """自动化测试ROS2传感器数据处理链路的完整性和性能"""
    
    def __init__(self):
        super().__init__('sensor_pipeline_tester')
        
        # 配置要测试的主题
        self.test_topics = {
            '/imu/data': {'msg_type': 'sensor_msgs/Imu', 'count': 0, 
                         'latency': [], 'frequency': []},
            '/processed/orientation': {'msg_type': 'geometry_msgs/QuaternionStamped', 
                                      'count': 0, 'latency': [], 'frequency': []},
            '/processed/position': {'msg_type': 'geometry_msgs/PoseStamped', 
                                   'count': 0, 'latency': [], 'frequency': []}
        }
        
        # 创建多个订阅者监听所有相关主题
        self.subscribers = {}
        self.topic_timestamps = {}
        self.message_logs = {}
        
        for topic, info in self.test_topics.items():
            self.create_topic_subscriber(topic, info['msg_type'])
            self.message_logs[topic] = []
            
        # 创建定时器检查主题状态
        self.timer = self.create_timer(1.0, self.check_topics)
        self.start_time = time.time()
        self.test_duration = 30.0  # 30秒测试
        
        self.get_logger().info("开始传感器链路测试，持续30秒...")
            
    def create_topic_subscriber(self, topic, msg_type):
        """动态创建主题订阅者"""
        # 根据消息类型动态导入相应的消息模块
        if msg_type == 'sensor_msgs/Imu':
            from sensor_msgs.msg import Imu as MsgType
        elif msg_type == 'geometry_msgs/QuaternionStamped':
            from geometry_msgs.msg import QuaternionStamped as MsgType
        elif msg_type == 'geometry_msgs/PoseStamped':
            from geometry_msgs.msg import PoseStamped as MsgType
        # ... 添加其他消息类型 ...
        
        # 创建订阅回调
        def callback(msg):
            now = time.time()
            topic_key = topic.replace('/', '_')
            
            # 记录接收时间和频率
            if topic in self.topic_timestamps:
                delta = now - self.topic_timestamps[topic]
                self.test_topics[topic]['frequency'].append(1.0/delta if delta > 0 else 0)
                
            self.topic_timestamps[topic] = now
            self.test_topics[topic]['count'] += 1
            
            # 计算延迟（如果消息有时间戳）
            if hasattr(msg, 'header') and hasattr(msg.header, 'stamp'):
                msg_time = msg.header.stamp.sec + msg.header.stamp.nanosec * 1e-9
                latency = now - msg_time
                self.test_topics[topic]['latency'].append(latency)
            
            # 记录消息内容（用于后续分析）
            self.message_logs[topic].append(self.extract_message_data(msg))
                
        # 创建订阅者
        self.subscribers[topic] = self.create_subscription(
            MsgType, topic, callback, 10)
    
    def extract_message_data(self, msg):
        """从消息中提取关键数据进行记录"""
        data = {"timestamp": time.time()}
        
        # 提取IMU数据
        if hasattr(msg, 'linear_acceleration'):
            data['accel'] = [msg.linear_acceleration.x, 
                            msg.linear_acceleration.y, 
                            msg.linear_acceleration.z]
            
        if hasattr(msg, 'angular_velocity'):
            data['gyro'] = [msg.angular_velocity.x, 
                           msg.angular_velocity.y, 
                           msg.angular_velocity.z]
            
        # 提取姿态数据
        if hasattr(msg, 'orientation'):
            data['quat'] = [msg.orientation.x, msg.orientation.y, 
                           msg.orientation.z, msg.orientation.w]
        elif hasattr(msg, 'quaternion'):
            data['quat'] = [msg.quaternion.x, msg.quaternion.y, 
                           msg.quaternion.z, msg.quaternion.w]
        
        # 提取位置数据    
        if hasattr(msg, 'pose') and hasattr(msg.pose, 'position'):
            data['position'] = [msg.pose.position.x, 
                               msg.pose.position.y, 
                               msg.pose.position.z]
            
        return data
    
    def check_topics(self):
        """定期检查主题状态和测试进度"""
        elapsed = time.time() - self.start_time
        
        # 打印当前状态
        self.get_logger().info(f"测试进度: {elapsed:.1f}/{self.test_duration:.1f}秒")
        for topic, info in self.test_topics.items():
            self.get_logger().info(f"  {topic}: 接收 {info['count']} 消息")
        
        # 测试结束后生成报告
        if elapsed >= self.test_duration:
            self.generate_test_report()
            rclpy.shutdown()
    
    def generate_test_report(self):
        """生成详细的测试报告和可视化结果"""
        self.get_logger().info("生成测试报告...")
        
        # 创建报告目录
        report_dir = Path("./sensor_pipeline_report")
        report_dir.mkdir(exist_ok=True)
        
        # 保存原始数据
        with open(report_dir / "test_data.json", "w") as f:
            json.dump({
                "test_topics": {k: {
                    "count": v["count"],
                    "latency": v["latency"],
                    "frequency": v["frequency"]
                } for k, v in self.test_topics.items()},
                "message_logs": self.message_logs
            }, f)
        
        # 生成延迟分析图表
        plt.figure(figsize=(10, 6))
        for topic, info in self.test_topics.items():
            if info['latency']:
                plt.plot(info['latency'], label=f"{topic} 延迟")
        plt.title("传感器链路延迟分析")
        plt.xlabel("消息序号")
        plt.ylabel("延迟 (秒)")
        plt.legend()
        plt.grid(True)
        plt.savefig(report_dir / "latency_analysis.png")
        
        # 生成频率分析图表
        plt.figure(figsize=(10, 6))
        for topic, info in self.test_topics.items():
            if info['frequency']:
                plt.plot(info['frequency'], label=f"{topic} 频率")
        plt.title("消息频率分析")
        plt.xlabel("消息序号")
        plt.ylabel("频率 (Hz)")
        plt.legend()
        plt.grid(True)
        plt.savefig(report_dir / "frequency_analysis.png")
        
        # 生成链路完整性报告
        self.generate_pipeline_integrity_report(report_dir)
        
        self.get_logger().info(f"测试报告已生成: {report_dir.absolute()}")
    
    def generate_pipeline_integrity_report(self, report_dir):
        """分析并报告数据处理链路的完整性"""
        # 创建HTML格式的摘要报告
        with open(report_dir / "pipeline_report.html", "w") as f:
            f.write("<html><head><title>传感器链路测试报告</title></head><body>")
            f.write("<h1>ROS2传感器数据处理链路测试报告</h1>")
            
            # 添加总体统计
            f.write("<h2>总体统计</h2>")
            f.write("<table border='1'><tr><th>主题</th><th>消息数量</th>")
            f.write("<th>平均频率(Hz)</th><th>平均延迟(ms)</th></tr>")
            
            for topic, info in self.test_topics.items():
                avg_freq = np.mean(info['frequency']) if info['frequency'] else 0
                avg_latency = np.mean(info['latency']) if info['latency'] else 0
                f.write(f"<tr><td>{topic}</td><td>{info['count']}</td>")
                f.write(f"<td>{avg_freq:.2f}</td><td>{avg_latency*1000:.2f}</td></tr>")
                
            f.write("</table>")
            
            # 添加链路完整性分析
            f.write("<h2>链路完整性分析</h2>")
            pipeline_ok = True
            
            # 检查是否所有主题都有消息
            for topic, info in self.test_topics.items():
                if info['count'] == 0:
                    pipeline_ok = False
                    f.write(f"<p style='color:red'>警告: 主题 {topic} 未收到任何消息!</p>")
            
            # 检查消息频率稳定性
            for topic, info in self.test_topics.items():
                if info['frequency']:
                    freq_std = np.std(info['frequency'])
                    freq_mean = np.mean(info['frequency'])
                    if freq_std > freq_mean * 0.5:  # 频率变化超过50%
                        pipeline_ok = False
                        f.write(f"<p style='color:orange'>警告: 主题 {topic} 的频率不稳定 ")
                        f.write(f"(平均: {freq_mean:.2f}Hz, 标准差: {freq_std:.2f})</p>")
            
            # 添加最终结论
            if pipeline_ok:
                f.write("<h3 style='color:green'>链路完整性检查通过 ✓</h3>")
            else:
                f.write("<h3 style='color:red'>链路完整性检查失败 ✗</h3>")
                
            f.write("</body></html>")

# 测试入口点
def main():
    rclpy.init()
    tester = SensorPipelineTest()
    rclpy.spin(tester)
    rclpy.shutdown()

if __name__ == '__main__':
    main()`}</pre>
                  )}
                  {!expandedCode.pipeline && (
                    <div className="slide4_code-summary">
                      点击查看AI生成的自动链路测试与可视化脚本
                    </div>
                  )}
                </div>
              </div>
              
              <div className="slide4_ai-benefits">
                <div className="slide4_ai-benefit">
                  <i className="slide4_benefit-icon">🔄</i>
                  <span>AI自动生成多传感器数据模拟器，支持多种场景配置</span>
                </div>
                <div className="slide4_ai-benefit">
                  <i className="slide4_benefit-icon">📊</i>
                  <span>快速生成适配RViz2的可视化配置，一键启动数据流可视化</span>
                </div>
                <div className="slide4_ai-benefit">
                  <i className="slide4_benefit-icon">⚡</i>
                  <span>智能生成链路测试工具，自动分析性能并生成报告</span>
                </div>
                <div className="slide4_ai-benefit">
                  <i className="slide4_benefit-icon">🧩</i>
                  <span>组件化设计，可快速适配不同类型的传感器系统</span>
                </div>
              </div>
              
              <div className="slide4_method-effort">估计工作量：2-3天</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="slide4_notes">
        <p><strong>显著提效：</strong> 嵌入式驱动移植效率提升60%+，ROS2数据仿真与链路测试从周级缩短至天级，大幅加速开发验证周期</p>
      </div>
      
      <div className="slide4_footer">Cursor、Trae 与开源框架的协同增效</div>
    </div>
  );
};

export default Slide4;