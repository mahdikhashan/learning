package org.example.schedulingtask

import org.awaitility.Awaitility.await
import org.awaitility.Durations
import org.junit.jupiter.api.Test
import org.mockito.Mockito.atLeast
import org.mockito.Mockito.verify
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.mock.mockito.SpyBean

@SpringBootTest
class ScheduledTasksTest {

  @SpyBean
  private lateinit var tasks: ScheduledTasks

  @Test
  fun reportCurrentTime() {
    await().atMost(Durations.TEN_SECONDS).untilAsserted {
      verify(tasks, atLeast(2)).reportCurrentTime()
    }
  }
}


