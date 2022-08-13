import React, { useEffect } from "react";
import "./../shared/Search.css";
import SearchIcon from "@mui/icons-material/Search";
import AOS from "aos";

function Search(props) {
  const { placeholder, data, searched, page } = props;
  const onChange = (e) => {
    if (page === "admin") {
      
      const newData = data.filter((data) => data.fullname.includes(e.target.value) || data.email.includes(e.target.value) );
      searched(newData);
    } else if (page === "posts") {
      const newData = data.filter((data) => data.title.includes(e.target.value));
      searched(newData);
    } else if (page === "category") {
      const newData = data.filter((data) => data.name.includes(e.target.value));
      searched(newData);
    } else if (page === "employee") {
      const newData = data.filter((data) => data.name.includes(e.target.value) || data.phone.includes(e.target.value) || data.email.includes(e.target.value));
        searched(newData);
    } else if (page === "teams") {
      const newData = data.filter((data) => data.name.includes(e.target.value));
      searched(newData);
    } else if (page === "projects") {
      const newData = data.filter((data) => data.name.includes(e.target.value));
      searched(newData);
    } else if (page === "message") {
      const newData = data.filter((data) => data.name.includes(e.target.value) || data.phone.includes(e.target.value) || data.email.includes(e.target.value)  );
      searched(newData);
    }


  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="main">
      <div className="form-group has-search">
        <span className="form-control-feedback">
          <SearchIcon />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Search;
