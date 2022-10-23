/* eslint-disable jsx-a11y/label-has-associated-control */
import PageLayout from './components/PageLayout';
import poker from '../public/poker-deck.png';

function App() {
  const Form = () => {
    return (
      <>
        <div className="form-control w-3/5 relative z-0">
          <label className="label">
            <span className="label-text-xl">Enter theme</span>
          </label>
          <label className="input-group input-group-md">
            <input
              type="text"
              placeholder="Eg. Pokemon"
              className="bg-white input input-md input-bordered w-full"
            />
          </label>
          <div className="flex flex-row pt-8  justify-center">
            <button className="btn btn-md mx-10">Generate</button>
            <button className="btn btn-md">Im Feeling Lucky</button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <PageLayout>
        <div className="justify-items-start w-2/5 px-32 py-24 items-center absolute z-1">
          <img src={poker} alt="logo" className="h-72" />
        </div>
        <section className="flex flex-col items-center gap-5 h-full relative z-0">
          <h1 className="text-5xl">Create your own Card Deck!</h1>
          <Form />
        </section>
      </PageLayout>
    </>
  );
}

export default App;
