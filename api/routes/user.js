const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get('/:userId', async(req, res, next) => {
    try {
        return await userController.findUserById(req, res, next);
    } catch (error) {
        next(error);
    }
});

router.delete('/:userId', async(req, res, next) => {
    try {
        return await userController.deleteUserById(req.params.userId);
    } catch (error) {
        next(error);
    }
});

router.put('/:userId', async(req, res, next) => {
    try {
    return await userController.updateUserById(req.params.userId);
    } catch (error) {
        next(error);
    }
});

module.exports = router;