import {Routes, Route } from "react-router-dom";
import { PlatesMenu } from "../pages/PlatesMenu";
import { PlateDetail } from "../pages/PlateDetail";

export function RecipesRouter(){
    return(
        <Routes>
          <Route path="/" element={<PlatesMenu/>} />
          <Route path="/:id" element={<PlateDetail/>}/>
        </Routes>
    )
}