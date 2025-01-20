import React from 'react'

function ToDo() {

    function callFUn(){
        alert('Button Clicked');
    }
  return (
    <>
        <h1>Abhishek Hello</h1>

        <img src="https://images.pexels.com/photos/25851313/pexels-photo-25851313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="photo" className='photo' /><br />



        <button onClick={callFUn()}>Cleack Me</button>
    </>
  )
}

export default ToDo
