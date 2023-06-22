import winston = require("winston");

const {combine, timestamp, printf} = winston.format;
const logFormat = printf(({level, message, timestamp}) => {
    return `[${timestamp}] ${level}: ${message}`;
});

export const log = winston.createLogger({
    levels: winston.config.syslog.levels,
    format: combine(
        timestamp(),
        logFormat,
    ),
    transports: [
        new winston.transports.Console({level: "debug"})
    ]
})