import { KadenceDataSource } from "../types/source";
import { LoggingLevel } from "../types/object";

export async function executeQuery<T>(dataSource: KadenceDataSource, dataQuery: string, loggingLevel: LoggingLevel): Promise<unknown[] | null> {
    const path = `../providers/${dataSource.provider}.ts`;

    return await import(path)
        .then(async (provider) => {
            if (loggingLevel == LoggingLevel.Debug) {
                console.log('Executing query:', `${dataSource?.provider}: ${dataQuery}`);
            }
        
            return await provider.getRecords(dataSource, dataQuery)
                .then((response: any) => {
                    return response;
                })
                .catch((error: any) => {
                    throw new Error(error);
                });
        })
        .catch((error: any) => {
            throw new Error(error);
        });
}

export async function executeRawSql(dataSource: KadenceDataSource, dataQuery: string): Promise<unknown[] | null> {
    const path = `../providers/${dataSource.provider}.ts`;

    return await import(path)
        .then(async (provider) => {
            return await provider.getRecords(dataSource, dataQuery)
                .then((response: any) => {
                    return response;
                })
                .catch((error: any) => {
                    throw new Error(error);
                });
        })
        .catch((error: any) => {
            throw new Error(error);
        });
}