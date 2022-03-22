import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

function useGoToHomepage() {
  const navigate = useNavigate();

  const clickHandler = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return clickHandler;
}

export default useGoToHomepage;
