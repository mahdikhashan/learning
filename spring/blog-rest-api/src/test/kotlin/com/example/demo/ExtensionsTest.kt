package com.example.demo

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.Assertions.*

class ExtensionsTest {

  @Test
  fun testGetOrdinal() {
    assertEquals(getOrdinal(11), "11th")
    assertEquals(getOrdinal(13), "13th")
    assertEquals(getOrdinal(1), "1st")
    assertEquals(getOrdinal(2), "2nd")
  }
}