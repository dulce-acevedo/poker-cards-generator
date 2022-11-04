/* eslint-disable jsx-a11y/label-has-associated-control */
import PageLayout from './components/PageLayout';
import { useLocation, useNavigate } from 'react-router-dom';
import { Key } from 'react';
import { jsPDF } from 'jspdf';
function Results() {
  const location = useLocation();
  const cards = location.state.data;
  const navigate = useNavigate();

  function generatePDF(cards: any[]) {
    /* eslint-disable new-cap */
    const doc = new jsPDF();
    // for (let i = 0; i < cards.length; i = i + 2) {
    //   let image = `data:image/jpeg;base64,${cards[i].buffer}`;
    //   let name = `${cards[i].name}`;
    //   doc.addImage(image, 'JPEG', 5, 5, 100, 140, name);
    //   image = `data:image/jpeg;base64,${cards[i + 1].buffer}`;
    //   name = `${cards[i + 1].name}`;
    //   doc.addImage(image, 'JPEG', 5, 105, 100, 140, name);
    //   doc.addPage();
    // }
    cards.forEach((card) => {
      const image = `data:image/jpeg;base64,${card.buffer}`;
      const name = `${card.name}`;
      doc.addImage(image, 'JPEG', 5, 5, 100, 140, name);
      doc.addPage();
    });
    doc.save();
  }
  return (
    <>
      <PageLayout gap="gap-20">
        <div className=" mx-40">
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
