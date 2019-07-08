import React, {useState, useEffect} from 'react';

export default (props) => {
    //let [variable (piece of state to be defined), updator function that updates state]
    let [count, setCount] = useState(0)
    let [title, setTitle] = useState('Digital Crafts')
    //count state can be changed independently of title state

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response=>response.json())
        .then((json)=>{
            console.log(json)
        })
    }, [])

    useEffect(()=>{
        console.log(title)
    }, [title])

  return (
    <>
        {count}
        <br />
        <button onClick={()=>{setCount(count + 1)}}>Increment</button>
        <br />
        <br />
        Title: {title}
        <br />
        <button onClick={()=>{setTitle(`Hello World ${new Date()}`)}}>Update Title</button>

    </>
  )
}
