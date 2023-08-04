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
        path: "data_source.sales.products[1].product_name",
        data_type: "string"
    },
    {
        field_name: "total price",
        path: "data_source.sales.accounts.total_value",
        data_type: "number"
    },
    {
        field_name: "All products",
        path: "data_source.sales.*.product_name",
        data_type: "number"
    }
];
exports.UserViews = UserViews;
