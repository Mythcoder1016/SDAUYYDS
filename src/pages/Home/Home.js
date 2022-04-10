import React,{Component} from 'react';
import axios from 'axios';
import "./Home.css";
import mp4 from "../../assets/DogWithDog.mp4"
import 'animate.css';
import { Menu } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';



const { SubMenu } = Menu;
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2643293_1iq1ob9o2dn.js',
});

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
        };
    }


    componentDidMount=()=>{
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };
    
    render() {
        const  {current} = this.state;
        return (
            <div className='containWrap'>
                <h1 className="animate__animated animate__flash animate__delay-2s title">{"MythCoder's Blog"}</h1>
                <Menu className='NavMenu' onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <SubMenu key="UniversityTime" icon={<IconFont type='icon-taikonglvke_chaiquan1'/>} title="大学时光">
                        <Menu.Item key="setting:1">大一</Menu.Item>
                        <Menu.Item key="setting:2">大二</Menu.Item>
                        <Menu.Item key="setting:3">大三</Menu.Item>
                        <Menu.Item key="setting:4">大四</Menu.Item>
                    </SubMenu>
                    <SubMenu key="PhotoOfCampus" icon={<IconFont type='icon-keji-'/>} title="校园一角">
                        <Menu.Item key="setting:1">美景传送处</Menu.Item>
                        <Menu.Item key="setting:2">开发中</Menu.Item>
                    </SubMenu>
                </Menu>
                <div class="clear"></div>
                <video src={mp4} loop autoPlay muted/>
            </div>
        )
    }
}

export default Home;

