const shortid = require('shortid')
const UrlModel = require('../models/url.model')
const date = new Date()
async function Genrateaurl(req, res) {
    const { url } = req.body
    if (!url) {
        return res.status(400).send({ msg: "Url required" })
    }
    const shortId = shortid()
    const newUrl = new UrlModel({ shortid: shortId, redirecturl: url, Visithistory: [] })
    await newUrl.save()
    return res.status(200).send({ msg: "short url created", newUrl })
}

async function Redirect(req, res) {
    try {
        const { shortID } = req.params
        const url = await UrlModel.findOneAndUpdate(
            { shortid: shortID },
            { $push: { Visithistory: { timestamp: date.toLocaleDateString() } } }
        )
       res.redirect(url.redirecturl)

    } catch (error) {
        res.status(209).send({ msg: error.message })
    }
}

module.exports = { Genrateaurl, Redirect }