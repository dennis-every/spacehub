import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';
import Mission from './Mission';

const MissionsContainer = () => {
  const dispatch = useDispatch();
  const ifSucceed = useSelector((store) => store.missions.ifSucceed);
  const isLoading = useSelector((store) => store.missions.isLoading);
  const missions = useSelector((store) => store.missions.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [ifSucceed, dispatch]);

  let content;
  if (isLoading) {
    content = (
      <tr>
        <td>Loading...</td>
      </tr>
    );
  } else if (ifSucceed) {
    content = missions.map((mission) => (
      <Mission
        key={mission.mission_id}
        id={mission.mission_id}
        name={mission.mission_name}
        description={mission.description}
        status={mission.status}
      />
    ));
  } else {
    content = (
      <tr>
        <td>Something went wrong...</td>
      </tr>
    );
  }

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>{content}</tbody>
    </table>
  );
};

export default MissionsContainer;
