import React from "react"

class Student extends React.Component{

    render(){
        return(
            <div>
                <h2>Student: </h2>
                <h3>Name: {this.props.details.name}</h3>
                <h3>Roll No: {this.props.details.roll}</h3>
                <h3>Age: {this.props.details.age}</h3>
            </div>
        )
    }
}

export default Student