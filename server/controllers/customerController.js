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
    title: "Add New Customer - NodeJs",
    description: "NodeJs management system",
  };

  res.render("customer/add", locals);
};
