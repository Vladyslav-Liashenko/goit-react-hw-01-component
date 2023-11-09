import {
  ptext,
  litext,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, likes, views } = stats;
  return (
    <section className="profil">
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatarbig" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="statsres">
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className="statsres">
          <span className="label">Views</span>
          <span className="quantity">{likes}</span>
        </li>
        <li className="statsres">
          <span className="label">Likes</span>
          <span className="quantity">{views}</span>
        </li>
      </ul>
      </div>
      </section>
  );
};
