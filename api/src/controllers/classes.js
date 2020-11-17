const { Classes } = require('../db.js')

module.exports = {
    async getClasses(req, res) {
        try {
            const classes = await User.findAll()
            if (classes && classes.length === 0) {
                res.status(404).send({ message: 'No classes' })
            } else {
                res.status(200).send(classes)
            }
        } catch (err) {
            console.log(err)
            res.status(400).send({ message: 'Failed to get classes' })
        }
    },

    async createClass(req, res) {
        try {

        } catch {

        }
    },

    async modifyClass(req, res) {
        try {

        } catch {

        }
    },

    async deleteClass(req, res) {
        try {

        } catch {

        }
    },
}