import React,{Component} from 'react';
import './App.css';
import {MyRouter} from "./pages/index"

class App extends Component{
    render() {
        return (
            <div className='container'>
                <MyRouter/>
            </div>
        )
    }
}

export default App;
