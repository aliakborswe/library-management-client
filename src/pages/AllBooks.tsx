import BooksTable from "@/components/common/BooksTable";
import Wrapper from "@/components/common/Wrapper";

const AllBooks = () => {
  return (
    <div>
      <Wrapper>
        <BooksTable items={12}/>
      </Wrapper>
    </div>
  );
};

export default AllBooks;
