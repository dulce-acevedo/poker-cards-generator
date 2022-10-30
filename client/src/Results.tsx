/* eslint-disable jsx-a11y/label-has-associated-control */
import PageLayout from './components/PageLayout';
import { useLocation } from 'react-router-dom';
import { Key } from 'react';

function Results() {
  const location = useLocation();
  const cards = location.state.data;
  console.log(cards);
  return (
    <>
      <PageLayout gap="gap-20">
        <div className="mx-40">
          <ul className="overflow-auto w-full relative">
            {cards.map(
              (card: { buffer: string }, idx: Key | null | undefined) => {
                const { buffer } = card;
                return (
                  <li key={idx} className="w-1/5 inline-grid pr-10 pb-10">
                    <img src={`data:image/jpeg;base64,${buffer}`} alt="uwu" />
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </PageLayout>
    </>
  );
}

export default Results;
