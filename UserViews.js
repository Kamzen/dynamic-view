"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserViews = void 0;
const UserViews = [
    // {
    //   field_name: "date",
    //   path: "sales.date",
    //   data_type: "string"
    // },
    {
        field_name: "product",
        path: "sales.products[2].product_name",
        data_type: "string"
    }
    // {
    //   field_name: "total price",
    //   path: "sales.accounts.total_value",
    //   data_type: "number"
    // },
    // {
    //   field_name: "All products",
    //   path: "sales.*.product_name",
    //   data_type: "number"
    // }
];
exports.UserViews = UserViews;
