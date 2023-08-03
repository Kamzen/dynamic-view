import { Data, ISalesReport, DataSource } from "./Data";
import { ViewField, UserViews } from "./UserViews";

interface View {
  [field: string]: string | number;
}

// save and check for existing paths to optimise performace

// const saveAndGetPath = (path: string): string[] => {
//   const paths: Map<string, string[]> = new Map();

//   return paths.get(path)
// }

const configView = (data: ISalesReport, viewFields: ViewField[]): View[] => {
  let views: View[] = [];

  const saleReport: DataSource = data.data_source;

  viewFields.forEach((field, i) => {
    const currentView = {};
    const pathSegments = field.path.split(".");
    pathSegments.forEach((pathSegment, idx) => {
      if (saleReport.hasOwnProperty(pathSegment)) {
      }
    });
  });

  return views;
};

configView(Data, UserViews);
