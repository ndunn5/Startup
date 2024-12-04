import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './authenticated.css';


export function logout(onLogout) {
  fetch(`/api/auth/logout`, {
    method: 'delete',
  })
    .catch(() => {
      // Logout failed. Assuming offline
    })
    .finally(() => {
      localStorage.removeItem('userName');
      localStorage.removeItem('Login');
      onLogout();
    });
}

export function Authenticated(props) {
  const navigate = useNavigate();

  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <Button variant='primary' onClick={() => navigate('/Home')}>
        Home
      </Button>
      <Button variant='secondary' onClick={() => logout(props.onLogout)}>
        Logout
      </Button>
    </div>
  );
}
