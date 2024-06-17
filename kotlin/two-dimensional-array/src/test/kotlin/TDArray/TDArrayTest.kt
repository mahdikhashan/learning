package TDArray

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

class TDArrayTest {

  @Test
  fun `should be instanceOf TDArray`() {
    val twoDimArray = TDArray(2, 2) { r, c -> "${r}|${c}" }
    assertInstanceOf(TDArray::class.java, twoDimArray)
  }

  @Test
  fun `should print a single row and col two dimensional array on toString() correctly`() {
    val twoDimArray = TDArray(1, 1) { r, c -> "${r}|${c}" }
    val expectedTwoDimArray = """
    0|0
    """.trimIndent()
    assertEquals(expectedTwoDimArray, twoDimArray.toString())
  }

  @Test
  fun `should print a 3 rows, 1 cols two dimensional array on toString() correctly`() {
    val twoDimArray = TDArray(3, 1) { r, c -> "${r}|${c}" }
    val expectedTwoDimArray = """
    0|0
    1|0
    2|0
    """.trimIndent()
    assertEquals(expectedTwoDimArray, twoDimArray.toString())
  }

  @Test
  fun `should print a 1 row and 3 cols dimensional array on toString() correctly`() {
    val twoDimArray = TDArray(1, 3) { r, c -> "${r}|${c}" }
    val expectedTwoDimArray = """
    0|0 0|1 0|2
    """.trimIndent()
    assertEquals(expectedTwoDimArray, twoDimArray.toString())
  }

  @Test
  fun `should print a 10 rows, 10 cols two dimensional array on toString() correctly`() {
    val twoDimArray = TDArray(10, 10) { r, c -> "${r}|${c}" }
    val expectedTwoDimArray = """
    0|0 0|1 0|2 0|3 0|4 0|5 0|6 0|7 0|8 0|9
    1|0 1|1 1|2 1|3 1|4 1|5 1|6 1|7 1|8 1|9
    2|0 2|1 2|2 2|3 2|4 2|5 2|6 2|7 2|8 2|9
    3|0 3|1 3|2 3|3 3|4 3|5 3|6 3|7 3|8 3|9
    4|0 4|1 4|2 4|3 4|4 4|5 4|6 4|7 4|8 4|9
    5|0 5|1 5|2 5|3 5|4 5|5 5|6 5|7 5|8 5|9
    6|0 6|1 6|2 6|3 6|4 6|5 6|6 6|7 6|8 6|9
    7|0 7|1 7|2 7|3 7|4 7|5 7|6 7|7 7|8 7|9
    8|0 8|1 8|2 8|3 8|4 8|5 8|6 8|7 8|8 8|9
    9|0 9|1 9|2 9|3 9|4 9|5 9|6 9|7 9|8 9|9
    """.trimIndent()
    assertEquals(expectedTwoDimArray, twoDimArray.toString())
  }

  @Test
  fun `should print a 15 rows, 11 cols two dimensional array on toString() correctly`() {
    val twoDimArray = TDArray(15, 11) { r, c -> "${r}|${c}" }
    val expectedTwoDimArray = """
    0|0   0|1   0|2   0|3   0|4   0|5   0|6   0|7   0|8   0|9  0|10
    1|0   1|1   1|2   1|3   1|4   1|5   1|6   1|7   1|8   1|9  1|10
    2|0   2|1   2|2   2|3   2|4   2|5   2|6   2|7   2|8   2|9  2|10
    3|0   3|1   3|2   3|3   3|4   3|5   3|6   3|7   3|8   3|9  3|10
    4|0   4|1   4|2   4|3   4|4   4|5   4|6   4|7   4|8   4|9  4|10
    5|0   5|1   5|2   5|3   5|4   5|5   5|6   5|7   5|8   5|9  5|10
    6|0   6|1   6|2   6|3   6|4   6|5   6|6   6|7   6|8   6|9  6|10
    7|0   7|1   7|2   7|3   7|4   7|5   7|6   7|7   7|8   7|9  7|10
    8|0   8|1   8|2   8|3   8|4   8|5   8|6   8|7   8|8   8|9  8|10
    9|0   9|1   9|2   9|3   9|4   9|5   9|6   9|7   9|8   9|9  9|10
    10|0  10|1  10|2  10|3  10|4  10|5  10|6  10|7  10|8  10|9 10|10
    11|0  11|1  11|2  11|3  11|4  11|5  11|6  11|7  11|8  11|9 11|10
    12|0  12|1  12|2  12|3  12|4  12|5  12|6  12|7  12|8  12|9 12|10
    13|0  13|1  13|2  13|3  13|4  13|5  13|6  13|7  13|8  13|9 13|10
    14|0  14|1  14|2  14|3  14|4  14|5  14|6  14|7  14|8  14|9 14|10
    """.trimIndent()
    assertEquals(expectedTwoDimArray, twoDimArray.toString())
  }

  @Test
  fun `should correctly determine the dimensions of a 2x2 array`() {
    val twoDimArray = TDArray(2, 2) { r, c -> "${r}|${c}" }
    val expectedTwoDimArray = Pair(2, 2)
    assertEquals(expectedTwoDimArray, twoDimArray.dimension())
  }

  @Test
  fun `should correctly determine the dimensions of a 15x11 array`() {
    val twoDimArray = TDArray(15, 11) { r, c -> "${r}|${c}" }
    val expectedTwoDimArray = Pair(15, 11)
    assertEquals(expectedTwoDimArray, twoDimArray.dimension())
  }

  @Test
  fun `should correctly determine the dimensions of a 2x2 array by !TDArray`() {
    val twoDimArray = TDArray(2, 2) { r, c -> "${r}|${c}" }
    val expectedTwoDimArray = Pair(2, 2)
    assertEquals(expectedTwoDimArray, !twoDimArray)
  }

  @Test
  fun `should correctly determine the dimensions of a 15x11 array by !TDArray`() {
    val twoDimArray = TDArray(15, 11) { r, c -> "${r}|${c}" }
    val expectedTwoDimArray = Pair(15, 11)
    assertEquals(expectedTwoDimArray, !twoDimArray)
  }

  @Test
  fun `should correctly determine the rows of a 15x11 array by +TDArray`() {
    val twoDimArray = TDArray(15, 11) { r, c -> "${r}|${c}" }
    val expectedTwoDimArray = 15
    assertEquals(expectedTwoDimArray, +twoDimArray)
  }

  @Test
  fun `should correctly determine the columns of a 15x11 array by -TDArray`() {
    val twoDimArray = TDArray(15, 11) { r, c -> "${r}|${c}" }
    val expectedTwoDimArray = 11
    assertEquals(expectedTwoDimArray, -twoDimArray)
  }

  @Test
  fun `should correctly return the value for the (i, j) index of TDArray`() {
    val twoDimArray = TDArray(15, 11) { r, c -> "${r}|${c}" }
    assertEquals("0|0", twoDimArray[0, 0])
    assertEquals("3|4", twoDimArray[3, 4])
    assertEquals("14|10", twoDimArray[14, 10])
    assertEquals("0|0", twoDimArray(0, 0))
    assertEquals("3|4", twoDimArray(3, 4))
    assertEquals("14|10", twoDimArray(14, 10))
  }

  @Test
  fun `should correctly return null if the index is not valid`() {
    val twoDimArray = TDArray(15, 11) { r, c -> "${r}|${c}" }
    assertEquals(null, twoDimArray[-1, 0])
    assertEquals(null, twoDimArray[15, 12])
    assertEquals(null, twoDimArray[5, 20])
    assertEquals(null, twoDimArray[25, 1])
    assertEquals(null, twoDimArray(-1, 0))
    assertEquals(null, twoDimArray(15, 12))
    assertEquals(null, twoDimArray(5, 20))
    assertEquals(null, twoDimArray(25, 1))
  }

  @Test
  fun `should correctly set the value for an index`() {
    val twoDimArray = TDArray(15, 11) { r, c -> "${r}|${c}" }
    val expectedTwoDimArray = "12|13"
    twoDimArray[0, 0] = "12|13"
    assertEquals(expectedTwoDimArray, twoDimArray[0, 0])
  }

  @Test
  fun `should correctly set the value for an index with invoke`() {
    val twoDimArray = TDArray(15, 11) { r, c -> "${r}|${c}" }
    val expectedTwoDimArray = "12|13"
    twoDimArray(0, 0, "12|13")
    assertEquals(expectedTwoDimArray, twoDimArray[0, 0])
  }

  @Test
  fun `should append a string to each element correctly`() {
    val twoDimArray = TDArray(2, 2) { r, c -> "${r}|${c}" }
    val modifiedArray = twoDimArray + "mahdi"
    val expectedArray = """
    0|0mahdi 0|1mahdi
    1|0mahdi 1|1mahdi
    """.trimIndent()
    assertEquals(expectedArray, modifiedArray.toString())
  }

  @Test
  fun `should return true or false on in operator applied to TDArray`() {
    val twoDimArray = TDArray(2, 2) { r, c -> "${r}|${c}" }
    val mahdiDoesNotExistsInTwoDimArray = "mahdi" in twoDimArray
    val valueExistsInTwoDimArray = "0|0" in twoDimArray
    val falsyExpectation = false
    val truthyExpectation = true
    assertEquals(falsyExpectation, mahdiDoesNotExistsInTwoDimArray)
    assertEquals(truthyExpectation, valueExistsInTwoDimArray)
  }

  // I used ChatGPT 3.5 to generate below test
  @Test
  fun `should iterate over TDArray`() {
    val twoDimArray = TDArray(2, 2) { r, c -> "${r}|${c}" }
    val expectedArray = arrayOf("0|0", "0|1", "1|0", "1|1")

    var index = 0

    for (element in twoDimArray) {
      assertTrue(index < expectedArray.size, "Index out of bounds for expectedArray")

      assertEquals(expectedArray[index], element)

      index++
    }

    assertEquals(expectedArray.size, index, "Not all elements in expectedArray were iterated")
  }

  @Test
  fun `should find the min value of TDArray`() {
    val twoDimArray = TDArray(2, 2) { r, c -> "${r}|${c}"}
    assertEquals("0|0", twoDimArray.min())
    assertFalse("0|1" == twoDimArray.min())
  }

  @Test
  fun `should find the max value of TDArray`() {
    val twoDimArray = TDArray(2, 2) { r, c -> "${r}|${c}" }
    assertEquals("1|1", twoDimArray.max())
    assertFalse("0|0" == twoDimArray.max())
  }

  @Test
  fun `should find the min and max value of TDArray correctly`() {
    val twoDimArray = TDArray(2, 2) { r, c -> "${r}|${c}" }
    twoDimArray[0, 0] = "# (ASCII 43)"
    twoDimArray(0, 1, "~ (ASCII 176)")
    assertEquals("# (ASCII 43)", twoDimArray.min())
    assertEquals("~ (ASCII 176)", twoDimArray.max())
  }
}