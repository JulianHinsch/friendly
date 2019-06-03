const getOptions = (req) => {
    const options = {
        where: {},
        include: [],
    };
    if(req.params.id) {
        options.where.id = req.params.id; //this is the only param we accept
    }
    if(req.query.limit) {
        options.limit = req.query.limit ? req.query.limit : 100;
    }
    if(req.query.include === 'true') {
        options.include.push = { all: true }
    }
    return options;
}

const _create = async (model, req, res, next) => {
    try {
        let result = await model.create(req.body, options);
        return res.status(201).send(result);
    } catch (err) {
        next(err);
    }
}

const _read = async (model, req, res, next) => {
    try {
        let result = await model.findAll(options);
        return res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

const _update = async (model, req, res, next) => {
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

const _delete = async (model, req, res, next) => {
    try {
        await model.destroy({ where: { id: req.params.id } }, options)
        return res.sendStatus(200);
    } catch (err) {
        next(err);
    }
}

module.exports = (model) => {
    return ( req, res, next ) => {
        switch(req.method) {
            case 'GET':
                return _read(model, req, res, next);
            case 'PUT':
                return _create(model, req, res, next);
            case 'POST':
                return _create(model, req, res, next);
            case 'DELETE':
                return _delete(model, req, res, next);
            case 'PATCH':
                return _update(model, req, res, next);
            default:
                break;
        }
    } 
}