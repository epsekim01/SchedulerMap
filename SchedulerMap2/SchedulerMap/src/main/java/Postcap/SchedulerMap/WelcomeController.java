package Postcap.SchedulerMap;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/auth")
public class WelcomeController {
	//Login form
	@RequestMapping("/login.html")
	public String login() {
		return "login.html";
	}
	
	//Login form with error
	@RequestMapping("/login-error.html")
	public String loginError(Model model) {
		model.addAttribute("loginError", true);
		return "login.html";
	}
}
