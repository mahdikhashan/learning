package org.example.usermanager.applicant;

import java.util.List;
import java.util.Optional;

public interface ApplicantRepository {

    List<Application> findAll();

    Optional<Applicant> findById(Integer Id);

    int count();

    void create(Application application);

    List<Application> findByApplicant(Integer id);
}
