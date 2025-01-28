import React from 'react'

function Cards({title="Hello", name="Some One", description="Description",img="https://source.unsplash.com/random"}) {
  return (
    <>
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black m-4">
        <img
          src={img}
          alt="Photo"
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {title}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
        </div>
        <p className="text-gray-300">
          {description}
        </p>
      </div>
    </>
  )
}

export default Cards
