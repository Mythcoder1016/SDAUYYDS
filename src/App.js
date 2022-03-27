import React,{Component} from 'react';
import './App.css';
import mp4 from "./assets/whalefall.mp4"


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            clientHeight: document.documentElement.clientHeight, // 屏幕高度
        };
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize); //增加
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize); //取消
    }

    resize=()=>{
        this.setState({ clientHeight: document.documentElement.clientHeight }); //监听
    }

    render() {
        return (
            <>
                <video src={mp4} loop className='' autoPlay muted/>
                <div className="container" style={{ height: this.state.clientHeight }}></div>
            </>
        )
    }
}

export default App;
