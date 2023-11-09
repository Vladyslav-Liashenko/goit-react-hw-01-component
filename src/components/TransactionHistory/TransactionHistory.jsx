import {

} from './TransactionHistory.style';

export const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <section className="transaction-section">
        <table className="transaction-history">
          <thead className="transaction-header">
            <tr className="transaction">
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody className="transaction-foot">
            {items.map((el, index) => (
              <tr className="string" key={index+1} id={el.id}>
                <td>{el.type}</td>
                <td>{el.amount}</td>
                <td>{el.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </section>
  );
};
