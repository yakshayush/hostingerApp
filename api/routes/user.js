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
        await userController.deleteUserById(req.params.userId);
        return;
    } catch (error) {
        next(error);
    }
});

router.put('/:userId', async(req, res, next) => {
    try {
        userController.updateUserById(req.params.userId);
        return;
    } catch (error) {
        next(error);
    }
});

module.exports = router;