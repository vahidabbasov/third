import React from 'react'


function Welcome(props) {
  return (
    <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <img src={props.src} alt="" width={250} height={150}/>
    </div>
  )
}

export default Welcome