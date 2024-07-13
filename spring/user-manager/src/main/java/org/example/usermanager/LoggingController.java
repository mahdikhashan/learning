package org.example.usermanager;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoggingController {

    Logger logger = LoggerFactory.getLogger(LoggingController.class);

    @RequestMapping("/")
    public String index() {
        logger.trace("a trace message");
        logger.info("a info message");
        logger.debug("a debug message");
        logger.warn("a warn message");
        logger.error("an error message");

        return "Check logs";
    }
}


