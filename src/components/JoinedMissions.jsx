import PropTypes from 'prop-types';

const JoinedMissions = (props) => {
  const { myMissions } = props;
  return (
    <>
      <h3>My Missions</h3>
      <ul className="list-group">
        {myMissions.map((mission) => (
          <li key={mission.mission_id} className="list-group-item">
            {mission.mission_name}
          </li>
        ))}
      </ul>
    </>
  );
};

JoinedMissions.propTypes = {
  myMissions: PropTypes.arrayOf(
    PropTypes.shape(
      {
        mission_id: PropTypes.string.isRequired,
        mission_name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        reserved: PropTypes.bool,
      },
    ),
  ),
};

JoinedMissions.defaultProps = {
  myMissions: [],
};

export default JoinedMissions;
