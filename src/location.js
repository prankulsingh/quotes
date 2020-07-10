import React, {Component} from "react";
import logo from "./logo.svg";

class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'Please wait, checking your geolocation...'
        };
    }

    componentDidMount() {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const coords = pos.coords;
                // console.log('got geolocation', coords);
                this.setState({
                    message: "Found your geolocation: " + coords.latitude + ", " + coords.longitude
                })
            }, (error) => {
                // console.log('error in getting, falling back on default location', error);
                if (error.code === error.PERMISSION_DENIED) {
                    this.setState({
                        message: "Geolocation denied!"
                    })
                } else {
                    this.setState({
                        message: "Geolocation failed!"
                    })
                }
            });
        } else {
            this.setState({
                message: "Geolocation failed!"
            })
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        {this.state.message}
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    </a>
                </header>
            </div>
        );
    }
}

export default Location