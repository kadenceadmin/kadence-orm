import { Entity, Attribute, Relation } from "../src/lib/decorators";
import { KadenceEntity, LoggingLevel } from "../src/types/object";
import { Benefit } from "./benefit";
import { pgDataSource } from "./dataSources";

@Entity({ source: pgDataSource, tableName: "employee", uniqueIds: ["id"], loggingLevel: LoggingLevel.Debug })
export class Employee extends KadenceEntity {
    @Attribute({ type: "uuid" })
    id?: string;

    @Attribute({ fieldName: "first_name" })
    firstName?: string;

    @Attribute({ fieldName: "last_name" })
    lastName?: string;

    @Attribute({ fieldName: "employee_id" })
    employeeId?: string;

    @Relation({ class: Benefit, sourceField: "id", targetField: "employee" })
    benefits?: Benefit[];

    testEmployee() {
        console.log('Test Employee', this.employeeId);
    }
}