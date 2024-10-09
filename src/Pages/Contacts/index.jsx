import { Box, useTheme, useMediaQuery } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme.js";
import { mockDataContacts } from "../../Data/Data";
import Header from "../../Components/Header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const columns = [
    !isSmallScreen && { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    !isSmallScreen && {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    !isSmallScreen &&
      !isMediumScreen && {
        field: "city",
        headerName: "City",
        flex: 1,
      },
    !isSmallScreen &&
      !isMediumScreen && {
        field: "zipCode",
        headerName: "Zip Code",
        flex: 1,
      },
  ].filter(Boolean);

  return (
    <Box m={isSmallScreen? "20px 0 0 20px" : "20px 20px 0 20px"}>
      <Header title="CONTACT" subtitle="Contacts for Future Reference" />
      <Box
        m="15px 0 0 0"
        height="70vh"
        boxShadow={3}
        sx={{
          cursor: "pointer",
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} ! important`,
          },
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataContacts}
          columns={columns}
          pagination
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 7,
              },
            },
          }}
          pageSizeOptions={[7, 10, 20]}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
