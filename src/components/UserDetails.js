import React, { Component, useContext, useEffect } from 'react'
import GithubContext from '../context/github/githubContext'
import { Loader } from './Loader'
import Repos from './Repos'

/* 
class UserDetails extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
        this.props.getUserRepos(this.props.match.params.login)
    }
  render() {
    const {loading, user, repos} = this.props
    const {name, avatar_url, location, html_url, bio, blog, followers, following, public_repos} = user
    if(loading){
        return <Loader />
    } else {
        return (
            <div className='container my-3'>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img
                                src={avatar_url}
                                alt={name}
                                className="card-img-top rounded-circle"
                                style={{width: '80%', margin: '15px auto'}}
                            />
                            <div className="card-body text-center">
                                <p className="card-text">{name}</p>
                                <p> <i className="fas fa-map-marker-alt"></i> {location} </p>
                                <p>
                                    <a className='btn btn-block btn-primary btn-sm' href={html_url}>Github Profile</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                                {
                                    bio &&
                                        <>
                                            <h3>About</h3>
                                            <p>{bio}</p>
                                        </>
                                }
                                {
                                    blog &&
                                        <>
                                            <h3>Blog</h3>
                                            <p>{blog}</p>
                                        </>
                                }
                                <span className="badge badge-primary m-1">Followers: {followers} </span>

                                <span className="badge badge-danger m-1">Following: {following} </span>

                                <span className="badge badge-success m-1">Repo: {public_repos} </span>
                            </div>
                            <ul className="list-group list-group-flush">
                                <Repos repos={repos} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  }
}
 */


const UserDetails = ( {match} ) => {


    const {getUser, loading, user, repos, getUserRepos} = useContext(GithubContext)
    useEffect(() => {
        getUser(match.params.login)
        getUserRepos(match.params.login)
    }, [])
    

    const {name, avatar_url, location, html_url, bio, blog, followers, following, public_repos} = user
    if(loading){
        return <Loader />
    } else {
        return (
            <div className='container my-3'>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img
                                src={avatar_url}
                                alt={name}
                                className="card-img-top rounded-circle"
                                style={{width: '80%', margin: '15px auto'}}
                            />
                            <div className="card-body text-center">
                                <p className="card-text">{name}</p>
                                <p> <i className="fas fa-map-marker-alt"></i> {location} </p>
                                <p>
                                    <a className='btn btn-block btn-primary btn-sm' href={html_url}>Github Profile</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                                {
                                    bio &&
                                        <>
                                            <h3>About</h3>
                                            <p>{bio}</p>
                                        </>
                                }
                                {
                                    blog &&
                                        <>
                                            <h3>Blog</h3>
                                            <p>{blog}</p>
                                        </>
                                }
                                <span className="badge badge-primary m-1">Followers: {followers} </span>

                                <span className="badge badge-danger m-1">Following: {following} </span>

                                <span className="badge badge-success m-1">Repo: {public_repos} </span>
                            </div>
                            <ul className="list-group list-group-flush">
                                <Repos repos={repos} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default UserDetails