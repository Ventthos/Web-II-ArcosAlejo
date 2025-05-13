import {Routes, Route } from "react-router-dom";
import { PlatesMenu } from "../pages/PlatesMenu";

export function RecipesRouter(){
    return(
        <Routes>
          <Route path="/" element={<PlatesMenu/>} />
        </Routes>
    )
}