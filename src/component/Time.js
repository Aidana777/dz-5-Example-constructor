import React from "react";

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Time',
            date: new Date(),

        }

    }
    render() {
        return (
            <div>
                <p>{this.state.title} </p>
                <p>{this.state.date.toLocaleTimeString()} </p>
            </div>
        )
    }
}
export default Time;