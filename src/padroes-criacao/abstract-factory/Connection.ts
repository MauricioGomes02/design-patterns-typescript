export abstract class Connection {
    abstract connectionString : string;
    abstract toConnect() : string;
}
