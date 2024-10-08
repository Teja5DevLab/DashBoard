import { Box } from "@mui/material";
import GeographyChart from "../../Components/GeographyChart";

const Geography = () => {
  return (
    <Box m="20px">
      <Box
        height="80vh"
        border='1px solid #d0d1d5'
        borderRadius="4px"
        boxShadow={3}
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
