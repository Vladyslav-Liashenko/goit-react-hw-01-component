export const FriendListItem = ({key, isOnline, avatar, name}) => {
  return (
    <li className="item-friends" key={key + 1}>
      <span className={isOnline ? 'status online' : 'status offline'}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
