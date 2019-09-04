export interface ConnectionOptions {
  host: string;
  user: string;
  password: string;
  database: string;
}

export interface Database {
  connect: () => Promise<any>;
  connection: (logs: boolean) => void;
}