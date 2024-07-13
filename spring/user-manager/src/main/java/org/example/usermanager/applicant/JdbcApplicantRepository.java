package org.example.usermanager.applicant;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class JdbcApplicantRepository implements ApplicantRepository {

    private final JdbcClient jdbcClient;

    @Override
    public List<Application> findAll() {
        return null;
    }

    @Override
    public Optional<Applicant> findById(Integer Id) {
        return Optional.empty();
    }

    @Override
    public int count() {
        return 0;
    }

    @Override
    public void create(Application application) {
        throw new UnsupportedOperationException();
    }

    @Override
    public List<Application> findByApplicant(Integer id) {
        return null;
    }
}
