import React, { Component } from 'react';
import SideBar from 'react-sidebar';
import '../App.css'

class Header extends Component {
    constructor(props){
        super(props);

        this._onClickLogo = this._onClickLogo.bind(this);

        this.state = {
            openedSidebar : false
        }
    }

    _onClickLogo(e){
        e.preventDefault();
        this.setState({sidebarVisible : !this.state.openedSidebar});
    }

    render() {

        var sidebarContent = <div> 
                                <h3>Filters</h3>
                                <input type="text" name="filter"/>
                                <h3>Fruits</h3>
                                <label>
                                    <input type="checkbox" className="radio" value="1" name="fooby[1][]" />Kiwi</label>
                                <label>
                                    <input type="checkbox" className="radio" value="1" name="fooby[1][]" />Jackfruit</label>
                                <label>
                                    <input type="checkbox" className="radio" value="1" name="fooby[1][]" />Mango</label>
                            </div>

        return (
            <div className="wrapper-img">
                {/*<SideBar sidebar={ sidebarContent} open={this.state.openedSidebar} onSetOpen={ this._onClickLogo } > Otro contenido </SideBar>*/}
                
                    <img className="img-logo" alt="logo-not-found" src={require('../Assests/avalith.png')}  onClick={ this._onClickLogo } />
                
             </div>
             
        );
    }
}

export default Header;