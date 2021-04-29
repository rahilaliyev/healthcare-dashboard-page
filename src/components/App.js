import React, { useEffect } from "react";
import "../styles/App.scss";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { addData } from "../redux/actions/actions";
import { useDispatch } from "react-redux";
import axios from "axios";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://git.heroku.com/desolate-hamlet-85078.git/getData")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    dispatch(addData());
  });
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
