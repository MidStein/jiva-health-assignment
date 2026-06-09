package jiva.user_mgmt.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

import jiva.user_mgmt.entity.User;

public interface UserRepository extends CrudRepository<User, Long> {
  List<User> findAll();
}
