const { Classes } = require('../db.js')

module.exports = {
    async getClasses(req, res) {
        const { userId } = req.params
        try {
            const classes = await Classes.findAll({
                where: {
                    userId: userId
                }
            })
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
        const { description, url, start, userId } = req.body
        if (!description || !url || !start) {
            res.status(400).send({message: "All data are required"})
        }
        try {
            const classData = { description, url, start, end, userId }
            const newClass = await Classes.create(classData)
            res.status(201).send({newClass, status: 201})
        } catch (err) {
            console.log(err)
            res.status(400).send({ message: 'Failed to create class' })
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