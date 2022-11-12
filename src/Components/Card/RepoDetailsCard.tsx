import Card from "@mui/material/Card";
import { RiGitRepositoryFill } from "react-icons/ri";
import { GoIssueOpened } from "react-icons/go";
import { BiGitBranch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type Props = {
  repo: {
    fullOwnerName: string;
    repoName: string;
    noOfOpenIssues: number;
    defaultBranch: string;
    linkToProfile: string;
    linkToRepo: string;
  };
};
const RepoDetailsCard: React.FC<Props> = ({ repo }) => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: "40%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "1em",
          marginBottom: "1em",
        }}
      >
        <CardContent>
          <a
            href={repo.linkToProfile}
            style={{ textDecoration: "None" }}
            target="_blank"
            rel="noopener"
          >
            <Typography variant="h5" component="div">
              <AiOutlineUser /> {repo.fullOwnerName}
            </Typography>
          </a>
          <a
            href={repo.linkToRepo}
            style={{ textDecoration: "None" }}
            target="_blank"
            rel="noopener"
          >
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <RiGitRepositoryFill /> {repo.repoName}
            </Typography>
          </a>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <GoIssueOpened /> {repo.noOfOpenIssues}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <BiGitBranch /> {repo.defaultBranch}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default RepoDetailsCard;
