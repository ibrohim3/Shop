
const ROOTS_CLIENT = "/:lang";
const ROOTS_ADMIN = "/:lang/admin";

// ✅ Client paths
export const PATH_CLIENT = {
    root: ROOTS_CLIENT,
    home: `${ROOTS_CLIENT}`,
    about: `${ROOTS_CLIENT}/about-us`,
    contact: `${ROOTS_CLIENT}/contact`,
    login: `${ROOTS_CLIENT}/login`,
    register: `${ROOTS_CLIENT}/register`,
    delivery: `${ROOTS_CLIENT}/delivery`,
    moneyBack: `${ROOTS_CLIENT}/money-back`,
    comments: `${ROOTS_CLIENT}/comments`,
};

// ✅ Admin paths
export const PATH_ADMIN = {
    root: ROOTS_ADMIN,
    dashboard: `${ROOTS_ADMIN}/dashboard`,
    products: `${ROOTS_ADMIN}/products`,
    income: `${ROOTS_ADMIN}/income`,
    sales: `${ROOTS_ADMIN}/sales`,
    debts: `${ROOTS_ADMIN}/debts`,
    statistics: `${ROOTS_ADMIN}/statistics`,
    users: `${ROOTS_ADMIN}/users`,
};
