const express = require('express');
const router = express.Router();
const tokenValidation = require('../middleware/validateTokenHandler');

const {getContacts, createContact, getContact, updateContact, deleteContact} = require('../controllers/contactController')

router.use(tokenValidation);
router.route('/').get(getContacts).post(createContact);
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;