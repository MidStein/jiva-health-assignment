Create Table users (
  id Int Auto_increment Primary Key,
  name Varchar(100) Not Null,
  role Varchar(20) Not Null Check (role In ('DOCTOR', 'NURSE', 'PATIENT')),
  status Varchar(20) Not Null Check (status In ('ACTIVE', 'INACTIVE')),
  joined_date Date Not Null,
  last_active Date Not Null,
  appointments_count Int Not Null Default 0,
  is_prime Boolean Not Null Default False,
  email Varchar(100) Not Null,
  phone_code Int Not Null,
  phone_number Bigint Not Null
);
