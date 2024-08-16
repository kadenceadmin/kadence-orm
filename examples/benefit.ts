import { Attribute, Entity } from "../src/lib/decorators";
import { KadenceEntity, LoggingLevel } from "../src/types/object";
import { pgDataSource } from "./dataSources";

@Entity({ source: pgDataSource, tableName: "benefit", uniqueIds: ["id"], loggingLevel: LoggingLevel.Debug })
export class Benefit extends KadenceEntity {
    //@identifier @required
    @Attribute()
    id?: number;

    //@required
    @Attribute({ fieldName: "name"})
    benefitName?: string;

    //@required
    @Attribute()
    provider?: string;

    constructor() {
        super();
        
        //this.benefitName = benefitName;
        //this.provider = provider;
    }
}