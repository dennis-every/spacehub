import PropTypes from 'prop-types';

const Mission = (props) => {
  const {
    id, name, description,
  } = props;
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <button type="button">NOT A MEMBER</button>
      </td>
      <td>
        <button type="button">Join Mission</button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
