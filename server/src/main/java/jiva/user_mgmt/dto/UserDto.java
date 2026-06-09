package jiva.user_mgmt.dto;

import java.time.LocalDate;

import jiva.user_mgmt.enums.Role;
import jiva.user_mgmt.enums.Status;
import jiva.user_mgmt.enums.Gender;

public record UserDto(
    Long id,
    String name,
    Role role,
    Status status,
    LocalDate joinedDate,
    LocalDate lastActive,
    int appointmentsCount,
    boolean isPrime,
    String email,
    String phoneNumber,
    Gender gender,
    LocalDate dob) {
}
