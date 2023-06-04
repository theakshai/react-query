import React from 'react';
import './App.css';
import CardLayout from './Layouts/CardLayout';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App-header">
      <h1>Rick And Morty Characters! </h1>
      <h4>Letssss go!!!!</h4>
      <QueryClientProvider client={queryClient}>
        <CardLayout/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
