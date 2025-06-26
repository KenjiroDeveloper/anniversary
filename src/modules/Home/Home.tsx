import { Header, Footer } from "@/components"; /* <---- antes era import { Header, Footer } from "../../components"; */

/* **
  Instalamos Path para poder usar los path personalizados 
*/

export const Home = () => {
  return (
    <>
      <Header></Header>
      <div>
        <h1>Home</h1>
        <p>Welcome to the Home pagesss!</p>
      </div>
      <Footer></Footer>
    </>
  );
};
