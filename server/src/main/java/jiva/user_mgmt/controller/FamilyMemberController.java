package jiva.user_mgmt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jiva.user_mgmt.service.FamilyMemberService;

@RestController
@CrossOrigin(origins = "*")
class FamilyMemberController {
  @Autowired
  private FamilyMemberService svc;

  public FamilyMemberController(FamilyMemberService familyMemberService) {
    this.svc = familyMemberService;
  }

  @GetMapping("/api/familyMembers/total")
  public long getUsers() {
    return svc.count();
  }
}

