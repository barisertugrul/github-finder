import React, {useContext, useState} from "react";
import AlertContext from "../context/alert/alertContext";
import GithubContext from "../context/github/githubContext";


/* 
export class Search extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      keyword: "",
    };
  }

  onChange(e) {
    this.setState({keyword: e.target.value});
  }

  onSubmit(e){
    e.preventDefault()
    if(this.state.keyword === ''){
        this.props.setAlert('Lütfen bir anahtar kelime giriniz.', 'danger')
    }else{
        this.props.searchUsers(this.state.keyword)
        this.setState({ keyword: ''})
    }
    
  }

  render() {
    return (
      <div className="container my-3">
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={this.state.keyword}
              onChange={this.onChange}
              className="form-control"
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </form>
        {
            this.props.showClearButton && <button onClick={this.props.clearUsers} className="btn btn-secondary btn-sm btn-block mt-2">Clear Results</button>
        }
      </div>
    );
  }
}
 */

const Search = () => {

  const {searchUsers, clearUsers, users} = useContext(GithubContext)
  const {setAlert} = useContext(AlertContext)
  const [keyword, setKeyword] = useState('')

  const onChange = (e) => {
    setKeyword(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(keyword === ''){
        setAlert('Lütfen bir anahtar kelime giriniz.', 'danger')
    }else{
      searchUsers(keyword)
        setKeyword('')
    }
    
  }

  
  return (
    <div className="container my-3">
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={keyword}
            onChange={onChange}
            className="form-control"
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
      {
          users.length > 0 && <button onClick={clearUsers} className="btn btn-secondary btn-sm btn-block mt-2">Clear Results</button>
      }
    </div>
  );
  
}

export default Search;
