

exports.handler = async function(event, context, callback) {
    const eventBody = JSON.parse(event.body)

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Max-Age': 2592000,
        'Access-Control-Allow-Credentials': true,
    };

    callback(null, {
        statusCode: 200,
        body: JSON.stringify(eventBody),
        headers,
    });
}