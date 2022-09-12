const express = require('express');
const { AddActivity, ShowAllActivities, ShowActivityById, UpdateActivityById, DeleteActivityById } = require('../../controllers/Planner/AddActivity');
const AddRouter = express.Router();
const { protect } = require("../../middleware/authMiddleware");
AddRouter.post('/addActivity', protect, AddActivity);
AddRouter.get('/showAcitvity', protect, ShowAllActivities);
AddRouter.get('/showAcitvity/:id', protect, ShowActivityById);
AddRouter.post('/updateAcitvity', protect, UpdateActivityById);
AddRouter.post('/deleteAcitvity/:id', DeleteActivityById);
module.exports = AddRouter;