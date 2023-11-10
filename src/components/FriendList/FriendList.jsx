import {} from './FriendList.style';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <section className="friends">
      <ul className="friend-list">
        {friends.map((el, index) => (
          <FriendListItem
            key={index}
            isOnline={el.isOnline}
            avatar={el.avatar}
            name={el.name}
          />
        ))}
      </ul>
    </section>
  );
};
