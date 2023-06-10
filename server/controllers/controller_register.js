const { createErrorResponse } = require("../../helpers/responseHelpher");
const commonFunctions = require("../../utils/commonFunctions");
const registerService = require("../../services/register_services");
const { ERROR_TYPES, MESSAGES } = require("../../utils/constants");

module.exports = {
    register_user: async (req, res)=> {
        
        try {

            const { name, email, password, phone} = req.body;
            
            if (!email || !password || !name || !phone) throw new Error("Missing required parameters");
            
            let newRegisterData = {
                name, email, phone
            }

            if (password) newRegisterData.password = commonFunctions.hashPassword(password)
            
            const isUserExists = await registerService.findOne({ email });
            if (isUserExists) throw createErrorResponse(MESSAGES.USER_ALREADY_EXISTS, ERROR_TYPES.BAD_REQUEST);
            let createdAccount = await registerService.create(newRegisterData);
            
            res.status(200).json({
                msg: "Successfully registered",
                createdAccount
            });
        } catch (err) {
            res.status(500).send({
                errMsg: err.message
            });
        }
    },
     
    login_user: async (req, res) => {
        try {
            const {email, password} = req.body
            if (!email || !password) throw new Error("Missing required parameters");

            const user = await registerService.findOne({ email});
            
            if (!user) throw createErrorResponse(MESSAGES.NO_USER_FOUND, ERROR_TYPES.BAD_REQUEST)

            if (!user.password || !commonFunctions.compareHash(password, user.password || '')) throw createErrorResponse(MESSAGES.INVALID_CREDENTIALS, ERROR_TYPES.BAD_REQUEST);
            const token = await commonFunctions.encryptJwt({ userId: user._id, date: Date.now()});
            res.status(200).json({
                data: user,
                token
            });
            
        } catch(err) {
            res.status(400).send({errMgs: err.message});
        }
    },
}