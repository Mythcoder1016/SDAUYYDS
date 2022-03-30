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

    render() {
        return (
            <div className='containWrap'>
                <video src={mp4} loop autoPlay muted/>
            </div>
        )
    }
}

export default App;
