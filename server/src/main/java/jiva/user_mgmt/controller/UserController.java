package jiva.user_mgmt.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jiva.user_mgmt.service.UserService;
import jiva.user_mgmt.entity.User;
import jiva.user_mgmt.dto.UserDto;

@RestController
@CrossOrigin(origins = "*")
class UserController {
  @Autowired
  private UserService svc;

  public UserController(UserService userService) {
    this.svc = userService;
  }

  @GetMapping("/api/users")
  public List<UserDto> get() {
    return svc.getAll()
    .stream()
    .map((user) -> new UserDto(
      user.getId(),
      user.getName(),
      user.getRole(),
      user.getStatus(),
      user.getJoinedDate(),
      user.getLastActive(),
      user.getAppointmentsCount(),
      user.isPrime(),
      user.getEmail(),
      user.getPhoneNumber(),
      user.getGender(),
      user.getDob()
    ))
    .toList();
  }

  @PostMapping("/api/users")
  public User create(@RequestBody User user) {
    return svc.create(user);
  }
}

