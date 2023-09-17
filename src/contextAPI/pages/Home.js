import React, { useContext } from 'react'
import {AppContext} from '../../App'

const Home = () => {

    const {username, setUsername} = useContext(AppContext)

    return (
        <>
            <div>Welcome to Home</div>
            <div>
                Username: <strong>
                    {username}
                </strong>
            </div>
        </>
    )
}

export default Home