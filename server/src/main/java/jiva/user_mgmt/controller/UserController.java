package jiva.user_mgmt.controller;

import java.net.URI;
import java.time.LocalDate;
import java.time.ZoneOffset;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import jakarta.validation.Valid;
import jiva.user_mgmt.service.UserService;
import jiva.user_mgmt.entity.User;
import jiva.user_mgmt.enums.Role;
import jiva.user_mgmt.enums.Status;
import jiva.user_mgmt.dto.UserRequest;
import jiva.user_mgmt.dto.UserResponse;
import jiva.user_mgmt.dto.UserSummaryResponse;

@RestController
public class UserController {
  private final UserService svc;

  public UserController(UserService userService) {
    this.svc = userService;
  }

  @GetMapping("/api/users")
  public List<UserSummaryResponse> getAllSummary() {
    return svc.getAll()
    .stream()
    .map((user) -> new UserSummaryResponse(
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

  @GetMapping("/api/users/{id}")
  public UserResponse getUser(@PathVariable Long id) {
    User user =  svc.getUser(id);
    return new UserResponse(
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
      user.getDob(),
      user.getBloodGroup(),
      user.getAddress(),
      user.getPostalCode(),
      user.getCity(),
      user.getState(),
      user.getCountry()
    );
  }

  @PostMapping("/api/users")
  public ResponseEntity<Void> create(@Valid @RequestBody UserRequest userRequest) {
    User createdUser = svc.create(new User(
      null,
      userRequest.name().trim(),
      Role.PATIENT,
      Status.ACTIVE,
      LocalDate.now(ZoneOffset.UTC),
      LocalDate.now(ZoneOffset.UTC),
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

    URI location = ServletUriComponentsBuilder.fromCurrentRequest()
      .path("/{id}")
      .buildAndExpand(createdUser.getId())
      .toUri();

    return ResponseEntity.created(location).build();
  }

  private String trimToNull(String str) {
    if (str == null || str.isBlank()) {
      return null;
    }
    return str.trim();
  }
}
