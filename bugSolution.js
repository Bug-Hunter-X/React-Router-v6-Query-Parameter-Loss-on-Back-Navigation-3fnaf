import { useLocation, useSearchParams } from 'react-router-dom';

function useQuery() {
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  return [searchParams, setSearchParams];
}

function Page1() {
  const [searchParams] = useQuery();
  const paramValue = searchParams.get('param');

  return (
    <div>
      <h1>Page 1</h1>
      <p>Param: {paramValue}</p>
    </div>
  );
}

export default Page1; 