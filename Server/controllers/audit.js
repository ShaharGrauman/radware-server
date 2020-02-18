
const { historyUsersActions, users } = require('../models');
const { Op } = require("sequelize");


const getData = async (query) => {
    // event,user_id,startDate,endDate,startTime,endTime,sortBy,orderBy



    startDate = query.startDate;


    endDate = query.endDate;

    startTime = query.startTime;


    endTime = query.endTime;

    where = {
        'date': {
            [Op.between]: [startDate, endDate]
        },
        'time': {
            [Op.between]: [startTime, endTime]
        }
    };
    if (query.event != 'all') {
        let event = query.event.split(',');
        Object.assign(where, {
            action_name:
            {
                [Op.in]: event
            }
        });
    }

    if (query.user_id != 'all') {
        let users_id = query.user_id.split(','), id;
        Object.assign(where, {
            user_id: {
                [Op.in]: users_id
            }
        });
    }

    try {
        const history = await historyUsersActions.findAll({
            attributes: ['action_name', 'description', 'time', 'date'],
            include: [{
                model: users,
                attributes: ['username'],
              }],
            where: where,
            order:
                [
                    ['date', query.orderBy],
                    ['time', query.orderBy]
                ],
            offset: (parseInt(query.page) - 1) * parseInt(query.size),
            limit: parseInt(query.size),
        });
        history.map(action => {
            Object.assign(action, { user: action.user.username });
            return action;
        //    return {...action, user: action.user.username};
        });
        history.map((action) => Object.assign(action, { user: action.user.username }));
        
        let hasNext = true, hasPrev = false;
        if (history.length % (query.size * query.page) != 0 || history.length === 0) {
            hasNext = false;
        }
        if (query.page != 1) {
            hasPrev = true;
        }
        return { history, hasNext, hasPrev };
    } catch (error) {
        throw new Error(`Can't get the audit: ${error.message}`);
    }
}

module.exports = {
    getData
}