import {
  Header,
  Footer,
} from "@/components"; /* <---- antes era import { Header, Footer } from "../../components"; */

/* **
  Instalamos Path para poder usar los path personalizados 
*/

export const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col grow p-4 gap-2">
        <h1>Home</h1>
        <p>Welcome to the Home pagesss!</p>

        <button className="d-btn d-btn-primary ">Button</button>
        <button className="d-btn d-btn-secondary"> Button </button>
        <button className="d-btn d-btn-accent">Button</button>
        <button className="d-btn d-btn-neutral">Button</button>
        <button className="d-btn d-btn-info">Button</button>
        <button className="d-btn d-btn-warning">Button</button>
        <button className="d-btn d-btn-error">Button</button>

      </div>
      <Footer></Footer>
    </>
  );
};
