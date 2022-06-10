package com.me.divar.divar.service.impl;


import com.me.divar.divar.dto.Users;
import com.me.divar.divar.service.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

@Autowired
UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
     return userRepository.findByUsername(username);
    }


    public Users loadUserById(Integer userId) {
        return  userRepository.findById(Long.valueOf(userId)).get();
    }
}
