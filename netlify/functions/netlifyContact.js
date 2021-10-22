const nodemailer = require('nodemailer');

const feddeTransporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: process.env.PRIVATE_MAIL,
        pass: process.env.PRIVATE_MAIL_PASSWORD,
    },
    secure: true
});



exports.handler = async function(event, context, callback) {
    const reqbody = JSON.parse(event.body)


    const PokouMailData = {
        from: `${reqbody.name} Via Poukou Web <${process.env.POKOU_MAIL}>`,
        to: process.env.POKOU_MAIL,
        replyTo: `${reqbody.name} <${reqbody.email}>`,
        subject: `Nouveau message !`,
        text: reqbody.message + " | Sent from: " + reqbody.name + reqbody.email + reqbody.phone,
        html: `<div>${reqbody.message}</div> <br/>
<br/>
<span>${reqbody.name}</span>
<br/>
<br/>
<span>_____</span><br/>
<span>Email: <span>${reqbody.email}</span></span> <br/>
<span>Téléphone: <span>${reqbody.phone ? reqbody.phone : "..."}</span></span>`
    }

   const email = await feddeTransporter.sendMail(PokouMailData)


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
        body: `${email.messageId}`,
        headers,
    });
}