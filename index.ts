import { Data, ISalesReport, DataSource } from "./Data";
import { UserViews, ViewField } from "./UserViews";

interface View {
  [field: string]: string | number;
}

const pathExist = <T extends DataSource>(data: T, path: string): any => {
  const viewPaths = path.split(".");
  let currData: any = data;
  for (const viewPath of viewPaths) {
    let i: number = viewPaths.indexOf(viewPath);
    // handle array index
    if (viewPath.includes("[")) {
      const key: string = viewPath.substring(0, viewPath.indexOf("["));
      const index: number = parseInt(
        viewPath.substring(viewPath.indexOf("[") + 1, viewPath.indexOf("]")),
        10
      );
      // now check from the array property if the property is really an array
      // if so check if the index is within the boundry of array length
      // and check if index extracted from the path is really a number
      if (
        !Array.isArray(currData[key]) ||
        currData[key].length - 1 < index ||
        isNaN(index)
      ) {
        // console.log("false 1", i);

        return undefined;
      }

      // now assign currData to curr view Path property
      currData = currData[key][index];
    } else {
      // handle wildcard
      // if (viewPaths[viewPaths.indexOf(viewPath) + 1] === "*") {
      //   // keep the current object for the previous key, just making sure but obviously it still holds data for the previous key
      //   // currData = currData[viewPaths[i - 1]];
      //   // check if the current data is an array
      //   currData = currData[viewPath];
      //   if (Array.isArray(currData)) {
      //     let key: string = viewPaths[i + 2];
      //     for (const d of currData) {
      //       console.log(key, d);
      //       currData = d;
      //       if (!pathExist(d, key)) {
      //         return false;
      //       }
      //     }
      //   }
      // }

      // check for property exist
      if (!currData.hasOwnProperty(viewPath)) {
        // console.log("false 2", i);
        return undefined;
      }

      currData = currData[viewPath];
    }
  }

  return currData;
};

const getViews = (userViews: ViewField[]): void => {
  for (const view of userViews) {
    console.log(pathExist(Data, view.path));
  }
};

getViews(UserViews);
