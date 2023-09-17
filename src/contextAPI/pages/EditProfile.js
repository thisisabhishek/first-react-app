import React, { useState, useContext } from 'react'
import {AppContext} from '../../App'

const EditProfile = () => {

    const {username, setUsername} = useContext(AppContext)

    const [newUsername, setNewUsername] = useState('')

    return (
        <>
            <div>
                <input onBlur={(e) => setNewUsername(e.target.value)} type="text" name="username" placeholder='Enter new username...'/>
                <button onClick={() => setUsername(newUsername)}>Update</button>
            </div>
        </>
    )
}

export default EditProfile