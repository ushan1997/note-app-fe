import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLogin from "./components/userLogin";
import ViewNote from "./components/viewNote";
import ClickedNote from "./components/clickedNote";
import AddComment from "./components/addComments";
import CreateNote from "./components/createNote";
import ViewComments from "./components/viewComments";

function AppRoutes() {
  return (
    <Router>
      <Fragment>
        <div>
          <Routes>
          <Route exact path="/" element={<UserLogin />} />
          <Route exact path="/viewNote" element={<ViewNote />} />
          <Route exact path="/clickedNote" element={<><ClickedNote /><ViewComments/></>} />
          <Route exact path="/addComment" element={<AddComment />} />
          <Route exact path="/createNote" element={<CreateNote />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}
export default AppRoutes;
