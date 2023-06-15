import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Main = () => {
    const [categoriaActual, setCategoriaActaul] = React.useState("cat1");
    const handleChange = (_, value) => {
        setCategoriaActaul(value);

    }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={categoriaActual} aria-label="basic tabs example" onChange={handleChange}>
          <Tab label="Televisores" value={"cat1"}/>
          <Tab label="Audifonos" value={"cat2"}/>
          <Tab label="Proyectores" value={"cat3"}/>
          <Tab label="Smartphones" value={"cat4"}/>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Main;
