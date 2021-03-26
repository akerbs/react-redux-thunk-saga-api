import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestData, filterByAuthor } from "../redux/actions";
import { Alert } from "./Alert";
import Post from "./Post";
import { Loader } from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const filteredPosts = useSelector((state) => state.posts.filteredPosts);
  const users = useSelector((state) => state.posts.users);
  const loading = useSelector((state) => state.app.loading);
  const alert = useSelector((state) => state.app.alert);

  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    dispatch(requestData());
  }, []);

  const changeInputHandler = (event) => {
    setSearchName(event.target.value);
  };

  useEffect(() => {
    dispatch(filterByAuthor(searchName));
  }, [searchName]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {alert && <Alert text={alert} />}
      {!!posts.length && (
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>

          <input
            type="text"
            className="form-control"
            placeholder="Filter by author..."
            name="authorName"
            id="authorName"
            value={searchName}
            onChange={changeInputHandler}
          />
        </div>
      )}

      <div className="card-columns">
        {(searchName ? filteredPosts : posts).map((post) => (
          <Post
            post={post}
            authorName={users.find((user) => user.id === post.userId).name}
            key={post.id}
          />
        ))}
      </div>
    </>
  );
};

export default FetchedPosts;
