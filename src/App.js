import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';


class App extends Component {



    render() {
        var state = {
            'name': 'React junaid'
        };
        return ( <
            Table tableState = { state }
            / >
        );
    }
}
class NewComponent extends Component {



    render() {
        var state = {
            'name': 'React shehroze'
        };
        return ( <
            Table tableState = { state }
            / >
        );
    }
}


export default NewComponent;