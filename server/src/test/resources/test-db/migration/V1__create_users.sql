Create Table users (
  id Int Generated Always As Identity Primary Key,
  name Text Not Null,
  role Text Not Null Check (role In ('DOCTOR', 'NURSE', 'PATIENT')),
  status Text Not Null Check (status In ('ACTIVE', 'INACTIVE')),
  joined_date Date Not Null,
  last_active Date Not Null,
  appointments_count Int Not Null Default 0,
  is_prime Boolean Not Null Default False,
  email Text Not Null,
  phone_code Int Not Null,
  phone_number Bigint Not Null
);
