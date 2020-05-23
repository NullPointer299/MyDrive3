package com.fjb.mydrive3.controller;

import com.fjb.mydrive3.model.NameForm;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

    @ModelAttribute
    NameForm setUpNameForm(){
        return new NameForm();
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView index(ModelAndView mav){
        mav.setViewName("index");
        mav.addObject("nameForm", new NameForm());
        return mav;
    }

    @RequestMapping(value = "/home", method = RequestMethod.GET)
    public String home(){
        return "/index";
    }

    @RequestMapping(value = "/home", method = RequestMethod.POST)
    public ModelAndView home(NameForm nameForm, ModelAndView mav){
        mav.setViewName("home");
        mav.addObject("nameForm", nameForm);
        return mav;
    }
}
