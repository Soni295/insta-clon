CREATE TABLE `users` (
  `user_id` INT(200) AUTO_INCREMENT PRIMARY KEY,
  `user_name` VARCHAR(50) NOT NULL,
  `Password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255)
)

/* describe posts*/
CREATE TABLE `posts` (
 `post_id` INT(200) AUTO_INCREMENT PRIMARY KEY,
 `user_id` INT(200),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
)
