import React from 'react'

class Dog extends React.Component {


    constructor (props) {
        super(props)

        this.animal = "Fox"

    }

    switchAnimal = () => {
        if (this.animal === "Fox") {
            this.animal = "Dog"
        } else {
            this.animal = "Fox"
        }
        this.makeSound()
        this.setState({state: "state"})
    }

    makeSound = () => {
        console.log(this.animal)
    }

    render() {

        return <div>
            <div>
                <button onClick={this.switchAnimal}>Bark</button>
            </div>
            <div>
                {this.animal}
            </div>
        </div>

    }

}

export default Dog