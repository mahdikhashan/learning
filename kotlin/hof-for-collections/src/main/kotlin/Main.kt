import java.nio.file.Files
import java.nio.file.Paths

fun computeGrade(
  points : List<Int>
) : Double {
  // It should be rounded to 1 decimal after period
  return points.sortedDescending().take(8).average()
}

fun doResultList(
  lines : List<String>
) : List<Results> {
  return lines.drop(1).map { line ->
    val values = line.split(",").map { it.trim() }
    val id = values.first().toInt()
    val name = values[1]
    val points = values.subList(2, values.size).map { it.toInt() }
    Results(id, name, points)
  }
}

fun doCalculateNumOfSolvedPerStudent(
  resultList : List<Results>
) : Map<String, Int> {
  return resultList
    .flatMap { result -> result.points.mapIndexed { index, points -> result.name to Pair(index, points) } }
    .filter { (_, pair) -> pair.second >= 3 }
    .groupBy({ it.first }, { (_, pair) -> pair.second })
    .mapValues { (_, pair) -> pair.size }
}

fun doCalculateNumOfSufficient(
  nSolvedPerStnd : Map<String, Int>
): Pair<List<String>, List<String>> {
  return nSolvedPerStnd
    .asIterable()
    .partition { it.value >= 8 }
    .toList()
    .let {
      (suffList, notSuffList) -> suffList.map { it.key } to notSuffList.map { it.key }
    }
}

fun doCalculateGrade(
  studentList: List<String>,
  resultList: List<Results>
) : Map<String, Grade> {
  return studentList.associateWith { name ->
    val points = resultList.find { it.name == name }?.points ?: emptyList()
    val averagePoints = computeGrade(points)

    when (averagePoints) {
      in 8.75..10.0 -> Grade.EXCELLENT
      in 7.5..8.75 -> Grade.GOOD
      in 6.25..7.5 -> Grade.SATISFACTORY
      in 5.0..6.25 -> Grade.SUFFICIENT
      in 0.0..5.0 -> Grade.INSUFFICIENT
      else -> throw Error("not valid grade")
    }
  }
}

fun doCalculateNumberOfStudentsWithGrade(
  grades : Map<String, Grade>
) : Map<Grade, Int> {
  return grades
    .asIterable()
    .groupingBy { it.value }.eachCount()
}

fun doCalculateNumberOfSolvedPerAssessment(
  resultList: List<Results>
) : List<Pair<Int, Int>> {
  return (1..10).map { assigment ->
    val nSolved = resultList.count { result ->
      (result.points.getOrNull(assigment - 1) ?: 0) >= 3
    }
    assigment to nSolved
  }
}

fun main() {
  val lines : List<String> = Files.readAllLines(Paths.get("files/results.csv"))

  val resultList : List<Results> = doResultList(lines)

  val numberOfSolvedPerStudent : Map<String, Int> = doCalculateNumOfSolvedPerStudent(resultList)

  val (sufficient : List<String>, notSufficient : List<String>) = doCalculateNumOfSufficient(numberOfSolvedPerStudent)

  val grades : Map<String, Grade> = doCalculateGrade(sufficient, resultList)

  val numberStudentsWithGrade : Map<Grade, Int> = doCalculateNumberOfStudentsWithGrade(grades)

  val numberOfSolvedPerAssessment : List<Pair<Int, Int>> = doCalculateNumberOfSolvedPerAssessment(resultList)

  println(resultList)
  println(numberOfSolvedPerStudent)
  println(sufficient)
  println(notSufficient)
  println(grades)
  println(numberStudentsWithGrade)
  println(numberOfSolvedPerAssessment)
}
