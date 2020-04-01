import React from 'react'

class Cat extends React.Component {

    constructor(props) {
        super(props)

        this.hidden = false

    }

    hideUnhide = () => {
        this.hidden = ! this.hidden
        this.makeSound()
        this.setState ({state: "state"})
    }

    makeSound = () => {
        console.log("Meow Meow!")
    }


    render() {

        return <div>
            <div>
                <button onClick={this.hideUnhide}>Meow</button>
            </div>
            <div>
                {this.hidden ? null : "Cat" }
            </div>
        </div>

    }

}

export default Cat