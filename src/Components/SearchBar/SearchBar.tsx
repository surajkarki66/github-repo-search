import React from "react";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: (event: React.SyntheticEvent) => Promise<void>;
};

const SearchBar: React.FC<Props> = ({ onChange, loading, handleSearch }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
      <SearchIcon sx={{ marginRight: "10px" }} />
      <Input
        placeholder="Search Github repositories"
        onChange={onChange}
        sx={{
          width: "100%",
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: "1.2rem",
        }}
        disableUnderline
      />
      <LoadingButton
        loading={loading}
        onClick={handleSearch}
        variant="contained"
        size="small"
        sx={{ fontSize: ".8rem" }}
      >
        Search
      </LoadingButton>
    </Box>
  );
};

export default SearchBar;
