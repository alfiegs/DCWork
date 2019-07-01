import React from 'react'
import {Button} from 'react-bootstrap'

// function Button(props){
//     return(
//         <button>Click Me! {props.name}</button>
//     )
// }

const Button1 = (props) => {
    return(
        <button>{props.name}</button>
    )
}

export default Button1