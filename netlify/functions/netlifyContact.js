

exports.handler = async function(event, context) {
    const body = JSON.parse(event.body)
    return {
        statusCode: 200,
        body: JSON.stringify(body)
    };
}