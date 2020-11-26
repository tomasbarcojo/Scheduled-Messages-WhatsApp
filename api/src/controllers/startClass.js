require('dotenv').config()
const GoogleMeet = require('../google-meet')
googleMeetFunction = new GoogleMeet(process.env.EMAIL, process.env.PASSWORD, true, true)

module.exports = {
    async startClass (req, res) {
        const url = req.body
        try {
            await googleMeetFunction.schedule(url)
        } catch (err) {
            console.log(err)
            res.send('Something went wrong when starting class')
        }
    }
}