import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import {createStore} from 'redux'
import reducers from './reducers'

ReactDom.render(<App />, document.querySelector("#root"));
