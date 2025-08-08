import BooksTable from "@/components/common/BooksTable";
import Wrapper from "@/components/common/Wrapper";
import { useGetBookQuery } from "@/redux/api/baseApi";

const Home = () => {
  const { data } = useGetBookQuery({
    filter: ""
  });
  console.log(data)
  return (
    <>
      <Wrapper>
        <BooksTable items={6} />
      </Wrapper>
    </>
  );
};

export default Home;
