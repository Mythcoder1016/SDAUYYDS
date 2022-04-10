import React,{Component,Suspense,lazy} from "react";
import {Route, Routes,BrowserRouter} from "react-router-dom"
import { Spin } from 'antd';
import "../index.css"


const Home = lazy(()=>{return import("../pages/Home/Home")})

export class MyRouter extends Component{
    constructor(props){
        super(props);
        this.state={
            clientHeight: document.documentElement.clientHeight, // 屏幕高度
            clientWidth: document.documentElement.clientWidth, // 屏幕宽度
        }
    }

    render(){
        let width = this.state.clientWidth/2;
        let height = this.state.clientHeight/2;
        return(        
            <BrowserRouter>
                <Suspense fallback={<Spin size="large" tip={"Loading..."} style={{position:"absolute",top:`${height-30}px`,left:`${width-30}px`}} />}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>   
                </Suspense>             
            </BrowserRouter>
        )
    }
}

