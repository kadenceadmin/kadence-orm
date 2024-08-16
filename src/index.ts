export * from "./types/source";
export * from "./types/object";
export * from "./lib/decorators";
export * from "./lib/client";
export * from "./lib/util";

import { KadenceQuery } from "./lib/client";
import { executeRawSql } from "./lib/util";

import { pgDataSource } from "../examples/dataSources";
import { Employee } from "../examples/employee";
import { Benefit } from "../examples/benefit";

executeRawSql(pgDataSource, "SELECT * FROM employee")
    .then((employees) => {
        console.log('Raw SQL', employees);
    });

const employeeQuery = new KadenceQuery(Employee);

employeeQuery
    .addAttributes(["firstName", "lastName", "employeeId"])
    //.addExactFilter("employeeId", "62626262")
    .addRelation(Benefit)
    .addSort("firstName")
    .addLimit(3)
    .select()
    .then((employees) => {
        console.log('Round 1', employees);
        console.log(employees[0].benefits);
        employees[1].testEmployee();
        employees[2].insert();
    });

employeeQuery
    .addAttributes(["firstName", "employeeId"])
    .addExactFilter("firstName", "John")
    .select()
    .then((employees) => {
        console.log('Round 2', employees);
    });