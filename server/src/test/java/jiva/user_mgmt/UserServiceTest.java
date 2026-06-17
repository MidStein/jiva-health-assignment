package jiva.user_mgmt;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import jiva.user_mgmt.service.UserService;

@SpringBootTest
@ActiveProfiles("test")
public class UserServiceTest {
  @Autowired
  private UserService svc;

  @Test
  public void updateCrashesApp() {
    // svc.update(1, new User());
  }
}
