

exports.handler = function (event, context) {


 return {
     statusCode: 200,
     body: `${event.body ? event.body : ""}`
 }
}