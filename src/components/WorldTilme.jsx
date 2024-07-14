import moment from 'moment-timezone';
import { WhatchFace } from './WhatchFace'
import { Component } from 'react';

export class WorldTime extends Component {
    constructor(props) {
        super(props);
        this.state = { hours: "12", minutes: "00", seconds: "00" };
    }

    componentDidMount() {
        this.interval = setInterval(
            () => {
                this.setState({hours: moment().tz("UTC").format("hh"), minutes: moment().tz("UTC").format("mm"), seconds: moment().format("ss") });
            }, 1000
        )
       
    }
    render() {

        return (
            this.props.gmtOffset.map((el, index) => {
                return(
                    <WhatchFace key = { index } time = { this.state } gmt = { el } handelDelete = { this.props.handleComponentRemove } />
                )
            }) 
           
        )
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
}