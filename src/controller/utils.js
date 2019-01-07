
const addEntity = async (entity, req, res, next) => {
    try {
        let result = await entity.create(req.body);
        return res.status(201).send(result);
    } catch (error) {
        next(err);
    }
}

const deleteEntityById = async (entity, req, res, next) => {
    try {
        await entity.destroy({where: { id: req.params.id }})
        return res.sendStatus(204);
    } catch (err) {
        next(err);
    }
}