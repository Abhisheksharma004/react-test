import React from 'react'

function UserProps(props) {
  let name = "Abhishek";

  return (
    <>
        <h1>User Props : {props.title}</h1>

        <h2>{props.title}</h2>

        <h3>Hello My Name Is {props.name}</h3>
    </>
    )
}

export default UserProps