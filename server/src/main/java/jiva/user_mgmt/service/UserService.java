package jiva.user_mgmt.service;

import java.util.List;

import org.springframework.stereotype.Service;

import jiva.user_mgmt.repository.UserRepository;
import jiva.user_mgmt.entity.User;
import jiva.user_mgmt.UserNotFoundException;

@Service
public class UserService {
  private final UserRepository repo;

  public UserService(UserRepository userRepository) {
    this.repo = userRepository;
  }

  public List<User> getAll() {
    return repo.findAll();
  }

  public User getUser(Long id) {
    return repo.findById(id)
        .orElseThrow(() -> new UserNotFoundException("User not found with id: " + id));
  }

  public User create(User user) {
    return repo.save(user);
  }
}
