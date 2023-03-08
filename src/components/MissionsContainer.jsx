import Mission from './Mission';

const MissionsContainer = () => {
  const missions = [
    {
      id: '1',
      title: 'Thaicom',
      description: 'Desc 1',
      status: 'Not a Member',
    },
    {
      id: '2',
      title: 'Telstart',
      description: 'Desc 2',
      status: 'Not a Member',
    },
    {
      id: '3',
      title: 'Iridium',
      description: 'Desc 3',
      status: 'Not a Member',
    },
  ];

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>{' '}</th>
        </tr>
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
