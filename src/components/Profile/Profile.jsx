import { P, Li } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, likes, views } = stats;
  return (
    <section className="profil">
      <div className="profile">
        <div className="description">
          <img src={avatar} alt="User avatar" className="avatarbig" />
          <P className="name">{username}</P>
          <P className="tag">@{tag}</P>
          <P className="location">{location}</P>
        </div>

        <ul className="stats">
          <Li className="statsres">
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </Li>
          <Li className="statsres">
            <span className="label">Views</span>
            <span className="quantity">{likes}</span>
          </Li>
          <Li className="statsres">
            <span className="label">Likes</span>
            <span className="quantity">{views}</span>
          </Li>
        </ul>
      </div>
    </section>
  );
};
