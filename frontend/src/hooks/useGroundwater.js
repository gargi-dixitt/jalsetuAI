import { useEffect, useState } from 'react';
import { getAllGroundwater, getGroundwaterSummary } from '../services/api';

export function useGroundwater() {
  const [data, setData] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([getAllGroundwater(), getGroundwaterSummary()])
      .then(([gwRes, summaryRes]) => {
        setData(gwRes.data);
        setSummary(summaryRes.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, summary, loading, error };
}
