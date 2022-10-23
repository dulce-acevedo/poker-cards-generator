import Footer from './Footer';
import Header from './Header';

const PageLayout = (props: { children?: React.ReactNode }) => {
  const { children } = props;
  return (
    <div className="grid grid-rows-[auto,1fr,auto] h-screen gap-40">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
