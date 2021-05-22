import {ConnectionFactory} from "./ConnectionFactory";
import {TypeOfConnection} from "./EnumsConnectionFactory";

const factoryMsSql = ConnectionFactory.getFactory(TypeOfConnection.MsSql)
const factoryPostgre = ConnectionFactory.getFactory(TypeOfConnection.Postgre)
const connectionMsSql = factoryMsSql.createConnection("connection string");
const connectionPostgre = factoryPostgre.createConnection("connection string");
console.log(connectionMsSql.toConnect());
console.log(connectionPostgre.toConnect());
