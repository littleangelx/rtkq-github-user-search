import { format } from "date-fns";

import { useGetUserQuery } from "../api/apiSlice";
import iconLocation from "/assets/icon-location.svg";
import iconTwitter from "/assets/icon-twitter.svg";
import iconWebsite from "/assets/icon-website.svg";
import iconCompany from "/assets/icon-company.svg";

const MainSection = ({ searchUserName }) => {
  const { data, isSuccess, isFetching } = useGetUserQuery(searchUserName);

  if (isFetching) return <p>Loading...</p>;

  if (isSuccess)
    return (
      <div className="userMainSection">
        <div className="topContainer">
          <div className="userAvatar">
            <img src={data.avatar_url} className="avatar" />
          </div>
          <div className="userInfo">
            <div className="userInfoTopSection">
              <div className="userNameSection">
                <h3>{data.name}</h3>
                <p>@{data.login}</p>
              </div>
              <p className="userJoined">
                Joined {format(data.created_at, "dd MMM y")}
              </p>
            </div>
          </div>
        </div>
        <div className="bottomContainer">
          <p className="userBio">{data.bio ?? "This profile has no bio"}</p>

          <div className="stats">
            <div className="stat">
              <h4>Repos</h4>
              <h2>{data.public_repos}</h2>
            </div>
            <div className="stat">
              <h4>Followers</h4>
              <h2>{data.followers}</h2>
            </div>
            <div className="stat">
              <h4>Following</h4>
              <h2>{data.following}</h2>
            </div>
          </div>
          <div className="details">
            <div className="detail">
              <img src={iconLocation} />
              <p style={{ color: data.location ? "" : "#4b6a9b50" }}>
                {data.location ?? "Not Available"}
              </p>
            </div>
            <div className="detail">
              <img src={iconTwitter} style={{ height: "1rem" }} />
              <p style={{ color: data.twitter_userName ? "" : "#4b6a9b50" }}>
                {data.twitter_userName ?? "Not Available"}
              </p>
            </div>
            <div className="detail">
              <img src={iconWebsite} />
              <p style={{ color: data.blog ? "" : "#4b6a9b50" }}>
                {data.blog.length ? data.blog : "Not Available"}
              </p>
            </div>
            <div className="detail">
              <img src={iconCompany} />
              <p style={{ color: data.company ? "" : "#4b6a9b50" }}>
                {data.company ?? "Not Available"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MainSection;
