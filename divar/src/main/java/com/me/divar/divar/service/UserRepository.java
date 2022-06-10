package com.me.divar.divar.service;

import com.me.divar.divar.dto.Users;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<Users, Long> {
    @Override
    Optional<Users> findById(Long aLong);

    Users findByUsername(String username);
}
