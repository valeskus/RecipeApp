import { useNavigate } from 'react-router-dom';

export const useHeaderController = () => {
  let navigate = useNavigate();

  const openMainPage = () => {
    return navigate('/');
  };

  return {
    openMainPage,
  };
};
