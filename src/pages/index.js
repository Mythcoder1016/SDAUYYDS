import React,{Component,Suspense,lazy} from "react";
import {Route, Routes,BrowserRouter} from "react-router-dom"
import { Spin } from 'antd';
import "../index.css"


const Home = lazy(()=>{return import("../pages/Home/Home")})

export class MyRouter extends Component{
    render(){
        return(        
            <BrowserRouter>
                <Suspense fallback={<Spin size="large" tip={"Loading..."} className="TipSpan"/>}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>   
                </Suspense>             
            </BrowserRouter>
        )
    }
}

