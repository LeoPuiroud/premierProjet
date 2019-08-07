package com.example.demo.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.example.demo.services.MyUserDetailsService;


@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private MyUserDetailsService muds;
	
	private String url = "http://localhost:8080/boot";

	@Override
    protected void configure(HttpSecurity http) throws Exception
    {
		//ces deux lignes servent pour enlever l'authentification et permettre les requetes post/put
//		http.authorizeRequests().anyRequest().permitAll();
//		http.csrf().disable().authorizeRequests().antMatchers(HttpMethod.OPTIONS,"/boot/**").permitAll();
    
		//pour mettre en place la securité
		//http.csrf().disable().authorizeRequests().antMatchers(HttpMethod.OPTIONS,"/boot/**/**").authenticated().and().cors().disable();
		http.cors().disable().csrf().disable().authorizeRequests().antMatchers(HttpMethod.OPTIONS,"/boot/**/**").authenticated().and().formLogin().and().httpBasic();
    }
	
	@Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception
    {
		auth.userDetailsService(muds);
  }
	
	
	
	 @Bean
	    public PasswordEncoder getPasswordEncoder() {
	        return new BCryptPasswordEncoder();
	    }
	
}
