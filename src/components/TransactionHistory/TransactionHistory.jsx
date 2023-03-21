import PropTypes from 'prop-types';
import {
  TableHeadStyled,
  TableRowStyled,
  TableStyled,

} from './TransactionsHistiry.styled';

export const TransactionHistory = ({title, transactions}) => (
<>
<h2 className='title'>{title}</h2>
<TableStyled>
  <TableHeadStyled>
    <tr>
      <th>TYPE</th>
      <th>AMOUNT</th>
      <th>CURREMNCY</th>
    </tr>
  </TableHeadStyled>
  <tbody>
    {transactions.map(({id, type, amount, currency}) => 
    (<TableRowStyled key={id}>
      <td>{type}</td> 
      <td>{amount}</td>
      <td>{currency}</td>
    </TableRowStyled>))}
  </tbody>
</TableStyled>
</>
);

TransactionHistory.propTypes = {
transactions: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}).isRequired,
)};