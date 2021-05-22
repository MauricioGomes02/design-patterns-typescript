import {Connection} from "../Connection";

export class ConnectionMsSql implements Connection {
    connectionString: string;
    constructor(connectionString : string) {
        this.connectionString = connectionString
    }
    toConnect() : string {
        return `this is instance of ${ConnectionMsSql.name}`
    }
}
