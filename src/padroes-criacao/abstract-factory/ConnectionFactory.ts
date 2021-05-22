import {MsSqlConnectionFactory} from "./MsSqlConnection/MsSqlConnectionFactory";
import {Connection} from "./Connection";
import {TypeOfConnection} from "./EnumsConnectionFactory";
import {PostgreConnectionFactory} from "./PostgreConnection/PostgreConnectionFactory";

export abstract class ConnectionFactory {
    static getFactory(typeOfConnection : TypeOfConnection) : ConnectionFactory {
        switch (typeOfConnection) {
            case TypeOfConnection.MsSql:
                return new MsSqlConnectionFactory();
            case TypeOfConnection.Postgre:
                return new PostgreConnectionFactory();
        }
    }

    abstract createConnection(connectionString : string): Connection;
}
