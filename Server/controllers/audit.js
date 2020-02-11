
const { historyUsersActions } = require('../models');
const { Op } = require("sequelize");


const getData = async (query) => {
    // event,user_id,startDate,endDate,startTime,endTime,sortBy,orderBy

    let startDate = '1970-01-01', endDate = new Date();
    let startTime = '00:00:00', endTime = '23:59:59'
    if (query.startDate != 'all') {
        startDate = query.startDate;
    }
    if (query.endDate != 'all') {
        endDate = query.endDate;
    }
    if (query.startTime != 'all') {
        startTime = query.startTime;
    }
    if (query.endTime != 'all') {
        endTime = query.endTime;
    }
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
        let user_id = query.user_id.split(',');
        Object.assign(where, {
            user_id: {
                [Op.in]: user_id
            }
        });
    }

    try {
        const history = await historyUsersActions.findAll({
            attributes: ['user_id', 'action_name', 'description', 'time', 'date'],
            where: where,
            order:
                [
                    ['date', query.orderBy],
                    ['time', query.orderBy]
                ],
            offset: (parseInt(query.page) - 1) * parseInt(query.size),
            limit: parseInt(query.size),
        });
        let hasNext = true, hasPrev = false;
        if(history.length%(query.size*query.page) != 0 || history.length ===0){
          hasNext = false;
        }
        if(query.page != 1){
            hasPrev = true;
        }
        return {history, hasNext, hasPrev};
    } catch (error) {
        throw new Error(`Can't get the audit: ${error.message}`);
    }
}

module.exports = {
    getData
}