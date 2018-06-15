import React, { Component } from 'react';
//import logo from './logo.svg';
import {Route} from "react-router-dom";
import Homepage from "./components/pages/Homepage";

const App =() =>
<div>
    <Route path="/" exact component={Homepage}/>
</div>

export default App;
