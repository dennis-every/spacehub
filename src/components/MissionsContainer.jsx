import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';
import Mission from './Mission';

const MissionsContainer = () => {
  const dispatch = useDispatch();
  const ifSucceed = useSelector((store) => store.missions.ifSucceed);
  const isLoading = useSelector((store) => store.missions.isLoading);
  const missionsArray = useSelector((state) => state.missions.missionsArray);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch, ifSucceed]);

  let content;
  if (isLoading) {
    content = (
      <tr>
        <td>Loading...</td>
      </tr>
    );
  } else if (ifSucceed) {
    content = missionsArray.map((mission) => (
      <Mission key={mission.mission_id} mission={mission} />
    ));
  } else {
    content = <tr><td>Something went wrong...</td></tr>;
  }

  return (
    <div className="container">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th className="w-10">Mission</th>
            <th className="w-50">Description</th>
            <th className="w-20">Status</th>
            <th className="w-20"> </th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
};

export default MissionsContainer;
