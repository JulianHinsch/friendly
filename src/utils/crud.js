const genericCreate = async (model, options, req, res, next) => {
    try {
        let result = await model.create(req.body, options);
        return res.status(201).send(result);
    } catch (err) {
        next(err);
    }
}

const genericRead = async (model,  options, req, res, next) => {
    try {
        let result = await model.findAll(options);
        return res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

const genericUpdate = async (model,  options, req, res, next) => {
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

const genericDelete = async (model, req, res, next) => {
    try {
        await model.destroy({
            where: { id: req.params.id },
        }, {
            returning: true,
            plain: true,
            ...options
        })
        return res.sendStatus(200);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    genericCreate,
    genericRead,
    genericUpdate,
    genericDelete
}