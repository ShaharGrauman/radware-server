const {attack} = require('../models');

const findAll = async () => {
    try{
        const attacks = await attack.findAll();
        return attacks;
    }catch(error){
        throw new Error(`Cant get attacks: ${error.message}`);
    }
}

const create = async (data) =>{
    console.log(data);
    try{
        const attacks = await attack.create({
            id:data.id,
            name:data.name
        });
        return attacks;
    }catch(error){
        throw new Error(`Cant create attacks: ${error.message}`);
    }
}

module.exports = {
    findAll,
    create
};