import {
  Section,

} from './TransactionHistory.style';

export const TransactionHistory = ({ items }) => {
  return (
    <Section className="transaction-section">
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
    </Section>
  );
};
