import {Profile} from './Profile/Profile';
import user from '../../src/Data/user.json';
import {Statistics} from './Statistics/Statistics';
import data from '../../src/Data/data.json';
import { FriendsList} from './FriendsList/FriendsList';
import friends from '../../src/Data/friends.json';
import {TransactionHistory} from './TransactionHistory/TransactionHistory';
import transactions from '../../src/Data/transactions.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
  
export const App = () => {
  return (
    <Layout>
      <GlobalStyle/>
      <Profile user={user} />
      <Statistics title="Statistics" data={data}/>
      <FriendsList title="Friends" friends={friends}/>
      <TransactionHistory title="Transactions history" transactions={transactions}/>
    </Layout>
  );
};
