import React, { useContext } from 'react'
import {AppContext} from '../../App'
import EditProfile from './EditProfile'

const Profile = () => {

    const {username, setUsername} = useContext(AppContext)

    return (
    <>
        <div>Welcome to Profile Page</div>
        <div>
            Username: <strong>
                {username}
            </strong>
        </div>
        <hr/>
        <div>Edit Username &rarr;</div>
        <EditProfile />
    </>
    )
}

export default Profile