import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme.js";
import { mockDataInvoices } from "../../Data/Data";
import Header from "../../Components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography mt="15px" color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m={isSmallScreen ? "20px 0 0 20px" : "20px 20px 0 20px"}>
      <Header title="Invoices" subtitle="List of Invoices Balance" />
      <Box
        m="15px 0 0 0"
        height="70vh"
        boxShadow={3}
        sx={{
          cursor: "pointer",
          "& .MuiDataGrid-root": {
            border: "none",
            minWidth: "700px",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: `${colors.blueAccent[700]}`,
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
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
        }}
      >
        <Box sx={{ height: "100%", overflow: "auto" }}>
          <DataGrid
            checkboxSelection
            rows={mockDataInvoices}
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
    </Box>
  );
};

export default Invoices;
