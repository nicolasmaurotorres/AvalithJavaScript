import React, { Component } from 'react';
//import logo from './logo.svg';
import './css/bootstrap.css';
import './App.css';
//import $ from './js/jquery-3.2.1.min.js';
//import bootstrap from './js/bootstrap.min.js';

import SideBar from './SideBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: {},
      sidebarVisible : false
    };

    this._onClickLogo = this._onClickLogo.bind(this);
  }

  componentWillMount(){
   // this.props.cards = {};
    
  }

  _onClickLogo(event){
    event.preventDefault();
    if (this.state.sidebarVisible === false)     {
       this.setState({sidebarVisible : true});
    }  else {
       this.setState({sidebarVisible : false});
    }
  }

  render() {
    var boxes = [];
    var sideBar = <SideBar/>;
    var i = 0;
    for (; i < 5; i++){
      boxes.push(<FlexBox/>);
    }

    if (this.props.sidebarVisible){
     sideBar = <SideBar visible={true}/>;
    } else {
       sideBar = <SideBar visible={false}/>;
    } 
    return (
      <div className="App">
        <header>
          <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" onClick={ this._onClickLogo() }href="#">
              <img src="http://gitlab.avalith.net/erictrinchero/frontend-coding-challenge/raw/b86189e147a9299527ca2fbc01f7ce643f546fed/avalith.png" width="30" height="30" alt=""/>
            </a>
          </nav>
        </header>
        <body>

          { sideBar }
          { boxes }
          <div className="espacio"></div>
          <div className="row">
            <div className="col-md-3 menu">1</div>
            <div className="col-md-3">2</div> 
            <div className="col-md-3">3</div> 
            <div className="col-md-3">4</div> 
          </div>
        </body>
      </div>
    );
  }
}

export default App;
