import Footer from './Footer';
import Header from './Header';

const PageLayout = (props: { children?: React.ReactNode; gap: string }) => {
  const { children, gap } = props;
  const classData = `grid grid-rows-[auto,1fr,auto] min-h-screen ${gap}`;
  return (
    <div className={classData}>
      <Header />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
