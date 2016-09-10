import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header/header';

import './main.scss';

class App extends React.Component {
    render() {
        return(
            <Header />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('main'));
