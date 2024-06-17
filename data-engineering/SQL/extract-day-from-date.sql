SELECT Name, EXTRACT(DAY from Date) AS Day
FROM `bigquery-public-data.pet_records.pets_with_date`
