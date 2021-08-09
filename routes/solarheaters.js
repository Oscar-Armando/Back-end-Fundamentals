/** Solar-heaters routes **/

const router = require("express").Router();

const {
    getSolarheaters,
    createSolarheater,
    updateSolarheater,
    deleteSolarheater
} = require("../controllers/solarheaters");

router.get("/", getSolarheaters);
router.post("/", createSolarheater);
router.put("/:id", updateSolarheater);
router.delete("/:id", deleteSolarheater);

module.exports = router;