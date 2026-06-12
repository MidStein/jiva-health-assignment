package jiva.user_mgmt.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jiva.user_mgmt.enums.Role;
import jiva.user_mgmt.enums.Status;
import jiva.user_mgmt.enums.Gender;
import jiva.user_mgmt.enums.BloodGroup;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "users")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  @Enumerated(EnumType.STRING)
  private Role role;
  @Enumerated(EnumType.STRING)
  private Status status;
  @Column(name = "joined_date")
  private LocalDate joinedDate;
  @Column(name = "last_active")
  private LocalDate lastActive;
  @Column(name = "appointments_count")
  private int appointmentsCount;
  @Column(name = "is_prime")
  private boolean isPrime;
  private String email;
  @Column(name = "phone_number")
  private String phoneNumber;
  @Enumerated(EnumType.STRING)
  private Gender gender;
  private LocalDate dob;
  @Column(name = "blood_group")
  @Enumerated(EnumType.STRING)
  private BloodGroup bloodGroup;
  private String address;
  @Column(name = "postal_code")
  private String postalCode;
  private String city;
  private String state;
  private String country;
}
