import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  interface Show {
    // existing props
    above: string; // add this if above is optional
    // or
    children: React.ReactNode;
  }

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="md">
        <GridItem area="aside" bg="gold">
          aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="dodgerblue">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
