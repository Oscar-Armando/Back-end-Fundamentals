/** Solar-heaters routes **/

const router = require("express").Router();

const {
    getSolarheaters,
    createSolarheater,
    updateSolarheater
} = require("../controllers/solarheaters");

router.get("/", getSolarheaters);
router.post("/", createSolarheater);
router.put("/:id", updateSolarheater);

module.exports = router;