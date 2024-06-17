from google.cloud import bigquery

client = bigquery.Client()

dataset_ref = client.dataset("nhtsa_traffic_fatalities", project="bigquery-public-data")
dataset = client.get_dataset(dataset_ref)

table_ref = dataset_ref.table("accident_2015")
table = client.get_table(table_ref)

query = """
        SELECT COUNT(consecutive_number) as number_of_accidents,
               EXTRACT(DAYOFWEEK FROM timestamp_of_crash) as day_of_week
        FROM `bigquery-public-data.nhtsa_traffic_fatalities.accident_2015`
        GROUP BY day_of_week
        ORDER BY number_of_accidents DESC
        """

query_job_config = bigquery.QueryJobConfig(maximum_bytes_billed=10**10)
query_job = client.query(query, job_config=query_job_config)

accidents_per_day = query_job.to_dataframe()

print(accidents_per_day)
