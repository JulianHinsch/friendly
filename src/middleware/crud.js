const getOptions = (req) => {
    const options = {
        where: {},
        include: [],
        limit: 100,
        offset: 0,
    };
    if(req.params.id) {
        options.where.id = req.params.id; //this is the only param accepted
    }
    if(req.query.limit) {
        options.limit = req.query.limit;
    }
    if(req.query.offset) {
        options.offset = req.query.offset;
    }
    if(req.query.includeAll === 'true') {
        options.include.push({ all: true });        
        //options.include.push({ all: true, nested: true });
    }
    console.log(options);
    return options;
}

const _create = async (model, req, res, next) => {
    try {
        const options = getOptions(req);
        let result = await model.create(req.body, options);
        return res.status(201).send(result);
    } catch (err) {
        next(err);
    }
}

const _read = async (model, req, res, next) => {
    try {
        const options = getOptions(req);        
        let result = await model.findAll(options);
        return res.status(200).send(result);
    } catch (err) {
        next(err);
    }
}

const _update = async (model, req, res, next) => {
    try {
        const options = getOptions(req);        
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
        const options = getOptions(req);        
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