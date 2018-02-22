DROP DATABASE IF EXISTS walkout;
CREATE DATABASE walkout;
USE walkout;
CREATE TABLE `attendees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL UNIQUE,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);
