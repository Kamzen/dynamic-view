"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("./Data");
const UserViews_1 = require("./UserViews");
// save and check for existing paths to optimise performace
// const saveAndGetPath = (path: string): string[] => {
//   const paths: Map<string, string[]> = new Map();
//   return paths.get(path)
// }
const configView = (data, viewFields) => {
    let views = [];
    const saleReport = data.data_source;
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
configView(Data_1.Data, UserViews_1.UserViews);
