"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("./Data");
// save and check for existing paths to optimise performace
// const saveAndGetPath = (path: string): string[] => {
//   const paths: Map<string, string[]> = new Map();
//   return paths.get(path)
// }
const pathExist = (data, path) => {
    const viewPaths = path.split(".");
    console.log(viewPaths);
    let currData = data;
    viewPaths.forEach((viewPath, i) => {
        // handle array index
        if (viewPath.includes("]")) {
            const key = viewPath.substring(0, viewPath.indexOf("["));
            const index = parseInt(viewPath.substring(viewPath.indexOf("[") + 1, viewPath.indexOf("]")), 10);
            // now check from the array property if the property is really an array
            // if so check if the index is within the boundry of array length
            // and check if index extracted from the path is really a number
            if (!Array.isArray(currData[key]) ||
                currData[key].length <= index ||
                isNaN(index)) {
                return false;
            }
            // now assign currData to curr view Path property
            currData = currData[key][index];
        }
        else {
            // check for property exist
            if (!currData.hasOwnProperty(viewPath)) {
                return false;
            }
            currData = currData[viewPath];
            console.log(currData);
            // console.log(i, currData);
            // check nested arrays
            if (Array.isArray(currData)) {
                const nestedViewPaths = viewPaths
                    .slice(viewPaths.indexOf(viewPath) + 1)
                    .join(".");
                // repeat the above process will deal with you later: NB not to foget: recursions
                currData.forEach((item, idx) => {
                    if (!pathExist(item, nestedViewPaths)) {
                        return false;
                    }
                });
            }
        }
    });
    return true;
};
const getViews = () => { };
console.log(pathExist(Data_1.Data, "data_source.sales.accounts.total_value"));
// let views: View[] = [];
//     const saleReportData: DataSource = data.data_source;
//     viewFields.forEach((viewField: ViewField, idx: number) => {
//       const viewPaths = viewField.path.split(".");
//       // first check if the root path exist
//       if (Object.keys(saleReportData).includes(viewPaths[0])) {
//         // check of path has *
//         if (viewPaths.includes("*")) {
//         } else {
//           console.log(saleReportData[viewPaths[0]]);
//           console.log(viewPaths);
//           for (let i: number = 1; i < viewPaths.length; i++) {
//             let currentPath = viewPaths[i];
//             if (currentPath.includes("]")) {
//               const index: number = Number(
//                 currentPath
//                   .split("")
//                   .filter((option) => {
//                     return /[0-9]/.test(option) && option;
//                   })
//                   .join()
//               );
//               currentPath = currentPath
//                 .split("")
//                 .filter((option) => {
//                   return /^[A-Za-z]+$/.test(option) && option;
//                 })
//                 .join("");
//                 console.log(saleReportData.viewFields[0].haOwnProperty(currentPath))
//             } else {
//             }
//           }
//         }
//       }
//     });
//     return views;
