const jwt = require('jsonwebtoken');
const {Token} = require('../models/models');

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});
        return {
            accessToken,
            refreshToken
        };
    }

    validateAccessToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        } catch (e) {
            return null;
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({where: {userId}});
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        return await Token.create({userId: userId, refreshToken});
    }

    async removeToken(refreshToken) {
        const tokenData = await Token.findOne({where: {refreshToken}});
        await tokenData.destroy();
        return tokenData;
    }

    async findToken(refreshToken) {
        return await Token.findOne({where: {refreshToken}});
    }
}

module.exports = new TokenService();