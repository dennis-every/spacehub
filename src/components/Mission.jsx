const Mission = (props) => {
  const { id, title, description, status } = props;
  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{description}</td>
      <td>{status}</td>
      <td>
        <button type='button'>Join Mission</button>
      </td>
    </tr>
  );
};

export default Mission;
