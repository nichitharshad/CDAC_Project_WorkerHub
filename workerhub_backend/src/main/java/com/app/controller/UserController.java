package com.app.controller;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserChangePassDTO;
import com.app.dto.UserDeleteDTO;
import com.app.dto.UserEditDTO;
import com.app.dto.UserLoginDTO;
import com.app.dto.UserSignUpDTO;
import com.app.entity.User;
import com.app.service.UserService;
import com.app.service.WorkerService;

@RequestMapping("/user")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
  
  @Autowired
  private UserService userServ;
  
  @Autowired
  private ModelMapper modelmapper;
  
 
  
  @Autowired
  private WorkerService workerServ;
  
  @GetMapping("/allUsers")
  public ResponseEntity<?> getallUsers() {
    return ResponseEntity.ok(userServ.getall());
  }
  
  
  @GetMapping("/allworkers")
  public ResponseEntity<?> getallWorkers(){
	  return ResponseEntity.ok(workerServ.getallWorker());
	  
  }
  
  @PostMapping("/add")
  public ResponseEntity<?> addUser(@RequestBody UserSignUpDTO u) {
    User user = modelmapper.map(u, User.class);
    
    if (userServ.existsByEmail(u.getEmail())) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body("Email is already in use");
    }
    
    return new ResponseEntity<>(userServ.addUser(user), HttpStatus.CREATED);
  }
  
  @GetMapping("/{id}")
  public ResponseEntity<?> deleteUser(@PathVariable Long id)
  {
	  
	  System.out.println("Hii" + id);
	  try {
		  userServ.deleteuserbyId(id);
		  return ResponseEntity.ok("User Deleted Successfully !!!");
	  }
	  catch(Exception e)
	  {
		  return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete user");
	  }
  }
  
  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody UserLoginDTO user) {
      try {
          User u = userServ.getUser(user.getEmail(), user.getPassword());
          System.out.println(u);
          if (u != null) {
             
              return ResponseEntity.ok(u)    ;        //(new JwtResponse(token, userProfileDTO));
          } else {
              return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
          }
      } catch (Exception e) {
          return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to authenticate user");
      }
  }

  @PostMapping("/edit")
  public ResponseEntity<?> updateUser(@RequestBody UserEditDTO userEditDTO) {
      System.out.println("HIii");
      System.out.println(userEditDTO);
      try {
    	  System.out.println("first");
          User user = userServ.getUserByEmail(userEditDTO.getEmail());
          System.out.println("last");
          System.out.println(user);
          if (user != null) 
          {
              user.setPhone(userEditDTO.getPhone());
              user.setAddress(userEditDTO.getAddress());
              userServ.updateUser(user.getPhone(), user.getAddress(), user.getEmail());
              return ResponseEntity.ok("User profile updated successfully");
          } else 
              return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
          
      } catch (Exception e) {
          return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update user profile");
      }
  }
  
  @PostMapping("/changepass")
  public ResponseEntity<?> changePass(@RequestBody UserChangePassDTO user){
	  try {
		  System.out.println(user);
		  User u = userServ.getUserByEmail(user.getEmail());
		  System.out.println(u);
		  if (u != null && (u.getPassword().equals( user.getPassword()))) {
			 userServ.updatePass(u.getEmail(), user.getNewPass());
			 return ResponseEntity.ok("User Password updated successfully");
			  
		  }
		  else
			  return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
	  }
	  catch (Exception e) {
		  return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update user pass");
	  }
  }
  
  @PostMapping("/delete")
  public ResponseEntity<?> deleteUser(@RequestBody UserDeleteDTO user){
	  System.out.println("Hii");
	  System.out.println(user);
	  try {
		  User u = userServ.getUser(user.getEmail(), user.getPassword());
		  if(u != null) {
			  userServ.deleteUser(u);
			  return ResponseEntity.ok("User was deleted");
		  }else
			  return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Invalid password");
	  }
	  catch (Exception e) {
		  return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete user");
	  }
  }
  
}