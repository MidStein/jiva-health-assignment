package jiva.user_mgmt;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class FamilyMemberService {
  private FamilyMemberRepository repo;

  public FamilyMemberService(FamilyMemberRepository familyMemberRepository) {
    this.repo = familyMemberRepository;
  }

  public List<FamilyMember> getAll() {
    return repo.findAll();
  }

  public long totalFamilyMembers() {
    return repo.findAll().size();
  }
}

