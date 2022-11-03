/* eslint-disable jsx-a11y/label-has-associated-control */
import PageLayout from './components/PageLayout';
import poker from './images/poker-deck.png';
import pokerup from './images/poker-card.png';
import Form from './components/Form';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('');
  useEffect(() => {
    setTheme(theme);
  }, []);

  return (
    <>
      <PageLayout gap="gap-56">
        <div className="flex flex-col items-end w-full px-32 top-12 absolute z-1">
          <img src={pokerup} alt="logo" className="h-72" />
        </div>
        <div className="justify-items-start w-2/5 px-32 py-40 items-center absolute z-1">
          <img src={poker} alt="logo" className="h-72" />
        </div>
        <section className="flex flex-col items-center gap-5 relative z-0">
          <h1 className="text-5xl">Create your own Card Deck!</h1>
          <Form theme={theme} setTheme={setTheme} />
        </section>
      </PageLayout>
    </>
  );
}

export default App;
