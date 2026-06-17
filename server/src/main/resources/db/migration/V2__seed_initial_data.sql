INSERT INTO users (id,
  name,
  role,
  status,
  joined_date,
  last_active,
  appointments_count,
  email,
  phone_number,
  gender,
  dob,
  blood_group,
  address,
  postal_code,
  city,
  state,
  country) VALUES
  (1, 'Alice Williams', 'PATIENT', 'ACTIVE', '2025-01-15', '2026-03-23', 12, 'alice.williams@email.com', '+15551111111', 'FEMALE', '1988-07-14', 'B_POSITIVE', '123 Maple Street', '62701', 'Springfield', 'Illinois', 'United States of America'),
  (2, 'Brian Moore', 'DOCTOR', 'ACTIVE', '2023-08-10', '2026-03-20', 45, 'brian.moore@clinicmail.com', '+15552222222', 'MALE', '1980-03-22', 'O_POSITIVE', '456 Oak Avenue', '53703', 'Madison', 'Wisconsin', 'United States of America'),
  (3, 'Cecilia Smith', 'PATIENT', 'INACTIVE', '2024-05-22', '2025-12-30', 5, 'cecilia.smith@email.com', '+15553333333', 'FEMALE', '1992-09-18', 'A_POSITIVE', '789 Pine Road', '78701', 'Austin', 'Texas', 'United States of America'),
  (4, 'David Kim', 'NURSE', 'ACTIVE', '2022-11-03', '2026-03-22', 30, 'david.kim@hospital.org', '+15554444444', 'MALE', '1995-01-16', 'B_NEGATIVE', '321 Cedar Lane', '98101', 'Seattle', 'Washington', 'United States of America'),
  (5, 'Eva Lopez', 'PATIENT', 'ACTIVE', '2025-07-18', '2026-03-21', 8, 'eva.lopez@email.com', '+15555555555', 'FEMALE', '1987-05-12', 'A_POSITIVE', '654 Birch Drive', '33101', 'Miami', 'Florida', 'United States of America');

ALTER TABLE users
ALTER COLUMN id RESTART WITH 6;

Insert Into family_members (user_id,
  name,
  relation,
  phone_number,
  dob) Values
  (1, 'Emily Williams', 'Daughter', '+15551111113', '2001-07-14'),
  (1, 'Sarah Williams', 'Spouse', '+15551111114', '1978-11-22'),
  (3, 'Priya Smith', 'Spouse', '+919876500011', '1958-06-10'),
  (3, 'Arjun Smith', 'Son', '+919876500012', '2012-12-05'),
  (3, 'Ananya Smith', 'Daughter', '+919876500013', '2015-04-21'),
  (4, 'Robert Kim', 'Father', '+15554444401', '1958-01-16'),
  (4, 'Linda Kim', 'Mother', '+15554444402', '1960-08-09'),
  (5, 'David Lopez', 'Brother', '+34612345671', '1992-05-12'),
  (5, 'Maria Lopez', 'Sister', '+34612345672', '1995-10-27'),
  (5, 'Garmen Lopez', 'Mother', '+34612345673', '1967-03-03');
