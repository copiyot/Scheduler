import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Calender from "./calender/Calender";
import TaskCreate from "./tasks/taskcreate/TaskCreate";
import TaskDelete from "./tasks/taskdelete/TaskDelete";
import TaskEdit from "./tasks/taskedit/TaskEdit";
import TaskList from "./tasks/tasklist/TaskList";
import TaskShow from "./tasks/taskshow/TaskShow";
import TaskRepeat from "./tasks/taskRepeat/TaskRepeat";
import Header from "./header/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Calender} />
          <Route path="/tasks/new" exact component={TaskCreate} />
          <Route path="/tasks/delete" exact component={TaskDelete} />
          <Route path="/tasks/edit" exact component={TaskEdit} />
          <Route path="/tasks/list" exact component={TaskList} />
          <Route path="/tasks/show" exact component={TaskShow} />
          <Route path="/tasks/repeat" exact component={TaskRepeat} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
