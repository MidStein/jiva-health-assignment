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

  public User create(User user) {
    if (user.getJoinedDate() == null) {
      user.setJoinedDate(java.time.LocalDate.now());
    }
    if (user.getLastActive() == null) {
      user.setLastActive(java.time.LocalDate.now());
    }
    return repo.save(user);
  }

  public User update(long id, User updatedUser) {
    return repo.findById(id).map(user -> {
      user.setName(updatedUser.getName());
      user.setRole(updatedUser.getRole());
      user.setStatus(updatedUser.getStatus());
      if (updatedUser.getJoinedDate() != null) {
        user.setJoinedDate(updatedUser.getJoinedDate());
      }
      if (updatedUser.getLastActive() != null) {
        user.setLastActive(updatedUser.getLastActive());
      }
      user.setAppointmentsCount(updatedUser.getAppointmentsCount());
      user.setPrime(updatedUser.isPrime());
      user.setEmail(updatedUser.getEmail());
      user.setPhoneCode(updatedUser.getPhoneCode());
      user.setPhoneNumber(updatedUser.getPhoneNumber());
      return repo.save(user);
    }).orElseThrow(() -> new RuntimeException("User not found with id " + id));
  }

  public void delete(long id) {
    repo.deleteById(id);
  }
}

