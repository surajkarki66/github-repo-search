import { useState, ChangeEvent, SyntheticEvent } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";

import Axios from "../../axios-url";
import SearchBar from "../../Components/SearchBar/SearchBar";
import RepoCard from "../../Components/Card/RepoCard";
import AppPagination from "../../Components/Pagination/AppPagination";
import usePagination from "../../Components/Pagination/Pagination";
import { Repository } from "../../types";

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(10);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const _DATA = usePagination(results, itemsPerPage);

  const sortByItems = [
    {
      value: "stars",
      label: "Stars",
    },
    {
      value: "forks",
      label: "Forks",
    },
    {
      value: "help-wanted-issues",
      label: "Help Wanted Issues",
    },
    {
      value: "updated",
      label: "Updated",
    },
  ];

  const handlePageChange = (e: React.ChangeEvent, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSearch = async (event: SyntheticEvent) => {
    event.preventDefault();
    await search();
  };

  const search = async () => {
    try {
      setLoading(true);
      const response = await Axios.get(
        `search/repositories?q=${text}&sort=${sortBy}`
      );
      const { items, total_count } = response.data;
      setNoOfPages(Math.ceil(total_count / itemsPerPage));
      setResults(items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setNoOfPages(0);
      console.error(error);
    }
  };
  return (
    <>
      <div
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <form onSubmit={handleSearch}>
          <SearchBar
            onChange={handleChange}
            loading={loading}
            handleSearch={handleSearch}
          />
        </form>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: 400 }} onSubmit={handleSearch}>
          {" "}
          <InputLabel id="sortByLabel">Sort by</InputLabel>
          <Select
            labelId="sortByLabel"
            id="sortByLabel"
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
            label="Sort by"
            variant="standard"
            size="small"
            style={{ width: "50%", marginLeft: "3%" }}
          >
            {sortByItems.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {!loading && _DATA.currentData().length > 0 ? (
          <>
            {_DATA.currentData().map((r: Repository) => (
              <RepoCard
                repo={{
                  id: r.id,
                  repoName: r.name,
                  author: r.owner.login,
                  noOfStars: r.stargazers_count,
                  noOfForks: r.forks_count,
                  noOfWatchers: r.watchers_count,
                  shortDesc: r.description,
                  updatedDate: r.updated_at,
                }}
              />
            ))}
            <AppPagination
              page={page}
              noOfPages={noOfPages}
              perPage={itemsPerPage}
              handleChange={handlePageChange}
              setPerPage={setItemsPerPage}
            />
          </>
        ) : (
          <>
            {loading ? (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
              </Box>
            ) : (
              <h2 style={{ textAlign: "center" }}>No repo found</h2>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default SearchPage;
