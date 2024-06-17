SELECT Name, EXTRACT(WEEK from Date) AS Week
FROM `bigquery-public-date.pet_records.pets_with_date`
