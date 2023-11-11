import {
  Section,
  Statistic,
  StatList,
  Item,
  StatisticTitle,
} from './Statistics.style';

export const Statistics = ({ stats, title }) => {
  return (
    <Section className="statistics">
      <Statistic>
        {title && <StatisticTitle>{title}</StatisticTitle>}
        <StatList>
          {stats.map((el, index) => (
            <Item key={index + 1}>
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage}</span>
            </Item>
          ))}
        </StatList>
      </Statistic>
    </Section>
  );
};
