import { Section, Statistic, StatList, Item } from './Statistics.style';

export const Statistics = ({ stats, title }) => {
  return (
    <Section className="statistics">
      <Statistic>
        <h2 className="title">{title ? title : 'UPLOAD STATS'}</h2>
        <StatList>
          {stats.map((el, index) => (
            <Item key={index + 1}>
            {/* <li className="item " key={index + 1}> */}
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage}</span>
              {/* </li> */}
              </Item>
          ))}
        </StatList>
      </Statistic>
    </Section>
  );
};
