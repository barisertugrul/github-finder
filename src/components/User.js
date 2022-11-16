import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  render() {
    const { avatar_url, login, html_url } = this.props.user;
    return (

      <div className="col-md-4 col-lg-3 col-sm-6 mb-2">
        <div className="card">
          <img
            src={avatar_url}
            alt={login}
            className="card-img rounded-circle"
            style={{width: '80%', margin: '15px auto'}}
          />

          <div className="card-body text-center">
            <h5 className="card-title">{login}</h5>
            <Link to={`/user/${login}`} className="btn btn-primary btn-sm">
              Go Profile
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
