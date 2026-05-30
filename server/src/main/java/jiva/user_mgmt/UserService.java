package jiva.user_mgmt;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class UserService {
  private UserRepository repo;

  public UserService(UserRepository userRepository) {
    this.repo = userRepository;
  }

  public List<User> getAll() {
    return repo.findAll();
  }
}
