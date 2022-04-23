import { ChangeEvent, FormEvent, useReducer } from 'react';

type State = {
  name: string;
  email: string;
  subject: string;
  content: string;
  phone: string;
};

const initialState: State = {
  name: '',
  email: '',
  subject: '',
  content: '',
  phone: '',
};

type ResetAction = {
  type: 'reset';
};

type ChangeAction = {
  type: 'change';
  name: keyof State;
  value: string;
};

type Action = ChangeAction | ResetAction;

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'change':
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      throw new Error('Unhandled action type');
  }
};

export const useContactForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: 'change',
      name: e.target.name as keyof State,
      value: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    }).then(() => {
      dispatch({ type: 'reset' });
    });
  };

  return {
    state,
    handleChange,
    handleSubmit,
  };
};
