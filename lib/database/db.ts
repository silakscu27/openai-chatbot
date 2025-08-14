import { ConnectionPool, config } from 'mssql';
import { AppConfig } from '@/config/config';

let pool: any = null;

if (!AppConfig.mockMode) {
  const dbConfig: config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER || 'localhost',
    database: process.env.DB_NAME || 'ChatBot',
    connectionTimeout: AppConfig.dbConfig.connectionTimeout, 
    options: {
        encrypt: true,
        trustServerCertificate: true
    },
    pool: {
        max: AppConfig.dbConfig.maxPoolSize,
        min: 1,
        idleTimeoutMillis: 30000
    }
};

  
  pool = new ConnectionPool(dbConfig);
  pool.connect().catch(() => {});
}

export { pool };