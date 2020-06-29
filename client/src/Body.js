import React from 'react';
import Main from './Main';
import AddTask from './AddTask';
import EditTask from './EditTask';
import { Switch, Route } from "react-router-dom";

function Body(){
    return (
        <Switch>
            <Route path="/" component={Main} exact/>
            <Route path="/add" component={AddTask} />
            <Route path="/task/:id" component={EditTask} />
        </Switch>
    )
}

export default Body;