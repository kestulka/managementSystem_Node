/**
 * GET /
 * Homepage
 */

exports.homepage = async (req, res) => {
  const locals = {
    title: "NodeJs",
    description: "NodeJs management system",
  };

  res.render("index", locals);
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

  const locals = {
    title: "New Customer added",
    description: "NodeJs management system",
  };

  res.render("customer/add", locals);
};
