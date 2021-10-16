import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

type ResponseHook = [(searchTerm: string) => Promise<void>, [], string];

export default (): ResponseHook => {
  const [results, setResults] = useState<[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const searchHandler = async (searchTerm: string) => {
    setErrorMessage('');
    try {
      const response: any = await yelp.get('/search', {
        params: { limit: 50, term: searchTerm, location: 'san jose' },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchHandler('italian');
  }, []);

  return [searchHandler, results, errorMessage];
};
