package jiva.user_mgmt.controller;

import org.springframework.web.bind.annotation.*;

import jiva.user_mgmt.service.FamilyMemberService;

@RestController
class FamilyMemberController {
  private final FamilyMemberService svc;

  public FamilyMemberController(FamilyMemberService familyMemberService) {
    this.svc = familyMemberService;
  }

  @GetMapping("/api/familyMembers/total")
  public long getTotalFamilyMembers() {
    return svc.count();
  }
}

