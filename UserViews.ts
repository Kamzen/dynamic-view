interface ViewField {
  field_name: string;
  path: string;
  data_type: "string" | "number";
}

const UserViews: ViewField[] = [
  // {
  //   field_name: "date",
  //   path: "sales.date",
  //   data_type: "string"
  // },
  {
    field_name: "product",
    path: "sales.products[1].product_name",
    data_type: "string"
  },
  {
    field_name: "total price",
    path: "sales.accounts.total_value",
    data_type: "number"
  },
  {
    field_name: "All products",
    path: "sales.*.product_name",
    data_type: "number"
  }
];

export { UserViews, ViewField };
