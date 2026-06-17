package jiva.user_mgmt;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.hamcrest.Matchers.matchesPattern;

@ActiveProfiles("test")
@AutoConfigureMockMvc
@SpringBootTest
public class UserControllerTest {
  @Autowired
  private MockMvc mockMvc;

  @Test
  public void shouldReturnLocation() throws Exception {
    String requestBody = """
        {
          "name": "Deepak",
          "email": "deepak@gmail.com"
        }
        """;

    mockMvc.perform(post("/api/users")
        .contentType(MediaType.APPLICATION_JSON)
        .content(requestBody))
      .andExpect(header().exists("Location"))
      .andExpect(header().string("Location", matchesPattern(".*/api/users/\\d+")));
  }
}
