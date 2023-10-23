import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationRounded = ({ setPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event, value) => {
    setCurrentPage(value);
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        page={currentPage}
        onChange={handleChange}
        style={{
          color: "#ff0707",
          border: "1px solid rgba(255, 0, 0, 0.5)",
          backgroundColor: "rgba(255, 0, 0, 0.12)",
        }}
      />
    </Stack>
  );
};

export default PaginationRounded;
