import PropTypes from 'prop-types';

const Mission = (props) => {
  const {
    id,
    title,
    description,
    status,
  } = props;
  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{description}</td>
      <td>{status}</td>
      <td>
        <button type="button">Join Mission</button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Mission;
