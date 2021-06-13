import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../pages/UserList.css'


const UserList = ({ pageNo }) => {

    const [userList, setUserList] = useState([])

    useEffect(() => {
        axios.get(`https:reqres.in/api/users?page=${pageNo}`).then(res => {
            setUserList(res.data.data)
        })
    }, [pageNo])


    return (
        <div>
            {userList !== [] &&
                <div>
                    {
                        userList.map(user => {
                            return (
                                <React.Fragment>
                                <img src={user.avatar} style={{width:"1rem"}} />
                                <h1>{user.first_name} {user.email}</h1>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default UserList
