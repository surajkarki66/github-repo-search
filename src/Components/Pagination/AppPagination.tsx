import React from "react";
import Box from "@mui/material/Box";
import { InputLabel, Pagination } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  noOfPages: number;
  page: number;
  perPage: number;
  setPerPage: React.Dispatch<React.SetStateAction<number>>;
  handleChange: (e: React.ChangeEvent<any>, p: number) => void;
};

const AppPagination: React.FC<Props> = ({
  noOfPages,
  page,
  perPage,
  setPerPage,
  handleChange,
}) => {
  const perPages = [
    {
      value: 10,
      label: "10",
    },
    {
      value: 25,
      label: "25",
    },
    {
      value: 50,
      label: "50",
    },
  ];
  return (
    <Box py={3} display="flex" justifyContent="center">
      <Pagination
        color="primary"
        count={noOfPages}
        page={page}
        onChange={handleChange}
      />
      <InputLabel style={{ marginLeft: "20px" }}>Rows per page</InputLabel>
      <Select
        labelId="sortByLabel"
        id="sortByLabel"
        value={perPage}
        onChange={(e) => {
          setPerPage(parseInt(String(e.target.value)));
        }}
        label="Sort by"
        variant="standard"
        size="small"
        style={{ marginLeft: "20px" }}
      >
        {perPages.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default AppPagination;
