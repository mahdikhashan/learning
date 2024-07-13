package org.example.usermanager.applicant;

import jakarta.validation.constraints.NotEmpty;

import java.time.LocalDateTime;

public record Application(
        Integer id,
        @NotEmpty
        Applicant applicant,
        @NotEmpty
        LocalDateTime appliedOn,
        LocalDateTime statusChange,
        State state
) {
        public Application {
                if (!statusChange.isBefore(appliedOn)) {
                        throw new DateDifferenceException();
                }
        }
}
