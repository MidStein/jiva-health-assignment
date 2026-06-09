package jiva.user_mgmt.service;

import java.util.List;
import org.springframework.stereotype.Service;

import jiva.user_mgmt.repository.FamilyMemberRepository;
import jiva.user_mgmt.entity.FamilyMember;

@Service
public class FamilyMemberService {
  private FamilyMemberRepository repo;

  public FamilyMemberService(FamilyMemberRepository familyMemberRepository) {
    this.repo = familyMemberRepository;
  }

  public List<FamilyMember> getAll() {
    return repo.findAll();
  }

  public long count() {
    return repo.count();
  }
}

