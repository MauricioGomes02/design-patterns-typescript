import {ConnectionFactory} from "../ConnectionFactory";
import {ConnectionPostgre} from "./ConnectionPostgre";
import {Connection} from "../Connection";

export class PostgreConnectionFactory implements ConnectionFactory {
    createConnection(connectionString : string): Connection {
        return new ConnectionPostgre(connectionString);
    }
}
