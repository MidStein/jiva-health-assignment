package jiva.user_mgmt.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import jiva.user_mgmt.service.UserService;
import jiva.user_mgmt.entity.User;
import jiva.user_mgmt.enums.Role;
import jiva.user_mgmt.enums.Status;
import jiva.user_mgmt.dto.UserRequest;
import jiva.user_mgmt.dto.UserResponse;

@RestController
@CrossOrigin(origins = "*")
class UserController {
  @Autowired
  private UserService svc;

  public UserController(UserService userService) {
    this.svc = userService;
  }

  @GetMapping("/api/users")
  public List<UserResponse> get() {
    return svc.getAll()
    .stream()
    .map((user) -> new UserResponse(
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
  public ResponseEntity<?> create(@Valid @RequestBody UserRequest userRequest) {
    User createdUser = svc.create(new User(
      null,
      userRequest.name().trim(),
      Role.PATIENT,
      Status.ACTIVE,
      LocalDate.now(),
      LocalDate.now(),
      0,
      false,
      userRequest.email(),
      userRequest.phoneNumber(),
      userRequest.gender(),
      userRequest.dob(),
      userRequest.bloodGroup(),
      trimToNull(userRequest.address()),
      trimToNull(userRequest.postalCode()),
      trimToNull(userRequest.city()),
      trimToNull(userRequest.state()),
      trimToNull(userRequest.country())
    ));

    return ResponseEntity.status(HttpStatus.CREATED)
      .body(createdUser);
  }

  private String trimToNull(String str) {
    if (str == null || str.isBlank()) {
      return null;
    }
    return str.trim();
  }
}
