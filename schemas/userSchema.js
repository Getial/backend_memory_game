const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const email = Joi.string().email();
const avatar = Joi.string();
// const isBlock = Joi.boolean();

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  avatar: avatar,
});

const updateUserSchema = Joi.object({
  name: name,
  email: email,
  avatar: avatar,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
