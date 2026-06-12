package jiva.user_mgmt.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Pattern;
import jiva.user_mgmt.enums.BloodGroup;
import jiva.user_mgmt.enums.Gender;

public record UserRequest(
    @NotBlank
    String name,
    @Email
    @NotBlank
    String email,
    @Pattern(regexp = "^\\+\\d{11,13}")
    String phoneNumber,
    @PastOrPresent
    LocalDate dob,
    Gender gender,
    BloodGroup bloodGroup,
    String address,
    String postalCode,
    String city,
    String state,
    String country) {
}
