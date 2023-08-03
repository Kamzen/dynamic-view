interface IProduct {
  date: string;
  product: string;
  product_name: string;
  quantity: number;
  total_price: number;
}

interface ISales {
  products: IProduct[];
}

interface DataSource {
  sales: ISales;
  total_value: number;
}

interface ISalesReport {
  view_name: string;
  data_source: DataSource;
}

const Data: ISalesReport = {
  view_name: "Sales_Report_1",
  data_source: {
    sales: {
      products: [
        {
          date: "2023-01-05",
          product: "Widget A",
          product_name: "Product A",
          quantity: 100,
          total_price: 500
        },
        {
          date: "2023-01-06",
          product: "Widget B",
          product_name: "Product B",
          quantity: 150,
          total_price: 750
        }
      ]
    },
    total_value: 41515
  }
};

export { Data, ISalesReport, DataSource };
