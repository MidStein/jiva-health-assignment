package jiva.user_mgmt.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

import jiva.user_mgmt.entity.FamilyMember;

public interface FamilyMemberRepository extends CrudRepository<FamilyMember, Long> {
  List<FamilyMember> findAll();
  long count();
}
