package org.example.usermanager.applicant;

public class DateDifferenceException extends IllegalArgumentException {
    public DateDifferenceException() {
        super("Applied On must be before State Change");
    }
}
