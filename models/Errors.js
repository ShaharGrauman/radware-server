
class RadwareError extends Error {
    constructor(message){
        super(message);
    }
    createJSON(){
        return {
            error: this.message
        };
    }
}

module.exports = {
    RadwareError
};