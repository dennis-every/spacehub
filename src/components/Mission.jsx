import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missionsSlice';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();

  const joinMissionHandler = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <tr>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>
        {mission.reserved === true ? (
          <button type="button">Active Member</button>
        ) : (
          <button type="button">Not a Member</button>
        )}
      </td>
      <td>
        <button
          className="btn btn-outline-secondary btn-sm"
          type="button"
          onClick={() => joinMissionHandler(mission.mission_id)}
        >
          Join Mission
        </button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }),
};

Mission.defaultProps = {
  mission: {
    reserved: false,
  },
};

export default Mission;
