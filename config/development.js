module.exports = {
  env: 'development',
  dbServer: process.env.DB_SERVER || 'http://admin:bitshis2019@pscprime.com',
  db: process.env.DB_NAME || 'dicom',
  dbPort: process.env.DB_PORT || 5984,
  prefix: process.env.PREFIX || '',
  auth: process.env.AUTH || 'none',
  logger: process.env.LOGGER || true,
  DIMSE: {
    tempDir: process.env.TEMPDIR || './data',
    AET: process.env.AET || 'PACS',
    port: process.env.DIMSE_PORT || 4002,
  },
  maxConcurrent: process.env.MAXCONCURRENT || 5,
};

// module.exports = {
//   env: 'development',
//   dbServer: process.env.DB_SERVER || 'https://apikey-b94f74ff7c28442aaea3e237af417315:3708e6cc6a21090861876bbc9b7a7c8680b8d1b4@2f86aa75-0bb7-4cb3-8f64-3cdb30d93c8d-bluemix.cloudant.com',
//   db: process.env.DB_NAME || 'optimum-dicom',
//   dbPort: process.env.DB_PORT || 5984,
//   prefix: process.env.PREFIX || '',
//   auth: process.env.AUTH || 'none',
//   logger: process.env.LOGGER || true,
//   DIMSE: {
//     tempDir: process.env.TEMPDIR || './data',
//     AET: process.env.AET || 'PACS',
//     port: process.env.DIMSE_PORT || 4002,
//   },
//   maxConcurrent: process.env.MAXCONCURRENT || 5,
// };

// module.exports = {
//   env: 'development',
//   dbServer: process.env.DB_SERVER || 'http://admin:123456@localhost',
//   db: process.env.DB_NAME || 'chronicle',
//   dbPort: process.env.DB_PORT || 5984,
//   prefix: process.env.PREFIX || '',
//   auth: process.env.AUTH || 'none',
//   logger: process.env.LOGGER || true,
//   DIMSE: {
//     tempDir: process.env.TEMPDIR || './data',
//     AET: process.env.AET || 'PACS',
//     port: process.env.DIMSE_PORT || 4002,
//   },
//   maxConcurrent: process.env.MAXCONCURRENT || 5,
// };
