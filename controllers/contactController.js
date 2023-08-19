const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@desc get
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler (async function(req,res){
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc post
//@route POST /api/contacts
//@access public
const createContact = asyncHandler (async function(req,res){
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        throw new Error("All fields are mendatory");  
    }

    const newContact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(200).json(newContact);
});

//@desc get
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler (async function(req,res){
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error('Contact not found');
    }

    res.status(200).json(contact);
});

//@desc PATCH
//@route PATCH /api/contacts
//@access public
const updateContact = asyncHandler (async function(req,res){
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error('Contact not found');
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    res.status(200).json(updateContact);
});

//@desc delete
//@route DELETE /api/contacts
//@access public
const deleteContact = asyncHandler (async function(req,res){
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error('Contact not found');
    }

    res.status(200).json(contact);
});



module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};