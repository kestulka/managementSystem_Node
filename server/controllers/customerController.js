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

  try {
    const customers = await Customer.find({}).limit(10);
    res.render("index", { locals, messages, customers });
  } catch (error) {
    console.log(error);
  }
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

/**
 * GET /
 * Customer Data
 */

exports.view = async (req, res) => {
  try {
    const customer = await Customer.findOne({ _id: req.params.id });

    const locals = {
      title: "View Customers Data",
      description: "NodeJs management system",
    };

    res.render("customer/view", {
      locals,
      customer,
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * GET /
 * Edit Customer Data
 */

exports.edit = async (req, res) => {
  try {
    const customer = await Customer.findOne({ _id: req.params.id });

    const locals = {
      title: "Edit Customers Data",
      description: "NodeJs management system",
    };

    res.render("customer/edit", {
      locals,
      customer,
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * GET /
 * Update Customer Data
 */

exports.editPost = async (req, res) => {
  try {
    await Customer.findByIdAndUpdate(req.params.id, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      details: req.body.details,
      updatedAt: Date.now(),
    });
    res.redirect(`/edit/${req.params.id}`);
  } catch (error) {
    console.log(error);
  }
};

/**
 * GET /
 * Delete Customer
 */

exports.deleteCustomer = async (req, res) => {
  try {
    await Customer.deleteOne({ _id: req.params.id });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

/**
 * GET /
 * Search Customer
 */

exports.searchCustomers = async (req, res) => {
  const locals = {
    title: "Search customer data",
    description: "NodeJs management system",
  };

  try {
    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");
    const customers = await Customer.find({
      $or: [
        { firstName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { lastName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
      ],
    });
    res.render("search", {
      customers,
      locals,
    });
  } catch (error) {
    console.log(error);
  }
};
