import './App.css';
import React from "react";


function FormattedDate(props) {
    return (
        <div>
            <h1>Привет, мир!</h1>
            <h2>Сейчас {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function ShowClock(props) {
    const isToggleOn = props.state.isToggleOn;
    if (isToggleOn) {
        return <FormattedDate date={props.state.date} />;
    } else {
        return null;
    }
}


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            isToggleOn: false
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }


    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'Выключить часы' : 'Включить часы'}
                </button>

                <ShowClock state={this.state}/>
            </div>
        );
    }
}

function App() {
    return (
        <Clock />
    );
}

export default App;
