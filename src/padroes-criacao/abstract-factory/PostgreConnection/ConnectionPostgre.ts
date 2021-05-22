import {Connection} from "../Connection";

export class ConnectionPostgre implements Connection {
    connectionString: string;
    constructor(connectionString : string) {
        this.connectionString = connectionString
    }
    toConnect() : string {
        return `this is instance of ${ConnectionPostgre.name}`
    }
}
