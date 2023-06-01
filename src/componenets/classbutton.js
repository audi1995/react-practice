import React, { Component } from 'react'

export class ClassButton extends Component {

    constructor(props){
        super(props);
        // this.changeEvent = this.changeEvent.bind(this)

        this.state = {
            course: "mtect",
            exam : this.props.exam
        }
    }

changeEvent =()=> {
    this.setState({course: "mcom",})
        console.log("hello sjhmnrf.bjfddsn", this.state.course, this.props.exam);
    }

    render() {
        return (
            <div>
                <button onClick={this.changeEvent}>click me</button>
                {this.props.exam}
            </div>
        )
    }
}

export default ClassButton
