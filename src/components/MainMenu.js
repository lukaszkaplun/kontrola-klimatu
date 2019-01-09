import React, { Component } from 'react';

export default class MainMenu extends Component {
    render() {
        return (

            <ul className="main-menu">
                {this.props.mainMenu.map((item, index) => {
                    return <li key={index} className={index === 0? "active": "" }>{item.name}</li>
                })}
            </ul>
        );
    }
}


