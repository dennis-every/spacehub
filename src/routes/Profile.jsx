import JoinedMissions from '../components/JoinedMissions';
import ReservedRockets from '../components/ReservedRockets';

const Profile = () => (
  <section className="container row">
    <div className="col">
      <JoinedMissions />
    </div>
    <div className="col">
      <ReservedRockets />
    </div>
  </section>
);

export default Profile;
