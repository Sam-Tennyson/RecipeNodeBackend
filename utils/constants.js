const CONSTANTS = {};

CONSTANTS.SECURITY = {
  JWT_SIGN_KEY: "JUST",
  BCRYPT_SALT: 8,
  // STATIC_TOKEN_FOR_AUTHORIZATION: '58dde3df315587b279edc3f5eeb98145',
  EXPIRY_TIME: '1h',
}

CONSTANTS.ERROR_TYPES = {
  DATA_NOT_FOUND: 'DATA_NOT_FOUND',
  BAD_REQUEST: 'BAD_REQUEST',
  MONGO_EXCEPTION: 'MONGO_EXCEPTION',
  ALREADY_EXISTS: 'ALREADY_EXISTS',
  FORBIDDEN: 'FORBIDDEN',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  UNAUTHORIZED: 'UNAUTHORIZED',
  INVALID_MOVE: 'invalidMove',
};

CONSTANTS.LOGIN_TYPES = {
  METAMASK: 1,
};

CONSTANTS.EMAIL_TYPES = {
  SETUP_PASSWORD: 1,
  FORGOT_PASSWORD_EMAIL: 2,
  INVITE_USER: 3,
  OTP_VERIFICATION: 4,
  VERIFY_EMAIL: 5,
};

CONSTANTS.MESSAGES ={
  SOMETHING_WENT_WRONG: 'Something went wrong.',
  INTERNAL_SERVER_ERROR: 'Internal server error!',
  UNAUTHORIZED: 'Unauthorized access!',
  FORBIDDEN: 'Unrestricted access!',
  LOGGED_IN_SUCCESSFULLY: 'Logged in successfully.',
  INVALID_USER:"Invalid User Credentials",
  INVALID_CREDENTIALS:"Invalid Credentials",
  USER_ALREADY_EXISTS: 'An account with this email address already exists.',
  EMAIL_ALREADY_EXISTS: 'Email already exists.',
  INVALID_EMAIL: 'Invalid email address.',
  INVALID_PASSWORD: 'Invalid password.',
  SAME_CURRENT_AND_OLD_PASSWORD: 'Current password and old password cannot be same.',
  NOT_FOUND: 'Data not found.',
  COULD_NOT_UPDATE_PRICE: 'Could not update price.',
  INCONSISTENT_DATA: 'Lands, zones or co-ordinates count doesn\'t match',
  ACCOUNT_NOT_ACTIVE: 'This account is not active anymore',
  LOGGED_OUT_SUCCESSFULLY: 'Logged out successfully.',
  PROFILE_UPDATE_SUCCESSFULLY: 'Profile updated successfully.',
  NO_USER_FOUND_WITH_THIS_EMAIL: 'This email address is not associated with any existing account.',
  SUCCESS: 'Success.',
  NO_USER_FOUND: 'User not found.',
  USER_UPDATED_SUCCESSFULLY: 'User updated successfully.',
}

CONSTANTS.EMAIL_SUBJECTS = {
  RESET_PASSWORD_EMAIL: 'Reset Password',
  SETUP_PASSWORD: 'Setup Your Password',
  INVITE_USER: 'Invitation',
  VERIFY_OTP: 'Verify OTP',
  VERIFY_EMAIL: 'Verify email',
};

module.exports = CONSTANTS;