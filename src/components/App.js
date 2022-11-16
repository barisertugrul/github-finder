import React, { Component, useState } from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import GithubState from '../context/github/githubState'
import AlertState from '../context/alert/alertState'
import About from './About'
import Alert from './Alert'
import Navbar from './Navbar'
import UserDetails from './UserDetails'
import NotFound from './NotFound'
import Home from './Home'

/* 
export class App extends Component {
    constructor(props){
        super(props)
        this.searchUsers = this.searchUsers.bind(this)
        this.clearUsers = this.clearUsers.bind(this)
        this.setAlert = this.setAlert.bind(this)
        this.getUser = this.getUser.bind(this)
        this.getUserRepos = this.getUserRepos.bind(this)
        this.state = {
            loading: false,
            users:[],
            user: {},
            repos: [],
            alert: null
        }
    }

    
    // componentDidMount() {
    //     this.setState({loading:true})
    //     //Test için 3 sn bekleme
    //     setTimeout(() => {
    //         axios
    //             .get('https://api.github.com/users')
    //             .then(res => this.setState({users: res.data, loading: false}))
    //     }, 1000);
        
    // }


    searchUsers(keyword) {
        this.setState({loading:true})
        //Test için 1 sn bekleme
        setTimeout(() => {
            axios
                .get(`https://api.github.com/search/users?q=${keyword}`)
                .then(res => this.setState({users: res.data.items, loading: false}))
        }, 1000);
        
    }

    getUser(username) {
        this.setState({loading: true})
        setTimeout(() => {
            axios
                .get(`https://api.github.com/users/${username}`)
                .then(res => this.setState({user: res.data, loading: false}))
        }, 1000);
    }

    getUserRepos(username) {
        this.setState({loading: true})
        setTimeout(() => {
            axios
                .get(`https://api.github.com/users/${username}/repos`)
                .then(res => this.setState({repos: res.data, loading: false}))
        }, 1000);
    }

    clearUsers(){
      this.setState({ users: [] })
    }

    setAlert(msg, type) {
        this.setState({
            alert: { msg, type }
        })

        setTimeout(() => {
            this.setState({
                alert: null
            })
        }, 3000);
    }

  render() {
    return (
        <BrowserRouter>
            <Navbar />
            <Alert alert={this.state.alert} />
            <Switch>
                <Route exact path="/" render ={
                    props => (
                        <>
                            <Search
                                searchUsers={this.searchUsers}
                                clearUsers={this.clearUsers}
                                showClearButton={this.state.users.length > 0 ? true:false}
                                setAlert={this.setAlert}
                            />
                            <Users users= {this.state.users} loading={this.state.loading} />
                        </>
                    )
                } />
                <Route path="/about" component={About} />
                <Route path="/user/:login" render={props => (
                    <UserDetails
                        {...props}
                        getUser={this.getUser}
                        getUserRepos = {this.getUserRepos}
                        user={this.state.user}
                        repos = {this.state.repos}
                        loading={this.state.loading}
                    />
                ) } />
            </Switch>
        </BrowserRouter>
    )
  }
}
 */

const App = () => {
    
    // const [users, setUsers] = useState([])
    // const [user, setUser] = useState({})
    // const [loading, setLoading] = useState(false)
    // const [repos, setRepos] = useState([])
    // const [alert, setAlert] = useState(null)

/* 
    const searchUsers = (keyword) => {
        setLoading(true)
        //Test için 1 sn bekleme
        setTimeout(() => {
            axios
                .get(`https://api.github.com/search/users?q=${keyword}`)
                .then(res => {
                    setUsers(res.data.items)
                    setLoading(false)
                })
        }, 1000);
        
    }
 */

/* 
    const getUser = (username) => {
        setLoading(true)
        setTimeout(() => {
            axios
                .get(`https://api.github.com/users/${username}`)
                .then(res => {
                    setUser(res.data)
                    setLoading(false)
                })
        }, 1000);
    }
 */

/* 
    const getUserRepos = (username) => {
        setLoading(true)
        setTimeout(() => {
            axios
                .get(`https://api.github.com/users/${username}/repos`)
                .then(res => {
                    setRepos(res.data)
                    setLoading(false)
                })
        }, 1000);
    }
 */

/*     
    const clearUsers = () => {
      setUsers([])
    }
 */

/* 
    const showAlert = (msg, type) => {
        setAlert({ msg, type })

        setTimeout(() => {
            setAlert(null)
        }, 3000);
    }
 */

    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <Navbar />
                    <Alert />
                    <Switch>
                        <Route exact path="/" component ={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/user/:login" component={UserDetails} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    )
}

export default App