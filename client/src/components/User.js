import React, {useEffect, useState} from 'react'
import {  Button } from 'antd'
import config from '../../config.js'

const DeleteUser = (id, userchanged) => {
    fetch(`${config.host}user/delete`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _id: id
        })
    }).then(res => {
        if (res.ok === true) {
            userchanged()
        }
    })
}

export const User = (props) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        fetch(`${config.host}users`)
            .then(res => res.json())
            .then(json => setUserData(json))
    }, [props.userChange])

    return (
        userData ?
            userData.map((user) => {
                return <div className="user" key={user._id}>
                    <div className="user-image">
                        <img src={user.profileimage} />
                    </div>
                    <div>
                        <h2>{user.username}</h2>
                        <Button onClick={() => DeleteUser(user._id, props.UserChanged)}>X</Button>
                    </div>
                </div>
            }) : <h2>Loading...</h2>
    )
}