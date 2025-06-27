import {
  Header,
  Footer,
  Grid,
} from "@/components"; /* <---- antes era import { Header, Footer } from "../../components"; */

/* **
  Instalamos Path para poder usar los path personalizados 
*/

import { GridLink } from "./components/GridLink";

export const Home = () => {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col grow p-4 mt-28 max-w-full">
        <div className="bg-dark-backdrop p-2 rounded-3xl shadow">
          <section className="p-2">
            <div className="mx-4 mb-4">
              <h2 className="text-5xl font-bold">Relationship statics</h2>
            </div>
          </section>
          <div className="flex bg-dark rounded-2xl p-2 border-primary border-2">
            <Grid columns={3} rows={2} gap={2}>
              <GridLink href="home">1</GridLink>
              <GridLink href="home">2</GridLink>
              <GridLink href="home">3</GridLink>
              <GridLink href="home">4</GridLink>
              <GridLink href="home">5</GridLink>
              <GridLink href="home">6</GridLink>
            </Grid>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};
