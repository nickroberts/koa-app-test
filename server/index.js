const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;
const app = require('./src/app');
app.listen(port);
