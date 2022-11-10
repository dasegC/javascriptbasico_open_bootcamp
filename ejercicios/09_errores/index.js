const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    //defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ],
});

module.exports = logger;

function mostarError(){
    throw new Error ('Se ha encontrado un error!');
};

try {
    mostarError();
} catch(e){
    logger.log('error', e.toString())
}