
const { historyUsersActions, users } = require('../models');
const { Op } = require("sequelize");


const getData = async (query, userID) => {
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
    whereInUsers ={};
    if (query.event != 'all') {
        let event = query.event.split(',');
        Object.assign(where, {
            action_name:
            {
                [Op.in]: event
            }
        });
    }
    let users_names;
    if (query.users_names != 'all') {
        users_names = query.users_names.split(',');
        Object.assign(whereInUsers, {
            username: {
                [Op.in]: users_names
            }
        });
    }
    try {
        let history = await historyUsersActions.findAll({
            attributes: ['action_name', 'description', 'time', 'date'],
            include: [{
                model: users,
                attributes:['username'], 
                where: whereInUsers,
                
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
        
        let hasNext = true, hasPrev = false;
        if ((query.size * query.page) % history.length != 0 || history.length === 0) {
            hasNext = false;
        }
        if (query.page != 1) {
            hasPrev = true;
        }
        if(query.page ==1){

            historyUsersActions.create({
                userId, action_name: "search",
                description: `View audit`,
                time: new Date().toLocaleTimeString('en-US', {
                    hour12: false,
                    hour: "numeric",
                    minute: "numeric"
                }), date: new Date()
            })
        }

        return { history, hasNext, hasPrev };
    } catch (error) {
        throw new Error(`Can't get the audit: ${error.message}`);
    }
}

module.exports = {
    getData
}