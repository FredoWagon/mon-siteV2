

exports.handler = async function(event, context) {
    const body = event.body
    return {
        statusCode: 200,
        body: JSON.stringify(body)
    };
}