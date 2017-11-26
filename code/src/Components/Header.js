import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Radio } from 'react-bootstrap';

import '../App.css'

class Header extends Component {
    constructor(props){
        super(props);

        //this._onClickRadio = this._onClickRadio.bind(this);
        this._handleOptionChange = this._handleOptionChange.bind(this);

        this.state = {
            selectedOption : null
        }
    }
   
    _handleOptionChange(changeEvent){
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    render() {
        return (
            <div className="wrapper-head">
            <Menu  customBurgerIcon={<img className="bm-burger-button logo-header" alt="logo-not-found" src={require('../Assests/avalith.png')}   />}>
                <img  className="bm-burger-button" alt="logo-not-found" src={require('../Assests/avalith.png') } />
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




  
