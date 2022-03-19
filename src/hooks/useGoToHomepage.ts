import { useNavigate } from 'react-router-dom';

function useGoToHomepage() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/');
  };

  return clickHandler;
}

export default useGoToHomepage;
