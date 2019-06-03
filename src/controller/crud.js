const _create = async (model, req, res, next, options) => {
    try {
        let result = await model.create(req.body, options);
        return res.status(201).send(result);
    } catch (err) {
        next(err);
    }
}

const _read = async (model, req, res, next, options) => {
    try {
        let result = await model.findAll(options);
        return res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

const _update = async (model, req, res, next, options) => {
    try {
        let result = await model.update(req.body, {
            where: { id: req.params.id },
            ...options,
            returning: true,
            plain: true,
        });
        return res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

const _delete = async (model, req, res, next, options) => {
    try {
        await model.destroy({ where: { id: req.params.id } }, options)
        return res.sendStatus(200);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    _create,
    _read,
    _update,
    _delete,
}