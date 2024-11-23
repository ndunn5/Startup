import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export default function Login({ userName, authState, onAuthChange }) {
  console.log('authState:', authState, 'userName:', userName);

  return (
    <main className='container-fluid bg-secondary text-center white background'>
      <div>
        {authState === AuthState.Unknown && <h1>Loading...</h1>}
        {authState !== AuthState.Unknown && <h1>Login</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated
            userName={userName}
            onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)}
          />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => onAuthChange(loginUserName, AuthState.Authenticated)}
          />
        )}
        {authState !== AuthState.Authenticated &&
          authState !== AuthState.Unauthenticated &&
          authState !== AuthState.Unknown && (
            <h1>Error: Invalid authentication state</h1>
          )}
      </div>
    </main>
  );
}

