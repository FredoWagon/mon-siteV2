

exports.handler = function (event, context) {


 return {
     statusCode: 200,
     body: `${event.body ? JSON.stringify(event.body) : ""}`
 }
}