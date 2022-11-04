/* eslint-disable jsx-a11y/label-has-associated-control */
import PageLayout from './components/PageLayout';
import { useLocation, useNavigate } from 'react-router-dom';
import { Key } from 'react';
import { jsPDF } from 'jspdf';
function Results() {
  const location = useLocation();
  const cards = location.state.data;

  const theme = location.state.theme;
  const navigate = useNavigate();

  function capitalizeFirstLetter(theme: string) {
    return theme.charAt(0).toUpperCase() + theme.slice(1);
  }

  function generatePDF(cards: any[]) {
    /* eslint-disable new-cap */
    const doc = new jsPDF();
    cards.forEach((card) => {
      const image = `data:image/jpeg;base64,${card.buffer}`;
      const name = `${card.name}`;
      doc.addImage(image, 'JPEG', 5, 5, 100, 140, name);
      doc.addPage();
    });
    doc.save(theme);
  }
  return (
    <>
      <PageLayout gap="gap-20">
        <div className=" mx-40">
          <div className="flex flex-col items-center gap-5 relative">
            {' '}
            <h1 className="text-5xl"> {capitalizeFirstLetter(theme)} </h1>
          </div>
          <div className="flex w-full justify-between mb-10 p-5">
            <button
              className="btn btn-md"
              onClick={() => {
                navigate('/');
              }}
              type="submit"
            >
              Back
            </button>
            <button
              onClick={() => {
                generatePDF(cards);
              }}
              type="submit"
              className="btn btn-md"
            >
              Print me
            </button>
          </div>

          <ul className="overflow-auto w-full relative">
            {cards.map(
              (card: { buffer: string }, idx: Key | null | undefined) => {
                const { buffer } = card;
                return (
                  <li key={idx} className="w-1/5 inline-grid p-5">
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
