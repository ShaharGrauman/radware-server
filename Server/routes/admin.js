var express = require('express');
var router = express.Router();

const {admin} = require('../middleware/authAdmin');
var RolesController = require('../controllers/roles');
var auditController = require('../controllers/audit');

router.get('/roles',admin, async (req, res) => {
  try{
    console.log('ssssss')
    console.log('admin/roles headers', req.headers)
    const roles = await RolesController.getRoleWithPermissions();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

router.get('/audit', async (req, res) => {
  try{
    // ?event=edit&user_id=20&sortby=timeanddate&orderby=asc&startDate,endDate,startTime,EndTime
    const page = req.query.page || 1;
    const size = req.query.size || 20;
    const event = req.query.event || 'all';
    const user_id = req.query.user_id || 'all';
    const startDate = req.query.startdate || 'all';
    const endDate = req.query.enddate || 'all';
    const startTime = req.query.starttime || 'all';
    const endTime = req.query.endtime || 'all';
    let sortBy = req.query.sortby || 'time';
    const orderBy = req.query.orderby || 'desc';
    query = Object.assign({}, {
      size, 
      page,
        event,
        user_id,
        startDate,
        endDate,
        startTime,
        endTime,
        sortBy,
        orderBy
    });
    const auditReport = await auditController.getData(query);
    res.status(200).json(auditReport);
  }catch(error){
    res.status(500).json({msg: error.message});
  }
});


module.exports = router;
