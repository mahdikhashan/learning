package org.example.usermanager.applicant;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/applicant")
public class ApplicantController {

    private final JdbcApplicantRepository applicantRepository;

    ApplicantController(JdbcApplicantRepository repository) {
        this.applicantRepository = repository;
    }

    @GetMapping
    List<Application> findAll() {
        return applicantRepository.findAll();
    }

    @GetMapping("/{id}")
    Applicant findByID(@PathVariable Integer id) {
        Optional<Applicant> applicant = applicantRepository.findById(id);
        if (applicant.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Applicant not found.");
        }
        return applicant.get();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    void create(@Valid @RequestBody Application application) {
        applicantRepository.create(application);
    }

    List<Application> findByApplicant(@RequestParam Integer id) {
        return applicantRepository.findByApplicant(id);
    }
}
