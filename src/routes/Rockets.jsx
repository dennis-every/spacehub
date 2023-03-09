import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketsContainer from '../components/RocketsContainer';
import { getRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    rockets,
  } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch]);

  if (isLoading) {
    return (
      <h2>Is loading .....</h2>
    );
  }

  return (<RocketsContainer />);
};

export default Rockets;
