const {signatures,attack,historyUsersActions,externalReferences} = require('../models');

const getconstants = async () => {
  try {
      const constant = [{"attack Name values":attack.rawAttributes.name.values},
                       {"External Referance":externalReferences.rawAttributes.type.values},
                       {"action_name":historyUsersActions.rawAttributes.action_name.values},
                       {"header":signatures.rawAttributes.scan_header.values},
                       {"status":signatures.rawAttributes.status.values}];
    
  
    return constant;
  } 
  catch (error) {
    throw new Error(`Cant get constant: ${error.message}`);
}}

module.exports = {
  getconstants 
}  
