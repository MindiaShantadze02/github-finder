import { useEffect , useContext } from 'react';
import { Link } from 'react-router-dom';
import GithubContext from '../context/github/githubContext';
import Loading from './Loading';
const User = (props,{loading}) => {
    const { user , getUser } = useContext(GithubContext);
    useEffect(() => {
        getUser(props.match.params.login)
        return () => {
        }
    }, [])
    const {
        name,
        avatar_url,
        location,
        company,
        bio,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user;
    if (loading) {
        return (<Loading />)
    }
    return ( 
        <div className="user">
            <Link to='/' className="mainpage-link">Back to main page</Link>
            <div className="info-wrapper">
                <div className="user-avatar">
                    <img src={avatar_url} alt="User img" />
                    <br />
                    <h3>Name: {name}</h3>
                    <br />
                    <h3>Location: {location}</h3>
                    <br />
                    <h3>Hireable: {hireable ?  "Is hireable" : "Is not hireable"}</h3>
                </div>
                <div className="user-info">
                    {bio && (
                        <div className="user-bio">
                        <h3>Bio</h3>
                        <p>{bio}</p>
                        </div>
                    )}
                    <div className="profile-link">
                        <a href={html_url} target='blank'>Visit Github Profile</a>
                    </div>
                    <div className="info-div username">
                        <h4>Username: </h4><span>{login}</span>
                    </div>
                    {company && (

                    <div className="info-div company">
                        <h4>Company: </h4><span>{company}</span>
                    </div>
                    )}
                </div>
            </div>
            <div className="other-info">
                <span className='other-info-span followers'>Followers: {followers}</span>
                <span className='other-info-span following'>Following: {following}</span>
                <span className='other-info-span repos'>Public Repos: {public_repos}</span>
                <span className='other-info-span gists'>Public Gists: {public_gists}</span>
            </div>
        </div>
     );
}
 
export default User;