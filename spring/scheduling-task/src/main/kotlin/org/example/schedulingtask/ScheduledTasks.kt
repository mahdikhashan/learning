package org.example.schedulingtask

import org.slf4j.LoggerFactory
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component
import java.text.SimpleDateFormat
import java.util.*

@Component
class ScheduledTasks {
  private val log = LoggerFactory.getLogger(ScheduledTasks::class.java)

  private val dateTime = SimpleDateFormat("HH:mm:ss")

  @Scheduled(fixedRate = 5000)
  fun reportCurrentTime() {
    log.info("The time is ${dateTime.format(Date())}")
  }
}

