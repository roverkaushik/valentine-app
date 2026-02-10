package com.valentine.kaushik.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ValentineController {
	
	@GetMapping("/")
	public String home() {
		return "index";
	}

}
