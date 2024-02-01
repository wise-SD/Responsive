import { Home } from './components/Home';
import { Navbar } from './components/Navbar';

export const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
    </>
  );
};
