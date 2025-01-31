import React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'

function PasswordGen() {

    const [length, setLenght] = useState(8)
    const [numAllowed, setNumAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState('')


    //useRef
    const passwordRef = useRef(null)

    const passwordGenerator = useCallback(() => {
        let pass = ''
        let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if (numAllowed) str += '0123456789'
        if (charAllowed) str += '!@#$%^&*()_+'
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)

            pass += str.charAt(char)

            setPassword(pass)
        }

    }, [length, numAllowed, charAllowed, setPassword])

    const copyPassword = useCallback(() => {
        passwordRef.current?.select()
        // passwordRef.current?.setSelectionRange(0, 8)
        window.navigator.clipboard.writeText(password)
        alert('Password copied to clipboard')
    }, [password])

    useEffect(() => {
        passwordGenerator()
    }, [passwordGenerator, length, numAllowed, charAllowed])


    return (
        <>
            <div className='w-full max-w-md mx-auto shaidow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-600'>
                <h1 className='text-4xl text-center py-10 my-3'>Password Generator</h1>
                <div className='flex shaidow rounded-lg overflow-hidden mb-4'>
                    <input
                        type="text"
                        value={password}
                        className='outline-none w-full py-1 px-3 bg-white'
                        placeholder='Password'
                        readOnly
                        ref={passwordRef}

                    />
                    <button
                        onClick={copyPassword}
                        className='outline-none bg-blue-500 text-white px-4 shrink-0 cursor-pointer'
                    >Copy</button>
                </div>
                <div className='flex text-sm gap-x-2'>
                    <div className='flex irtems-center gap-x-1'>
                        <input
                            type="range"
                            min={8}
                            max={50}
                            value={length}
                            className='course-pointer'
                            onChange={(e) => setLenght(e.target.value)}
                        />
                        <label>Length : {length}</label>
                    </div>

                    <div className='flex irtems-center gap-x-1'>
                        <input
                            type="checkbox"
                            defaultChecked={numAllowed}
                            id='numInput'
                            className='course-pointer'
                            onChange={() => {
                                setNumAllowed((prev) => !prev)
                            }}
                        />
                        <label>Numbers</label>
                    </div>

                    <div className='flex irtems-center gap-x-1'>
                        <input
                            type="checkbox"
                            defaultChecked={charAllowed}
                            id='charInput'
                            className='course-pointer'
                            onChange={() => {
                                setCharAllowed((prev) => !prev)
                            }}
                        />
                        <label>Character</label>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PasswordGen
