const ApiError = require('../error/ApiError')
const userService = require('../service/user-service')
const {validationResult} = require('express-validator')

class userController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validation error', errors.array()))
            }
            const {email, password} = req.body;
            const userData = await userService.registration(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL)
        } catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }

    async getUsers(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }

    // async check(req, res, next) {
    //     const {id} = req.query
    //     if(!id) {
    //         return next(ApiError.badRequest('ID not set'))
    //     }
    //     res.json(id)
    // }
}

module.exports = new userController()