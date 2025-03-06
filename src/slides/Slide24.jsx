// Slide24 - 资料分享页面
import React from 'react';

const Slide24 = () => {
  return (
    <div className="slide24_container">
      <h1 className="slide24_title">资料分享 & 推荐关注</h1>
      
      <div className="slide24_content">
        <div className="slide24_section">
          <h2 className="slide24_section_title">
            <i className="slide24_icon slide24_x_icon"></i>
            推荐关注的X账户
          </h2>
          
          <div className="slide24_accounts_container">
            <div className="slide24_accounts_column">
              <h3 className="slide24_column_title">自媒体账户</h3>
              <ul className="slide24_account_list">
                <li className="slide24_account_item slide24_account_blue">
                  <a href="https://x.com/vista8" className="slide24_account_link">@vista8</a>
                  <span className="slide24_account_desc">- 向阳乔木老师，专注LLM技术研究和推广</span>
                </li>
                <li className="slide24_account_item slide24_account_green">
                  <a href="https://x.com/dotey" className="slide24_account_link">@dotey</a>
                  <span className="slide24_account_desc">- 宝玉老师，翻译LLM精品课程、Prompt学习</span>
                </li>
                <li className="slide24_account_item slide24_account_purple">
                  <a href="https://x.com/imxiaohu" className="slide24_account_link">@imxiaohu</a>
                  <span className="slide24_account_desc">- 小互，每天更新AI新闻和工具资讯</span>
                </li>
                <li className="slide24_account_item slide24_account_orange">
                  <a href="https://x.com/xicilion" className="slide24_account_link">@xicilion</a>
                  <span className="slide24_account_desc">- 西祠胡同创始人响马，分享LLM实战干货</span>
                </li>
                <li className="slide24_account_item slide24_account_pink">
                  <a href="https://x.com/WaytoAGI" className="slide24_account_link">@WaytoAGI</a>
                  <span className="slide24_account_desc">- 中文AI知识宝库，整理大量AI相关资讯</span>
                </li>
                <li className="slide24_account_item slide24_account_teal">
                  <a href="https://x.com/op7418" className="slide24_account_link">@op7418</a>
                  <span className="slide24_account_desc">- 歸藏AI，AIGC周刊主理人</span>
                </li>
              </ul>
            </div>
            
            <div className="slide24_accounts_column">
              <h3 className="slide24_column_title">官方账户</h3>
              <ul className="slide24_account_list">
                <li className="slide24_account_item slide24_account_blue">
                  <a href="https://x.com/OpenAI" className="slide24_account_link">@OpenAI</a>
                  <span className="slide24_account_desc">- GPT系列模型官方账号</span>
                </li>
                <li className="slide24_account_item slide24_account_purple">
                  <a href="https://x.com/AnthropicAI" className="slide24_account_link">@AnthropicAI</a>
                  <span className="slide24_account_desc">- Claude系列模型官方账号</span>
                </li>
                <li className="slide24_account_item slide24_account_green">
                  <a href="https://x.com/GoogleDeepMind" className="slide24_account_link">@GoogleDeepMind</a>
                  <span className="slide24_account_desc">- Google AI研究部门官方账号</span>
                </li>
                <li className="slide24_account_item slide24_account_blue">
                  <a href="https://x.com/MetaAI" className="slide24_account_link">@MetaAI</a>
                  <span className="slide24_account_desc">- Meta AI研究部门官方账号</span>
                </li>
                <li className="slide24_account_item slide24_account_teal">
                  <a href="https://x.com/Grok" className="slide24_account_link">@Grok</a>
                  <span className="slide24_account_desc">- xAI的Grok系列模型官方账号</span>
                </li>
                <li className="slide24_account_item slide24_account_orange">
                  <a href="https://x.com/DeepSeek_AI" className="slide24_account_link">@DeepSeek_AI</a>
                  <span className="slide24_account_desc">- DeepSeek AI研究团队官方账号</span>
                </li>
                <li className="slide24_account_item slide24_account_pink">
                  <a href="https://x.com/huggingface" className="slide24_account_link">@huggingface</a>
                  <span className="slide24_account_desc">- HuggingFace开源AI平台官方账号</span>
                </li>
                <li className="slide24_account_item slide24_account_green">
                  <a href="https://x.com/StabilityAI" className="slide24_account_link">@StabilityAI</a>
                  <span className="slide24_account_desc">- Stable Diffusion开发团队官方账号</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="slide24_section">
          <h2 className="slide24_section_title">
            <i className="slide24_icon slide24_github_icon"></i>
            MCP & AI Agent 相关资源
          </h2>
          
          <div className="slide24_resources">
            <div className="slide24_resource_card slide24_resource_blue">
              <div className="slide24_resource_icon_wrapper">
                <i className="slide24_resource_icon slide24_resource_icon_list"></i>
              </div>
              <h3 className="slide24_resource_title">awesome-mcp-servers</h3>
              <p className="slide24_resource_desc">Model Context Protocol服务器精选列表，包含各类工具和实现</p>
              <a href="https://github.com/punkpeye/awesome-mcp-servers" className="slide24_resource_button slide24_button_blue">
                查看项目
                <i className="slide24_arrow_icon"></i>
              </a>
            </div>
            
            <div className="slide24_resource_card slide24_resource_purple">
              <div className="slide24_resource_icon_wrapper">
                <i className="slide24_resource_icon slide24_resource_icon_protocol"></i>
              </div>
              <h3 className="slide24_resource_title">Model Context Protocol</h3>
              <p className="slide24_resource_desc">标准化AI模型与外部工具交互的开放协议</p>
              <a href="https://modelcontextprotocol.io/" className="slide24_resource_button slide24_button_purple">
                官方网站
                <i className="slide24_arrow_icon"></i>
              </a>
            </div>
            
            <div className="slide24_resource_card slide24_resource_green">
              <div className="slide24_resource_icon_wrapper">
                <i className="slide24_resource_icon slide24_resource_icon_code"></i>
              </div>
              <h3 className="slide24_resource_title">FastMCP</h3>
              <p className="slide24_resource_desc">用于构建MCP服务器的高级Python框架</p>
              <a href="https://github.com/jlowin/fastmcp" className="slide24_resource_button slide24_button_green">
                查看项目
                <i className="slide24_arrow_icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="slide24_footer">
        <p className="slide24_footer_text">感谢聆听 | 如有疑问，欢迎交流</p>
        {/* <div className="slide24_page_number">24</div> */}
      </div>
    </div>
  );
};

export default Slide24;