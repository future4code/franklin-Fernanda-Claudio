import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        setData(response.data.trips);
        console.log(response.data.trips);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };
  useEffect(getData, [url]);
  return [data, error, isLoading];
};
