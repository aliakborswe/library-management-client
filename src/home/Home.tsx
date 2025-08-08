import { useGetBookQuery } from "@/redux/api/baseApi";

const Home = () => {
  const { data } = useGetBookQuery({
    filter: ""
  });
  console.log(data)
  return <div>home</div>;
};

export default Home;
