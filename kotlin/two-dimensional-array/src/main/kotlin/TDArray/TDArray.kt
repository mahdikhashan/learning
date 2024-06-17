package TDArray

class TDArray<T>(private val nRows: Int, private val nColumns: Int, initFn: (row: Int, col: Int) -> T) {
  private val data : MutableList<MutableList<T>> = MutableList(nRows) { row ->
    MutableList(nColumns) { col ->
      initFn(row, col)
    }
  }

  //  I don't know what is wrong with it, the Kotlin compiler complains
  //  constructor(data: List<List<T>>) : this(data.size, data.size)

  override fun toString(): String {
    val lengthOfLongest = data.maxOf { it.maxOf { it.toString().length } }
    return buildString {
      data.forEachIndexed { rowIndex, row ->
        row.forEachIndexed { columnIndex, element ->
          if (columnIndex == 0) {
            append(element)
          } else {
            append(element.toString().padStart(lengthOfLongest + 1))
          }
        }

        if (rowIndex < data.size - 1) {
          appendLine()
        }
      }
    }
  }

  private fun getElementorNull(row: Int, column: Int): T? =
    if (row in data.indices && column in data[row].indices) data[row][column] else null

  private fun setElementIfLocationIsValid(row: Int, column: Int, value: T) {
    if (row in data.indices && column in data[row].indices) {
      data[row][column] = value
    }
  }

  fun dimension() = Pair(nRows, nColumns);

  operator fun unaryPlus() = nRows;

  operator fun unaryMinus() = nColumns;

  operator fun not() = Pair(nRows, nColumns)

  operator fun get(row: Int, column: Int) = getElementorNull(row, column)

  operator fun invoke(row: Int, column: Int) = getElementorNull(row, column)

  operator fun set(row: Int, column: Int, value: T) = setElementIfLocationIsValid(row, column, value)

  operator fun invoke(row: Int, column: Int, value: T) = setElementIfLocationIsValid(row, column, value)

  // Not working duo to lack of knowledge in implementing secondary constructor
  //  operator fun get(rows: IntRange, cols: IntRange): TDArray<T> {
  //    val slicedData = data.slice(rows).map { it.slice(cols).toList() }.toList()
  //    return TDArray(slicedData)
  //  }

  // Same as above, I should implement a function for the same functionality and assign it to both
  //    // arr(rows, cols) should behave as arr[rows, cols]
  //    operator fun invoke(rows: IntRange, cols: IntRange) = /* TODO */

  operator fun plus(str: String): TDArray<T> {
    val modifiedData = data.map { row ->
      row.map { element -> (element.toString() + str) as T
      }.toMutableList()
    }.toMutableList()

    return TDArray(nRows, nColumns) { row, col -> modifiedData[row][col] }
  }

  operator fun contains(value: T): Boolean {
    return data.flatten().contains(value)
  }

  operator fun iterator(): Iterator<T> = object : Iterator<T> {
    private val flattenData = data.flatten()

    private var current = flattenData.indexOf(flattenData.first())

    override fun hasNext(): Boolean = current < flattenData.size

    override fun next(): T {
      return if (hasNext()) {
        val result = flattenData[current]
        current++
        result
      } else {
        throw NoSuchElementException()
      }
    }
  }
}

fun <T : Comparable<T>> TDArray<T>.min(): T? {
  var currentElement: T? = null

  for (element in this) {
    if (currentElement == null || element < currentElement) {
      currentElement = element
    }
  }

  return currentElement
}

fun <T: Comparable<T>> TDArray<T>.max(): T? {
  var currentElement: T? = null

  for (element in this) {
    if (currentElement == null || element > currentElement) {
      currentElement = element
    }
  }

  return currentElement
}