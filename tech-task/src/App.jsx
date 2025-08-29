import React from 'react';
import { request } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import DataTable from './assets/data-table';
import './App.css';

// CH Open targets API
const API_URL = 'https://api.platform.opentargets.org/api/v4/graphql';

// CH API 'disease' Query from task doc
const GET_ASSOCIATED_TARGETS = `
  query lungCarcinomaAssociatedTargets {
    disease(efoId: "EFO_0001071") {
      associatedTargets(page: { index: 0, size: 10 }) {
        rows {
          target {
            id
            approvedSymbol
            approvedName
          }
          score
          datatypeScores {
            id
            score
          }
        }
      }
    }
  }
`;

// CH: Function to generate the table with thee associated target requests
function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['lungCarcinomaTargets'],
    queryFn: async () => request(API_URL, GET_ASSOCIATED_TARGETS),
  });

  // CH: Error handling
  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">An error occurred: {error.message}</div>;

  const targets = data?.disease?.associatedTargets?.rows || [];

  return (
    <div className="App">
      <h1>Genes associated with lung carcinoma</h1>
      {targets.length > 0 ? (
        <DataTable data={targets} />
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
}

export default App;
