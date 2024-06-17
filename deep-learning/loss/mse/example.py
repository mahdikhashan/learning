from mse import mean_squared_error

y_true = [1, 2, 3, 4, 5]

y_pred = [1.1, 2.2, 2.9, 4.1, 4.9]

mse_value = mean_squared_error(y_true, y_pred)
print(mse_value)
