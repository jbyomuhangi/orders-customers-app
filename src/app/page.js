import { redirect } from "next/navigation";

const Home = () => {
  redirect("/orders");

  return null;
};

export default Home;
