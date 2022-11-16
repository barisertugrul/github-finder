import React, { Component, useContext } from 'react'
import GithubContext from '../context/github/githubContext'
import { Loader } from './Loader'
import User from './User'

/* 
class Users extends Component {
  render() {
    if(this.props.loading){
        return <Loader />
    } else {
        return (
            <div className='container mt-3'>
                <div className="row">
                    {this.props.users.map(user => (
                    <User user={user} key={user.id} />
                ))}
                </div>
                
            </div>
        )
    }
  }
}
 */

    const Users = () => {

    const githubContext = useContext(GithubContext)
    const {users, loading} = githubContext
      if(loading){
          return <Loader />
      } else {
          return (
              <div className='container mt-3'>
                  <div className="row">
                    {
                        users.map(user => (
                            <User user={user} key={user.id} />
                        ))
                    }
                  </div>
                  
              </div>
          )
      }
    
  }
  
export default Users