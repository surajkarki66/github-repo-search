import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";

import Axios from "../../axios-url";
import RepoDetailsCard from "../../Components/Card/RepoDetailsCard";
import { RepositoryDetails } from "../../types";

const DetailPage: React.FC = () => {
  const [detail, setDetail] = useState<RepositoryDetails>({
    owner: { login: "", html_url: "" },
    name: "",
    open_issues_count: 0,
    default_branch: "",
    html_url: "",
  });
  const [loading, setLoading] = useState(true);
  const { repo, owner } = useParams();

  useEffect(() => {
    Axios.get(`repos/${owner}/${repo}`)
      .then((res) => {
        setDetail(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, [owner, repo]);
  return (
    <div style={{ marginTop: "8%" }}>
      <h1 style={{ textAlign: "center" }}>Repository Details</h1>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <RepoDetailsCard
            repo={{
              fullOwnerName: detail.owner.login,
              repoName: detail.name,
              noOfOpenIssues: detail.open_issues_count,
              defaultBranch: detail.default_branch,
              linkToProfile: detail.owner.html_url,
              linkToRepo: detail.html_url,
            }}
          />
        </>
      )}
    </div>
  );
};

export default DetailPage;
