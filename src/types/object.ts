import { KadenceSingularQuery } from "../lib/client";
import { KadenceDataSource } from "./source";

export class KadenceTable {
    name: string;
    source?: KadenceDataSource;
    tableName?: string;
    loggingLevel?: LoggingLevel;
    uniqueIds: string[] = [];
    attributes: KadenceAttribute[] = [];
    relations: KadenceRelation[] = [];

    constructor(name: string, attributes?: KadenceAttribute[]) {
        this.name = name;
        this.attributes = attributes || [];
    }
}

export interface KadenceAttribute {
    name: string;
    fieldName: string;
    objectType: string;
    dataType: string;
    autoGenerated: boolean;
}

export interface KadenceRelation {
    fieldName: string;
    table: string;
    class: any;
    sourceField: string;
    targetField: string;
}

export class KadenceEntityRef {
    [key: string]: KadenceTable;
}

export class KadenceEntity {
    async save() {
        const query = new KadenceSingularQuery(this);
        
        return await query.update()
            .then((result) => {
                return result;
            })
            .catch((error) => {
                throw new Error(error);
            });
    }

    /**
     * Inserts the current record into the database or calls the POST method on the API
     * 
     * ### Examples
     * ```ts
     * const result = new Employee();
     * result.name = "John Doe";
     * result.insert();
     * ```
     */
    async insert() {
        const query = new KadenceSingularQuery(this);
        
        return await query.insert()
            .then((result) => {
                return result;
            })
            .catch((error) => {
                throw new Error(error);
            });
    }

    async delete(): Promise<boolean> {
        const query = new KadenceSingularQuery(this);

        return await query.delete()
            .then((result) => {
                return true;
            })
            .catch((error) => {
                return false;
            });
    }
}

export enum LoggingLevel {
    None = "none",
    Debug = "debug",
}