const User = require('../model/database').models.User;

const _delete = async (req, res, next) => {
    try {
        await User.destroy({
            where: { id: req.params.id },
        });
        return res.sendStatus(200);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    _delete,
}