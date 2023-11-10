import {

} from './Statistics.style';

export const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title ? title : 'UPLOAD STATS'}</h2>
      <ul className="stat-list">
        {stats.map((el, index) => (
          <li className="item "key={index + 1}>
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
// UPLOAD STATS