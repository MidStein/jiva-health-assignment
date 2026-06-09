package jiva.user_mgmt.service;

import java.util.List;
import java.time.LocalDate;

import org.springframework.stereotype.Service;

import jiva.user_mgmt.repository.UserRepository;
import jiva.user_mgmt.entity.User;

@Service
public class UserService {
  private UserRepository repo;

  public UserService(UserRepository userRepository) {
    this.repo = userRepository;
  }

  public List<User> getAll() {
    return repo.findAll();
  }

  public User create(User user) {
    user.setJoinedDate(LocalDate.now());
    user.setLastActive(LocalDate.now());
    return repo.save(user);
  }
}

