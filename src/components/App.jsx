import user from '../user.json';
import { Profile } from './Profile';
import data from '../data.json';
import { Statistics } from './Statistics';
import friends from '../friends.json';
import { FriendList } from './FriendList';
import transactions from '../transactions.json';
import { TransactionHistory } from './TransactionHistory';
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
