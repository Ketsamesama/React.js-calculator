import React, { useState } from 'react'
import Button from './Button';
import { useSelector } from 'react-redux'

function Buttons() {

    enum type {
        numbers = 'numbers',
        operator = 'operator',
        special = 'special',
    }

    const [buttons, setButtons] = useState([
        { id: 1, value: 'ac', type: type.special },
        { id: 2, value: '<', type: type.special },
        { id: 3, value: '/', type: type.operator },
        { id: 4, value: 'x', type: type.operator },
        { id: 5, value: '7', type: type.numbers },
        { id: 6, value: '8', type: type.numbers },
        { id: 7, value: '9', type: type.numbers },
        { id: 8, value: '-', type: type.operator },
        { id: 9, value: '4', type: type.numbers },
        { id: 10, value: '5', type: type.numbers },
        { id: 11, value: '6', type: type.numbers },
        { id: 12, value: '+', type: type.operator },
        { id: 13, value: '1', type: type.numbers },
        { id: 14, value: '2', type: type.numbers },
        { id: 15, value: '3', type: type.numbers },
        { id: 16, value: '=', type: type.operator },
        { id: 17, value: '0', type: type.numbers },
        { id: 18, value: '.', type: type.special },
    ])

    return (
        <div className='buttons'>
            {
                buttons.map((state: any): any => <Button {...state} />)
            }
        </div>
    )
}

export default Buttons