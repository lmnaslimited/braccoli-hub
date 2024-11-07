import React, { Component } from "react";
import { UIState } from "../typeScript/type";
import Navbar from "../components/navbar";

export abstract class UILayout implements UIState {
  
    color = "red"
    printLog(){
        return <Navbar />
    }
  
}
