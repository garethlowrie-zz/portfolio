exports.handler = function(event, context, callback) {
    let error = null;
    let response = {
        statusCode: 200,
        body: "Hello, World"
    };
    callback(error, response);
}