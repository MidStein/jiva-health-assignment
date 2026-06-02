package jiva.user_mgmt;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
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
  @Column(name = "phone_code")
  private int phoneCode;
  @Column(name = "phone_number")
  private String phoneNumber;
}

enum Role {
  DOCTOR,
  NURSE,
  PATIENT
}

enum Status {
  ACTIVE,
  INACTIVE
}
