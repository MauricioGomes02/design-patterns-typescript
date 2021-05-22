import {ConnectionFactory} from "../ConnectionFactory";
import {ConnectionMsSql} from "./ConnectionMsSql";
import {Connection} from "../Connection";



export class MsSqlConnectionFactory implements ConnectionFactory {
    createConnection(connectionString : string): Connection {
        return new ConnectionMsSql(connectionString);
    }
}
