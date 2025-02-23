module.exports = {
    success: (status, data) => {
        return {
            status: status,
            success: true,
            data: data
        }
    },
    fail: (status, message) => {
        return {
            status: status,
            success: false,
            message: message,
            data: null
        }
    }
}

