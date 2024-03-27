import { Box, Spinner } from "grommet";
const GlobalSpinner = () => {
  return (
    <Box align="center">
      <Spinner
        border={[
          { side: "all", color: "background-contrast", size: "medium" },
          { side: "right", color: "brand", size: "medium" },
          { side: "top", color: "brand", size: "medium" },
          { side: "left", color: "brand", size: "medium" },
        ]}
      />
    </Box>
  );
};

export default GlobalSpinner;
