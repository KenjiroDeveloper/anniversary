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
      <div className="flex flex-col grow p-4 mt-16">
        <div className="flex">
          <Grid columns={3} rows={3} gap={1}>
            <div>1</div>
            <GridLink href="home" colStart={3} rowStart={2}>
              2
            </GridLink>
            <GridLink href="home" rowSpan={2} colStart={2}>2</GridLink>
          </Grid>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
