const Customer = require("../modules/Customer");
const mongoose = require("mongoose");

/**
 * GET /
 * Homepage
 */

exports.homepage = async (req, res) => {
  const messages = await req.flash("info");

  const locals = {
    title: "NodeJs",
    description: "NodeJs management system",
  };

  res.render("index", { locals, messages });
};

/**
 * GET /
 * New Customer Form
 */

exports.addCustomer = async (req, res) => {
  const locals = {
    title: "Add New Customer",
    description: "NodeJs management system",
  };

  res.render("customer/add", locals);
};

/**
 * POST /
 * Create New Customer
 */

exports.postCustomer = async (req, res) => {
  console.log(req.body);

  const newCustomer = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    details: req.body.details,
    phone: req.body.phone,
    email: req.body.email,
  });

  try {
    await Customer.create(newCustomer);
    await req.flash("info", "New customer have been added");
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
