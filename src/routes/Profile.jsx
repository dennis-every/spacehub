import { useSelector } from 'react-redux';
import JoinedMissions from '../components/JoinedMissions';
import ReservedRockets from '../components/ReservedRockets';

const Profile = () => {
  const missionsArray = useSelector((state) => state.missions.missionsArray);
  const myMissions = missionsArray.filter(
    (mission) => mission.reserved === true
  );

  return (
    <section className='container row'>
      <div className='col'>
        <JoinedMissions myMissions={myMissions} />
      </div>
      <div className='col'>
        <JoinedMissions myMissions={myMissions} />
      </div>
    </section>
  );
};

export default Profile;
