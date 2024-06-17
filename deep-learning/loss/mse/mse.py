from typing import List


def mean_squared_error(actual: List, predicted: List) -> float:
  if len(actual) != len(predicted):
    raise ValueError("The length of actual values and predicted values must be the same")
  
  squared_diffs = [(act - pred) ** 2 for act, pred in zip(actual, predicted)]
  mse = sum(squared_diffs) / len(actual)

  return mse
