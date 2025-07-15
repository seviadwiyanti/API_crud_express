const badRequest = (res, data, message) => {
    return res.status(400).json({
        isSuccess: false,
        status: "error",
        message: message ? message : "Bad Request",
        data: data,
        statusCode: 400
    });
};

const serverError = (res, data, message) => {
    return res.status(500).json({
        isSuccess: false,
        status: "error",
        message: message ? message : "Internal Server Error",
        data: data,
        statusCode: 500
    });
};

const dataCreated = (res, data, message) => {
    return res.status(201).json({
        isSuccess: true,
        status: "success",
        code: 201,
        message: message ? message : "Data added successfully",
        data: data
    });
};

const forbiddenError = (res, data, message) => {
    return res.status(403).json({
        isSuccess: false,
        status: "error",
        message: message ? message : "Request requires authorization, please provide a token",
        data: data,
        statusCode: 403
    });
};

const errorToken = (res, data, message) => {
    return res.status(401).json({
        isSuccess: false,
        status: "error",
        message: message ? message : "Token consistency error",
        data: data,
        statusCode: 401
    });
};

const apiOk = (res, data, message) => {
    return res.status(200).json({
        isSuccess: true,
        status: "success",
        message: message ? message : "Request successful",
        data: data,
        statusCode: 200
    });
};

const apiError = (res, data, message, code) => {
    return res.status(code).json({
        isSuccess: false,
        status: "error",
        message: message ? message : "An error occurred",
        data: data,
        statusCode: code
    });
};

const methodNotAllowed = (res, data, message) => {
    return res.status(405).json({
        isSuccess: false,
        status: "error",
        message: message ? message : "Method Not Allowed",
        data: data,
        statusCode: 405
    });
};

// Exporting all
module.exports = {
    badRequest,
    serverError,
    dataCreated,
    forbiddenError,
    errorToken,
    apiOk,
    apiError,
    methodNotAllowed
};
