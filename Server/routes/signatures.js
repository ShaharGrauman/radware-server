var express = require('express');
var SignatureController = require('../controllers/signature');
const { signatures, files } = require('../models');

var router = express.Router();


/* GET home page. */
router.get('/', async (req, res, next) => {
    try {
        const Signatures = await SignatureController.findAll();
        res.json(Signatures);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});


/* GET signatures listing. */
router.get('/researcher', async (req, res, next) => {
    try{
      // ?page=1&size=20&sortby=default=createTime/pattern/description &orderby=asc&status=all
      const page = req.query.page || 1;
      const size = req.query.size || 20;
      let sortBy = req.query.sortby || 'creation_time';
      const orderBy = req.query.orderby || 'asc';
      const status = req.query.status || 'all';
      // *status => all / inProgress / inTest / inQa / published / suspended
      query = Object.assign({}, {
          page,
          size,
          sortBy,
          orderBy,
          status
      });
     
      const signatures = await SignatureController.loadSignatures(query);
      res.status(200).json(signatures);
    }catch(error){
      res.status(500).json({msg: error.message});
    }
  });

  //export signatures
  router.get('/export', async (req, res, next) => {
    try{
      // ?page=1&size=20&sortby=default=createTime/pattern/description &orderby=asc&exportto={“Git ” , “Testing” , “ QA” }
      const page = req.query.page || 1;
      const size = req.query.size || 20;
      let sortBy = req.query.sortby || 'creation_time';
      const orderBy = req.query.orderby || 'asc';
      const exportTo = req.query.exportto;
      // *status => all / inProgress / inTest / inQa / published / suspended
      query = Object.assign({}, {
          page,
          size,
          sortBy,
          orderBy,
          exportTo
      });
     
      const signatures = await SignatureController.loadSignaturesToExport(query);
      res.status(200).json(signatures);
    }catch(error){
      res.status(500).json({msg: error.message});
    }
  });

router.get('/:id', async (req, res, next) => {
    try {
        const Signatures = await SignatureController.findById(req.params.id);
        res.json(Signatures);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});


router.post('/', async (req, res, next) => {
    try {
        const result = await SignatureController.create(req.body);
        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.message });
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const result = await SignatureController.update(req.body, req.params.id);
        res.json({ result, id: req.params.id });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
})


router.delete('/:id', async (req, res, next) => {
    try {
        const result = await SignatureController.Delete(req.params.id);
        res.json({ result, id: req.params.id });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
})



module.exports = router;