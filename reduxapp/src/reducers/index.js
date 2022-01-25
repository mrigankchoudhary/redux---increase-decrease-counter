import changeTheNumber from "./updown";

import { combineReducers } from "redux";
// to combine more than one reducers here one

const reducers = combineReducers(
    {
    //   myNumber:changeTheNumber
        changeTheNumber
    }
);

export default reducers;