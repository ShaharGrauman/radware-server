const { signatures, attack, historyUsersActions, externalReferences } = require('../models');

const getconstants = async () => {
  try {
    
    const obj = {
      attackName: attack.rawAttributes.name.values,
      externalReferences :externalReferences.rawAttributes.type.values,
      header : signatures.rawAttributes.scan_header.values,
      actionName: historyUsersActions.rawAttributes.action_name.values,
      status:signatures.rawAttributes.status.values
    }
  console.log(obj);
    return obj;
  }
  catch (error) {
    throw new Error(`Cant get constant: ${error.message}`);
  }
}

module.exports = {
  getconstants
}  
