/* eslint-disable jsx-a11y/label-has-associated-control */
import PageLayout from './components/PageLayout';
import poker from '../public/poker-deck.png';
import pokerup from '../public/poker-card.png';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config({
//   path: '../.env'
// });

function App() {
  const [data, setData] = useState('');
  const hostname = '127.0.0.1';
  const port = String(import.meta.env.VITE_PORT);

  const client = axios.create();
  const url = `http://${hostname}:${port}/`;

  const fetchData = useCallback(async () => {
    await client
      .get(url)
      .then((res) => {
        console.log(res.data);
        return setData(res.data.exampleMessage);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const Form = () => {
    return (
      <div className="form-control w-3/5 relative z-0">
        <label className="label">
          <span className="label-text-xl">Enter theme</span>
        </label>
        <label className="input-group input-group-md">
          <input
            type="text"
            placeholder={data}
            className="bg-white input input-md input-bordered w-full"
          />
        </label>
        <div className="flex flex-row pt-8  justify-center">
          <button type="submit" className="btn btn-md mx-10">
            Genrerate
          </button>
          <button className="btn btn-md">Im Feeling Lucky</button>
        </div>
      </div>
    );
  };

  return (
    <>
      <PageLayout>
        <div className="flex flex-col items-end w-full px-32 top-12 absolute z-1">
          <img src={pokerup} alt="logo" className="h-72" />
        </div>
        <div className="justify-items-start w-2/5 px-32 py-40 items-center absolute z-1">
          <img src={poker} alt="logo" className="h-72" />
        </div>
        <section className="flex flex-col items-center gap-5 relative z-0">
          <h1 className="text-5xl">Create your own Card Deck!</h1>
          <Form />
        </section>
      </PageLayout>
    </>
  );
}

export default App;
