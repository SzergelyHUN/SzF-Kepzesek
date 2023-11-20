const express = require("express");
const {
    getTraining,
    getTrainings,
    createTraining,
    updateTraining,
    deleteTraining,
} = require("../controllers/training");

const router = express.Router();
router.route("/").get(getTrainings).post(createTraining);
router.route("/:id").get(getTraining).put(updateTraining).delete(deleteTraining);

module.exports = router;