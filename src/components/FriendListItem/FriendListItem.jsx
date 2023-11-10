import { Avatar, Status, Name, Li
  
} from '../FriendList/FriendList.style';

export const FriendListItem = ({ key, isOnline, avatar, name }) => {
  return (
    <Li className="item-friends" key={key + 1}>
      <Status isOnline={isOnline} className="status"></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </Li>
  );
};
