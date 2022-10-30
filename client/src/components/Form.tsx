/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

interface AppProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}
const Form = (props: AppProps) => {
  const hostname = '127.0.0.1';
  const port = String(import.meta.env.VITE_PORT);
  const url = `http://${hostname}:${port}/`;
  const navigate = useNavigate();

  const client = axios.create({
    baseURL: url
  });

  async function submitTheme() {
    await client.get(`/card/${props.theme}`).then((res) => {
      navigate('/results', { state: { data: res.data } });
    });
  }

  return (
    <div className="form-control w-3/5 relative z-0">
      <label className="label">
        <span className="label-text-xl">Enter theme</span>
      </label>
      <label className="input-group input-group-md">
        <input
          type="text"
          placeholder="Kittens"
          className="bg-white input input-md input-bordered w-full"
          value={props.theme}
          onChange={(e) => props.setTheme(e.target.value)}
        />
      </label>
      <div className="flex flex-row pt-8  justify-center">
        <button
          onClick={() => {
            submitTheme();
          }}
          type="submit"
          className="btn btn-md mx-10"
        >
          Generate
        </button>
        <button className="btn btn-md">Im Feeling Lucky</button>
      </div>
    </div>
  );
};

export default Form;
