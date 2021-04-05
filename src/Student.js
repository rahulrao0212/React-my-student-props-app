import { Component } from "react";

export default class Student extends Component {
    render() {
        var card = {
            borderRadius: 4,
            borderWidth: 1,
            borderColor: 'red',
            borderStyle: 'dashed',
            width: 200,
            padding: 10
        }
        return (
            <div style={card}>
                <h5>Name: {this.props.name}</h5>
                <h5>Id: {this.props.id}</h5>
            </div>
        )
    }
}