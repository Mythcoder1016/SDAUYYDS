import React,{Component} from 'react';
import axios from 'axios';
import "./Home.css";
import mp4 from "../../assets/whalefall.mp4"


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            clientHeight: document.documentElement.clientHeight, // 屏幕高度
        };
    }


    componentDidMount=()=>{
        axios.get("http://127.0.0.1:9090",{
            params:{
                username:"zhangsan",
                password:123
            }
        }).then(value=>{
            console.log(value.data);
        }).catch(err=>{
            console.log(err);
        })
    }

    
    render() {
        return (
            <div className='containWrap'>
                <video src={mp4} loop autoPlay muted/>
            </div>
        )
    }
}

export default Home;
