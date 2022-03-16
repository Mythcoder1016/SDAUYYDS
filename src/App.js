import React,{Component} from 'react';
import { Button } from 'antd';
import './App.css';



class App extends Component{
  constructor(props){
    super(props);
  }

  render() {
   return(
    <div className="App">
      <audio autoPlay src="http://dl.stream.qqmusic.qq.com/C400002JJeYa2ODDwz.m4a?guid=5413400350&vkey=E9E8B9B475E39A843592C85A997078D97F4A9792ACFBAEFA13956E2AAD42B7A0DEFFC1A3EE2399CD614EB4CD9590D1BC9D3CDCAD9CD717D0&uin=1399236287&fromtag=66"/>
      <Button type="primary">Button</Button>
    </div>
   ) 
  }
}

export default App;
