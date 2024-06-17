from google.cloud import bigquery

client = bigquery.Client()

dataset_ref = client.dataset('hacker_news', project='bigquery-public-data')
dataset = client.get_dataset(dataset_ref)

table_ref = dataset_ref.table("full")
table = client.get_table(table_ref)

print(table.schema)
print("\n================================")
print(client.list_rows(table, max_results=5).to_dataframe())

query = """
        SELECT 'by' as author, parent, COUNT(id) as posts_count
        FROM `bigquery-public-data.hacker_news.full`
        GROUP BY parent
        HAVING COUNT(id) > 10
        """

ONE_GB = 10**10

job_config = bigquery.QueryJobConfig(maximum_bytes_billed=ONE_GB)
query_job = client.query(query, job_config=job_config)

comments = query_job.to_dataframe()
print(comments.head())
