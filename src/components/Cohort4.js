import React from 'react'
import Cat from './Cat'
import Dog from './Dog'


class Cohort4 extends React.Component {

    constructor(props) {
        super(props)

        this.switch = false

    }

    changeSwitch = () => {
        this.switch = ! this.switch
        this.update()
    }

    update = () => {
        console.log('Surprise!')
        this.setState({state: "state"})
    }

    render() {

        return <div>
            <div>
                <button onClick={this.changeSwitch}>Cohort 4</button>
            </div>
            {this.switch ? <Dog /> : <Cat />}
        </div>

    }

}

export default Cohort4