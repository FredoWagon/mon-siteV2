

exports.handler = function (req, callback) {

    require('dotenv').config()
    let nodemailer = require('nodemailer')

    const pokouTransporter = nodemailer.createTransport({
        port: 587,
        host: "mail.infomaniak.com",
        auth: {
            user: process.env.POKOU_MAIL,
            pass: process.env.POKOU_MAIL_PASSWORD,
        },
    });
    const feddeTransporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.PRIVATE_MAIL,
            pass: process.env.PRIVATE_MAIL_PASSWORD,
        },
        secure: true
    });

    const PokouMailData = {
        from: `${req.body.name} Via Poukou Web <${process.env.POKOU_MAIL}>`,
        to: process.env.POKOU_MAIL,
        replyTo: `${req.body.name} <${req.body.email}>`,
        subject: `Nouveau message !`,
        text: req.body.message + " | Sent from: " + req.body.name + req.body.email + req.body.phone,
        html: `<div>${req.body.message}</div> <br/>
<br/>
<span>${req.body.name}</span>
<br/>
<br/>
<span>_____</span><br/>
<span>Email: <span>${req.body.email}</span></span> <br/>
<span>Téléphone: <span>${req.body.phone ? req.body.phone : "..."}</span></span>`
    }


    feddeTransporter.sendMail(PokouMailData, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
    })

    /*
   const feddeMailData = {
       from: `${req.body.name} Via Poukou Web <${process.env.POKOU_MAIL}>`,
       to: process.env.PRIVATE_MAIL,
       subject: `Message From ${req.body.name}`,
       text: req.body.message + " | Sent from: " + req.body.email + req.body.phone,
       html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email} phone : ${req.body.phone}</p>`
   }

    */

    /*
    pokouTransporter.sendMail(PokouMailData, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
    })

    pokouTransporter.sendMail(feddeMailData, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
    })


     */



    callback('success')

}