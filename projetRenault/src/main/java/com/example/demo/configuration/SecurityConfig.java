package com.example.demo.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
    protected void configure(HttpSecurity security) throws Exception
    {
    	security.authorizeRequests().anyRequest().permitAll();
    	security.csrf().disable().authorizeRequests().antMatchers(HttpMethod.OPTIONS,"/boot/**").permitAll();
    }
}
