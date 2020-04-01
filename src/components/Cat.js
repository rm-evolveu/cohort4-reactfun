import React from 'react'

class Cat extends React.Component {

    meow = () => {
        console.log("Meow Meow!")
    }


    render() {

        return <div>
            <div>
                Cat
            </div>
            <div>
                <button onClick={this.meow}>Meow</button>
            </div>
        </div>

    }

}

export default Cat