import Mission from './Mission';

const MissionsContainer = () => {
  const missions = [];

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th>{' '}</th>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <Mission
            key={mission.id}
            id={mission.id}
            title={mission.title}
            description={mission.description}
            status={mission.status}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MissionsContainer;
