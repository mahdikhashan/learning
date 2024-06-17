from google.cloud import bigquery

client = bigquery.Client()

query = """
        SELECT score, title
        FROM `bigquery-public-data.hacker_news.full`
        WHERE type = "job"
        """

dry_run_config = bigquery.QueryJobConfig(dry_run=True)
dry_run_query_job = client.query(query, job_config=dry_run_config)

print("This query will process {} bytes.".format(dry_run_query_job.total_bytes_processed))

ONE_MB = 1000*1000

safe_config = bigquery.QueryJobConfig(maximum_bytes_billed=ONE_MB)

safe_query_job = client.query(query, job_config=safe_config)

safe_query_job.to_dataframe()
