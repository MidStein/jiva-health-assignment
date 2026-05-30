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

@Entity
@Table(name = "users")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
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
  private Long phoneNumber;

  // No-argument constructor required by JPA
  public User() {
  }

  // All-arguments constructor
  public User(int id, String name, Role role, Status status, LocalDate joinedDate, LocalDate lastActive, int appointmentsCount, boolean isPrime, String email, int phoneCode, Long phoneNumber) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.status = status;
    this.joinedDate = joinedDate;
    this.lastActive = lastActive;
    this.appointmentsCount = appointmentsCount;
    this.isPrime = isPrime;
    this.email = email;
    this.phoneCode = phoneCode;
    this.phoneNumber = phoneNumber;
  }

  // Getters and Setters
  public int getId() {
    return id;
  }
  
  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Role getRole() {
    return role;
  }

  public void setRole(Role role) {
    this.role = role;
  }

  public Status getStatus() {
    return status;
  }

  public void setStatus(Status status) {
    this.status = status;
  }

  public LocalDate getJoinedDate() {
    return joinedDate;
  }

  public void setJoinedDate(LocalDate joinedDate) {
    this.joinedDate = joinedDate;
  }

  public LocalDate getLastActive() {
    return lastActive;
  }

  public void setLastActive(LocalDate lastActive) {
    this.lastActive = lastActive;
  }

  public int getAppointmentsCount() {
    return appointmentsCount;
  }

  public void setAppointmentsCount(int appointmentsCount) {
    this.appointmentsCount = appointmentsCount;
  }

  public boolean isPrime() {
    return isPrime;
  }

  public void setPrime(boolean isPrime) {
    this.isPrime = isPrime;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public int getPhoneCode() {
    return phoneCode;
  }

  public void setPhoneCode(int phoneCode) {
    this.phoneCode = phoneCode;
  }

  public Long getPhoneNumber() {
    return phoneNumber;
  }

  public void setPhoneNumber(Long phoneNumber) {
    this.phoneNumber = phoneNumber;
  }
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
