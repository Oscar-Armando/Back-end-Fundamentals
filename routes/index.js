/** All routes **/
const router = require("express").Router();
const usersRoutes = require("./users");

router.use("/users", usersRoutes);


router.use("/", function(request, response) {
    return response.send("API ecommerce");
});

module.exports = router;