// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <input onKeyUp={() => console.log('Entering password...')} type="password" />
        )
    }
}

export default Keypad