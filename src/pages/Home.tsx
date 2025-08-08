import BooksTable from "@/components/common/BooksTable";
import Wrapper from "@/components/common/Wrapper";

const Home = () => {
  return (
    <>
      <Wrapper>
        <BooksTable items={6} />
      </Wrapper>
    </>
  );
};

export default Home;
