import { Link } from 'react-router-dom';
const UserItem = ({user}) => {
        return (
            <div className="user-item">
                <img src={user.avatar_url} alt="" />
                <h3>{user.login}</h3>
                <Link to={`/user/${user.login}`}>More</Link>
            </div>
        )
}
export default UserItem;
