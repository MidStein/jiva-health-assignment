package jiva.user_mgmt;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
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
}
