import React from 'react'
import {UserContext} from './Context'
import {useContext} from 'react'
function User() {
    const user = useContext(UserContext)
    return (
        <div>
            {/* <p>{user.name}</p>
            <p>{user.age}</p> */}
        <UserContext.Consumer>
          {(user) => (
            <div>
              <p>{user.name} </p>
              <p>{user.age} </p>
            </div>
          )}
        </UserContext.Consumer>
          
        </div>
    )
}

export default User
