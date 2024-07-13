package org.example.usermanager.applicant;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

public record Applicant(
    @NotEmpty
    Integer id,
    String firstName,
    String lastName,
    @Email
    String email,
    String url,
    Resume resume
) {
    public String getFullName() {
        return String.format("%s %s", firstName, lastName);
    }
}
