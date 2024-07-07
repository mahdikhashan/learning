package org.example.schedulingtask

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.scheduling.annotation.EnableScheduling

@SpringBootApplication
@EnableScheduling
class SchedulingTaskApplication

fun main(args: Array<String>) {
	runApplication<SchedulingTaskApplication>(*args)
}
