export const FriendList = ({ friends }) => {
  return (
    <section className="friends">
      <ul className="friend-list">
        {friends.map((el, index) => (
            <li className="item-friends" key={index + 1}>
            <span className={el.isOnline ? 'status online' : 'status offline'}></span>
            <img
              className="avatar"
              src={el.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{el.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
