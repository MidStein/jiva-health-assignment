package jiva.user_mgmt;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
class UserController {
  @Autowired
  private UserService svc;

  public UserController(UserService userService) {
    this.svc = userService;
  }

  @GetMapping("/api/users")
  public List<User> getUsers() {
    return svc.getAll();
  }

  @PostMapping("/api/users")
  public User createUser(@RequestBody User user) {
    return svc.create(user);
  }

  @PutMapping("/api/users/{id}")
  public User updateUser(@PathVariable int id, @RequestBody User user) {
    return svc.update(id, user);
  }

  @DeleteMapping("/api/users/{id}")
  public void deleteUser(@PathVariable int id) {
    svc.delete(id);
  }
}

