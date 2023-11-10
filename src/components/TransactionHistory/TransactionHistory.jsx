import {
  Section, TH, THeader, Trans, TransFoo

} from './TransactionHistory.style';

export const TransactionHistory = ({ items }) => {
  return (
    <Section className="transaction-section">
        <TH className="transaction-history">
          <THeader className="transaction-header">
            <Trans className="transaction">
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </Trans>
          </THeader>
          <TransFoo className="transaction-foot">
            {items.map((el, index) => (
              <Trans className="string" key={index+1} id={el.id}>
                <td>{el.type}</td>
                <td>{el.amount}</td>
                <td>{el.currency}</td>
              </Trans>
            ))}
          </TransFoo>
        </TH>
    </Section>
  );
};
