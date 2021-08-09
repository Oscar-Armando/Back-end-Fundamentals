/** All routes **/
const router = require("express").Router();
const usersRoutes = require("./users");
const solarheatersRoutes = require("./solarheaters");

router.use("/users", usersRoutes);
router.use("/solarheaters", solarheatersRoutes);


router.use("/", function(request, response) {
    return response.send("API ecommerce");
});

module.exports = router;