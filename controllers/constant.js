const {signatures,attack,external_references} = require('../models');
const getconstants = async () => {
  console.log('attack Name values', attack.rawAttributes.name.values);
  console.log('status',signatures.rawAttributes.status.values);
  console.log('header',signatures.rawAttributes.scan_header.values);
 console.log('External Referance',external_references.rawAttributes.type.values);
return [];
}
module.exports = {
   getconstants 
}

  

  // var Model = sequelize.define('model', {
  //   states: {
  //     type: Sequelize.ENUM,
  //     values: ['in progress', 'in test', 'in QA', 'published', 'suspended', 'deleted']
  //   },
  //   headers: {
  //     type: Sequelize.ENUM,
  //     values: ['User-Agent', 'Referer', 'Content-Language', 'Range', 'Cookie', 'Origin',
  //       'Last-Modified', 'Keep-Alive', 'Content-Disposition', 'Content-Encoding',
  //       'Content-Length', 'Content-Location', 'Content-Type']
  //   },
  //   ExternalReference: {
  //     type: Sequelize.ENUM,
  //     values: ['in progress', 'in test', 'in QA', 'published', 'suspended', 'deleted']
  //   },
  // });
  // return Model.rawAttributes.states.values;
