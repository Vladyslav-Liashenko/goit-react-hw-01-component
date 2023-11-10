import user from './datа/user.json';
import { Profile } from './Profile/Profile';
import data from './datа/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from './datа/friends.json';
import { FriendList } from './FriendList/FriendList';
import transactions from './datа/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import '../index.css';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'normal',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
