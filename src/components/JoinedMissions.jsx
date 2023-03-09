import { useSelector } from 'react-redux';

const JoinedMissions = () => {
  const missionsArray = useSelector((state) => state.missions.missionsArray);
  const myMissions = missionsArray.filter((mission) => mission.reserved === true);

  return (
    <>
      <h3>My Missions</h3>
      <ul className="list-group">
        {
          myMissions.map((mission) => (
            <li key={mission.mission_id} className="list-group-item">{mission.mission_name}</li>
          ))
        }
      </ul>
    </>
  );
};

export default JoinedMissions;
