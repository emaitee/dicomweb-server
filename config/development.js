module.exports = {
  env: 'development',
  dbServer: process.env.DB_SERVER || 'https://apikey-v2-hdg7q7sdpzex2fpt9c7zpvisgeq5gv6a3b67068es47:2c266d416856b89636469e59771a3fb2@c13e559c-61e5-4443-ae88-f778dc3507c6-bluemix.cloudantnosqldb.appdomain.cloud',
  db: process.env.DB_NAME || 'optimum-dicom',
  dbPort: process.env.DB_PORT || 443,
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
