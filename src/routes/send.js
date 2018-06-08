var nexmo = require('../core/nexmo')


module.exports = (req, res) =>{
    const {sender, recipient, message} = req.body
    nexmo.message.sendSms(sender, recipient, message, (err, data)=>{
        if (err) {
            return res.status(400).send(err)
        } else {
            return res.status(400).send(data)
        }
    });

}