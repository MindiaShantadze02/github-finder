import { useState , useContext } from 'react';
import GithubContext from '../context/github/githubContext';
import AlertState from '../context/alert/alertContext';
const Search = (props) => {
    const { showAlert } = useContext(AlertState);
    const { searchUsers , clearUsers , users } = useContext(GithubContext);
    const [text, setText] = useState('');
    const handleOnChange = (ev) => {
        setText(ev.target.value);
    }
    const handleOnSubmit = (ev) => {
        ev.preventDefault();
        if (text === '') {
            showAlert("Please Enter Something","danger");
        }
        else {
            searchUsers(text);
            setText('');
        }
    }
    return ( 
        <div className="search">
            <form className="form" onSubmit={handleOnSubmit}>
                <input className="form-input" type="text" name="text" placeholder="Search Users..." value={text}
                onChange={handleOnChange} autoComplete="off" />
                <button type="submit" className="search-btn">Search</button>
                {users.length > 0 && (
                <button className="clear" style={{border: "2px solid grey",backgroundColor:
                    "#fff",color:"grey",padding:"10px 20px"}} onClick={clearUsers}>Clear</button>
                )}
            </form>
        </div>
     );
}
 
export default Search;