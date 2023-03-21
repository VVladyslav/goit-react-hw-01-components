import {Profile} from './Profile/Profile';
import user from '../../src/user.json';
import {Statistics} from './Statistics/Statistics';
import data from '../../src/data.json';
import { FriendsList} from './FriendsList/FriendsList';
import friends from '../../src/friends.json';
import {TransactionHistory} from './TransactionHistory/TransactionHistory';
import transactions from '../../src/transactions.json';
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
