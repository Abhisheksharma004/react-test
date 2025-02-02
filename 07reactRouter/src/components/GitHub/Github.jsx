import React, { useEffect, useState } from 'react'

function Github() {

    const [followers, setFollowers] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/Abhisheksharma004')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setFollowers(data)
            })
    }, [])

  return (
    <>
    <div className='text-center text-white bg-orange-700 text-3xl p-4 m-4 '>
      GitHub Followes: {followers.followers}
    </div>
    <img src={followers.avatar_url} alt="GitHub Picture" />
    </>
  )
}

export default Github
