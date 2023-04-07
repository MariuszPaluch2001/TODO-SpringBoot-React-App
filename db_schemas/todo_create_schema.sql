CREATE TABLE `to_do` (
  `id` int NOT NULL AUTO_INCREMENT,
  `task_name` varchar(200) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `is_finished` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
