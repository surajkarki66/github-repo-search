import { Link } from "react-router-dom";
import moment from "moment";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AiFillStar, AiFillEye, AiOutlineUser } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";

type Props = {
  repo: {
    id: string;
    repoName: string;
    author: string;
    noOfStars: number;
    noOfWatchers: number;
    noOfForks: number;
    shortDesc: string;
    updatedDate: Date;
  };
};
const RepoCard: React.FC<Props> = ({ repo }) => {
  return (
    <div>
      <Card
        key={repo.id}
        sx={{
          maxWidth: "97%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "1em",
          marginBottom: "1em",
        }}
      >
        <CardContent>
          <Link
            to={`/${repo.author}/${repo.repoName}`}
            style={{ textDecoration: "None" }}
          >
            <Typography variant="h5" component="div">
              {repo.repoName}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <AiOutlineUser /> {repo.author}
            </Typography>
          </Link>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <AiFillStar /> {repo.noOfStars}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <BiGitRepoForked /> {repo.noOfForks}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <AiFillEye /> {repo.noOfWatchers}
          </Typography>

          <Typography variant="body2" noWrap>
            {repo.shortDesc}
          </Typography>
          <Typography sx={{ mt: 2 }} color="text.secondary">
            {moment(repo.updatedDate).format("MMMM Do YYYY, h:mm:ss a")}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default RepoCard;
