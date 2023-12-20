import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationComponent = ({ currentPage, totalPages, handlePagination }) => {
      // Handle change of the page
  const handleChange = (event, value) => {
    handlePagination(value);
  };


    // Render the PaginationComponent using css to make it look nice
  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        marginTop: '20px',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#FFFDD0',
        height: '30px',
        boxShadow: '0px -1px 5px 0px rgba(0, 0, 0, 0.5)',
        padding: '8px',
        
      }}

      
    >
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        variant="outlined"
        color="primary"
      />
    </Stack>
  );
};

export default PaginationComponent;