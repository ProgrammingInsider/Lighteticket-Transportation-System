import { Suspense, lazy } from 'react';

const Tariffs = lazy(() => import('./@tariffs/Tariffs'));
const Totals = lazy(() => import('./@total/TotalCard'));
const Incomes = lazy(() => import('./@incomes/Incomes'));

const Home = () => {
  return (
    <div>

      <Suspense fallback={<div>Loading Totals...</div>}>
        <Totals />
      </Suspense>

      <Suspense fallback={<div>Loading Tariffs...</div>}>
        <Tariffs />
      </Suspense>

      <Suspense fallback={<div>Loading Incomes...</div>}>
        <Incomes />
      </Suspense>
    </div>
  );
};

export default Home
