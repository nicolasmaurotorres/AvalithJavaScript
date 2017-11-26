import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from './Components/Header';
import Dashboard from './Components/DashBoard';
import Post from './Components/Post';

class Routes extends React.Component {
    render() {
        return (
            <div>
                {console.log(React.version)}
                <Header/>
                <BrowserRouter>
                    <div> {/*required only 1 child as DIV*/}
                        <Route path="/" exact component={ Dashboard } />
                        <Route path="/post" exact component={ Post } />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;