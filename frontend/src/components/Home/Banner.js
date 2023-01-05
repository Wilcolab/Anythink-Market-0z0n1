import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = ({ onSearch }) => {
  const [title, setTitle] = React.useState("")

  React.useEffect(() => {
    if (title.length >= 3) {
      onSearch(
        title,
        (title, page) => agent.Items.search(title, page),
        agent.Items.search(title)
      );
    } else {
      onSearch(
        "",
        agent.Items.all,
        agent.Items.all()
      );
    }
  }, [title])

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get </span>
          <input id="search-box" size="30" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="What is it that you truly desire?" />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
