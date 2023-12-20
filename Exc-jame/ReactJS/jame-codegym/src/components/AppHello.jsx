import Hello from "./hello/Hello";
import React, { Component } from 'react'

export default class AppHello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        };
    }
    delete = () => {
        this.setState({ display: false });
    };
    render() {
        let comp;
        if (this.state.display) {
            comp = <Hello />;
        }
        return (
            <div style={{ textAlign: 'center' }}>
                {comp}
                <button onClick={this.delete}>
                    Delete the component
                </button>
            </div>
        );
    }
}
