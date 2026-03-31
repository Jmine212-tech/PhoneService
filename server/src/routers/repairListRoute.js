import express from "express"
const repairListRoute = express.Router()

// {C_repairList, R_repairList, U_RepairList, D_RepairList}
import {C_repairList, R_repairList, U_RepairList, D_RepairList,} from "../Controllers/repairListController.js"

repairListRoute.post("/create", C_repairList )
repairListRoute.get("/", R_repairList )
repairListRoute.put("/update/:id", U_RepairList )
repairListRoute.delete("/delete/:id", D_RepairList )

export default repairListRoute;