package jiva.user_mgmt;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
  List<User> findAll();
}
