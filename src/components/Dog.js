import React from 'react'

class Dog extends React.Component {

    bark = () => {
        console.log("Woof Woof!")
    }

    render() {

        return <div>
            <div>
                Dog
            </div>
            <div>
                <button onClick={this.bark}>Bark</button>
            </div>
        </div>

    }

}

export default Dog