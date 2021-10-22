

exports.handler = async function(event, context) {
    const eventBody = JSON.parse(event.body)
    console.log(event)
    console.log(eventBody)
    return {
        statusCode: 200,
        body: JSON.stringify(eventBody)
    };
}