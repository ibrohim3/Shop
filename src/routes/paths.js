
const ROOTS_CLIENT = "/:lang";
const ROOTS_ADMIN = "/:lang/admin";

// ✅ Client paths
export const PATH_CLIENT = {
    root: ROOTS_CLIENT,                   // /:lang
    home: `${ROOTS_CLIENT}`,              // /:lang
    about: `${ROOTS_CLIENT}/about-us`,    // /:lang/about-us
    contact: `${ROOTS_CLIENT}/contact`,   // /:lang/contact
    login: `${ROOTS_CLIENT}/login`,       // /:lang/login
    register: `${ROOTS_CLIENT}/register`, // /:lang/register
};

// ✅ Admin paths
export const PATH_ADMIN = {
    root: ROOTS_ADMIN,                        // /:lang/admin
    dashboard: `${ROOTS_ADMIN}/dashboard`,    // /:lang/admin/dashboard
    products: `${ROOTS_ADMIN}/products`,      // /:lang/admin/products
    income: `${ROOTS_ADMIN}/income`,          // /:lang/admin/income
    sales: `${ROOTS_ADMIN}/sales`,            // /:lang/admin/sales
    debts: `${ROOTS_ADMIN}/debts`,            // /:lang/admin/debts
    statistics: `${ROOTS_ADMIN}/statistics`,  // /:lang/admin/statistics
    users: `${ROOTS_ADMIN}/users`,            // /:lang/admin/users
};
