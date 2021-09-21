let createError = require('http-errors');
let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors')
let swaggerUi = require('swagger-ui-express')
let swaggerFile = require('./swagger_output.json')
let {errorHandlers} = require('./src/_helpers');

const app = express()

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(cors(corsOptions));

/* Routes */
let router = require('./src/routes')

/* Middlewares */
app.use(router)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

/* error handler */
app.use(errorHandlers);
app.listen(process.env.LISTEN_PORT, () => {
  console.log(`Server is running! LISTEN ON PORT ${process.env.LISTEN_PORT} \nAPI documentation: http://localhost:${process.env.LISTEN_PORT}/doc`)
})
