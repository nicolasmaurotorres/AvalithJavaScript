import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'

import '../App.css'

class Header extends Component {
    constructor(props){
        super(props);

        
        this._onClickLogo = this._onClickLogo.bind(this);
        this._handleOptionChange = this._handleOptionChange.bind(this);
        this._isMenuOpen= this._isMenuOpen.bind(this);

        this.state = {
            selectedOption : null,
            isOpen : false
        }
    }
   
    _handleOptionChange(changeEvent){
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    _onClickLogo(e){
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log("pase click logo");
    }


    _isMenuOpen(state){
        debugger;
        console.log("pase click menu");
        return state.isOpen;
    }

    render() {
        return (
            <div className="wrapper-head">
            <Menu isOpen={this.state.isOpen} /*onStateChange={ this._isMenuOpen }*/ customBurgerIcon={<img onClick={ this._onClickLogo } className="bm-burger-button logo-header" alt="logo-not-found" src={require('../Assests/avalith.png')}   />}>
                <img  onClick={ this._onClickLogo } className="bm-burger-button" alt="logo-not-found" src={require('../Assests/avalith.png')  } />
                <div className="sidebar-description">
                    <p> DEV NAME </p>
                    <p> DNI XX XXX XXX</p>
                    <p> YY YEARS OLD</p>
                </div>
                <input type="text" name="filter" placeholder="Search in cards" className="sidebar-search"/>
                <br/>
                <label className="radio">
                    <input type="radio" value="option1" 
                      checked={this.state.selectedOption === 'option1'} 
                      onChange={this._handleOptionChange} />
                    Frontend
                </label>
                <label className="radio">
                    <input type="radio" value="option2" 
                      checked={this.state.selectedOption === 'option2'} 
                      onChange={this._handleOptionChange} />
                    Backend
                </label>
                
                {/*
                <h3>Filter by</h3>
                <label>
                    <input type="radio" className="radio" onClick={this._onClickRadio}/>  Frontend
                </label>
                <label>
                    <input type="radio"  className="radio" onClick={this._onClickRadio} />  Backend
                </label>
                    <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>*/}
            </Menu>
            </div>
        );
    }
}

export default Header;




  
