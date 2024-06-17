terraform {
    required_providers {
        google = {
            source  = "hashicorp/google"
            version = "4.51.0"
        }
    }
}

provider "google" {
    project         = var.project
    region          = "us-central1"
}

variable "project" {
    description     = "The ID of Google cloud project"
    type            = string
}

resource "google_storage_bucket" "data-lake-bucket" {
    name            = "mahdi_khashan_personal_bucket"
    location        = "US"

    storage_class   = "STANDARD"
    uniform_bucket_level_access = true
    
    versioning {
        enabled     = true
    }

    lifecycle_rule {
        action {
            type    = "Delete"    
        }
        condition {
            age     = 30
        }
    }
    
    force_destroy   = true
}

resource "google_bigquery_dataset" "dataset" {
    dataset_id      = "mahdi_khashan_personal_dataset"
    project         = var.project
    location        = "US"
}
