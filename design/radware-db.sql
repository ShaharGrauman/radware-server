-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: radware
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attacks`
--

DROP TABLE IF EXISTS `attacks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attacks` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=98988 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attacks`
--

LOCK TABLES `attacks` WRITE;
/*!40000 ALTER TABLE `attacks` DISABLE KEYS */;
INSERT INTO `attacks` VALUES (1,'attack1'),(2,'attack2'),(3,'attack3'),(4,'attack4'),(5,'attack5'),(6,'attack6'),(7,'attack7'),(8,'attack8'),(9,'attack9'),(10,'attack10'),(11,'attack11'),(12,'attack11'),(13,'attack12'),(14,'attack13'),(15,'attack1'),(16,'attack2'),(17,'attack3'),(18,'attack4'),(19,'attack5'),(20,'attack6'),(21,'attack7'),(22,'attack8'),(23,'attack9'),(24,'attack10'),(25,'attack11'),(26,'attack11'),(27,'attack12'),(28,'attack13'),(29,NULL),(55,'saeed'),(99,'attack90'),(100,'attack901'),(101,'attack9011'),(102,'attack91'),(103,'attack991'),(106,'attack991'),(888,'attack1'),(98987,'attack1');
/*!40000 ALTER TABLE `attacks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `external_references`
--

DROP TABLE IF EXISTS `external_references`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `external_references` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `signatureId` int(10) DEFAULT NULL,
  `type` enum('cveid','bugtraqid') DEFAULT NULL,
  `reference` varchar(2048) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_signature_id_ex_ref` (`signatureId`),
  CONSTRAINT `FK_signature_id_ex_ref` FOREIGN KEY (`signatureId`) REFERENCES `signatures` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=252587 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `external_references`
--

LOCK TABLES `external_references` WRITE;
/*!40000 ALTER TABLE `external_references` DISABLE KEYS */;
INSERT INTO `external_references` VALUES (2,4,'cveid','http://www.security.com/bid/214'),(5,1,'cveid','http://www.security.com/bid/214'),(6,1,'bugtraqid','http://www.BOOS.com/55'),(8,1,'bugtraqid','http://www.cve.com/bid/24'),(9,1,'cveid','http://www.security.com/'),(10,29,'cveid','http://www.security.com/bid/214'),(11,30,'cveid','http://www.security.com/bid/214'),(15,101,'cveid','http://www.security.com/bid/214'),(19,103,'cveid','http://www.security.com/bid/214'),(8787,2828,'cveid','http://www.security.com/bid/214'),(252586,2424,'cveid','http://www.security.com/bid/214');
/*!40000 ALTER TABLE `external_references` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `signatureId` int(10) DEFAULT NULL,
  `file` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_signature_id_files` (`signatureId`),
  CONSTRAINT `FK_signature_id_files` FOREIGN KEY (`signatureId`) REFERENCES `signatures` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28760 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (1,2,'this is sample FILE'),(2,3,'this is sample FILE'),(3,4,'this is sample FILE'),(4,5,'this is sample FILE'),(5,6,'this is sample FILE'),(6,7,'this is sample FILE'),(7,8,'this is sample FILE'),(9,8,'this is sample FILE'),(23,55,'this is sample FILE'),(55,1,'Simple File'),(56,1,'Simple File'),(57,56,'this is sample FILE'),(66,28,'this is sample FILE'),(67,29,'this is sample FILE'),(100,101,'this is sample FILE'),(108,103,'this is sample FILE'),(2825,2828,'Simple File'),(28759,2424,'Simple File');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `history_users_actions`
--

DROP TABLE IF EXISTS `history_users_actions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `history_users_actions` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) DEFAULT NULL,
  `action_name` enum('add','edit','search','delete','report','export_for_git','export_for_qa','export_for_testing') NOT NULL,
  `system_name` varchar(50) NOT NULL,
  `screen_name` varchar(50) NOT NULL,
  `description` text,
  `time` time NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_user_id_history` (`user_id`),
  CONSTRAINT `FK_user_id_history` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history_users_actions`
--

LOCK TABLES `history_users_actions` WRITE;
/*!40000 ALTER TABLE `history_users_actions` DISABLE KEYS */;
INSERT INTO `history_users_actions` VALUES (1,1,'add','new_signature','system1','added signature','17:05:09','2020-01-15'),(2,2,'edit','edit_signature','system1','edited signature','17:05:09','2020-01-15'),(3,2,'add','new_signature','system3','added signature','17:05:09','2020-01-15'),(4,2,'edit','edit_signature','system3','edited signature','17:05:09','2020-01-15'),(5,4,'export_for_git','export_for_git','system2','exported data','17:05:09','2020-01-15'),(6,4,'export_for_git','export','system2','exported data','17:05:09','2020-01-16'),(7,5,'search','search','system1','searched for signature','17:05:09','2020-01-15'),(8,5,'search','search','system1','searched for signature','17:05:09','2020-01-15'),(9,6,'report','report','system3','report...','17:05:09','2020-01-15'),(10,6,'edit','edit_signature','system3','edited signature','17:05:09','2020-01-15'),(11,7,'export_for_testing','export','system2','exported data','17:05:09','2020-01-16'),(12,7,'export_for_testing','export','system2','exported data','17:05:09','2020-01-17'),(13,1,'add','new_signature','system1','added signature','17:05:25','2020-01-18'),(14,2,'edit','edit_signature','system1','edited signature','17:05:25','2020-01-19'),(15,2,'add','new_signature','system3','added signature','17:05:25','2020-01-20'),(16,2,'edit','edit_signature','system3','edited signature','17:05:25','2020-01-11'),(17,4,'export_for_qa','export','system2','exported data','17:05:25','2020-01-12'),(18,4,'export_for_qa','export','system2','exported data','17:05:25','2020-01-13'),(19,5,'search','search','system1','searched for signature','17:05:25','2020-01-14'),(20,5,'search','search','system1','searched for signature','17:05:25','2020-01-21'),(21,6,'report','report','system3','report...','17:05:25','2020-01-22'),(22,6,'edit','edit_signature','system3','edited signature','17:05:25','2020-01-23'),(23,7,'export_for_qa','export','system2','exported data','17:05:25','2020-01-24'),(24,7,'export_for_qa','export','system2','exported data','17:05:25','2020-01-25');
/*!40000 ALTER TABLE `history_users_actions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) DEFAULT NULL,
  `time` time NOT NULL,
  `date` date NOT NULL,
  `success` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_login_user` (`user_id`),
  CONSTRAINT `FK_login_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,1,'17:05:20','2020-01-15',1),(2,2,'17:05:20','2020-01-15',1),(3,3,'17:05:20','2020-01-15',1),(4,4,'17:05:20','2020-01-15',1),(5,5,'17:05:20','2020-01-15',1),(6,6,'17:05:20','2020-01-15',1),(7,7,'17:05:20','2020-01-15',0),(8,7,'17:05:20','2020-01-15',1),(9,8,'17:05:20','2020-01-15',1),(10,9,'17:05:20','2020-01-15',1),(11,10,'17:05:20','2020-01-15',0),(12,10,'17:05:20','2020-01-15',1),(13,11,'17:05:20','2020-01-15',1),(14,12,'17:05:20','2020-01-15',1),(15,14,'17:05:20','2020-01-15',0),(16,14,'17:05:20','2020-01-15',1);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parameters`
--

DROP TABLE IF EXISTS `parameters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parameters` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `signatureId` int(10) DEFAULT NULL,
  `parameter` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_signature_id_parameters` (`signatureId`),
  CONSTRAINT `FK_signature_id_parameters` FOREIGN KEY (`signatureId`) REFERENCES `signatures` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25879 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parameters`
--

LOCK TABLES `parameters` WRITE;
/*!40000 ALTER TABLE `parameters` DISABLE KEYS */;
INSERT INTO `parameters` VALUES (1,1,'this is sample PARAMETERS!'),(2,1,'this is sample PARAMETERS!'),(3,2,'this is sample PARAMETERS!'),(4,2,'this is sample PARAMETERS!'),(5,3,'this is sample PARAMETERS!'),(6,3,'this is sample PARAMETERS!'),(7,4,'this is sample PARAMETERS!'),(8,5,'this is sample PARAMETERS!'),(111,103,'this is sample PARAMETERS!'),(9898,2828,'this is sample PARAMETERS!'),(25878,2424,'this is sample PARAMETERS!');
/*!40000 ALTER TABLE `parameters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (1,'Researcher dashboard'),(2,'Create/update signature'),(3,'Search signatures'),(4,'Export signatures'),(5,'Update signature status'),(6,'QA dashboard'),(7,'Update QA performance internal status'),(8,'Update QA automation internal status'),(9,'Update QA manual internal status'),(10,'Researcher dashboard'),(11,'Create/update signature'),(12,'Search signatures'),(13,'Export signatures'),(14,'Update signature status'),(15,'QA dashboard'),(16,'Update QA performance internal status'),(17,'Update QA automation internal status'),(18,'Update QA manual internal status');
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions_roles`
--

DROP TABLE IF EXISTS `permissions_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions_roles` (
  `role_id` int(10) NOT NULL,
  `permission_id` int(10) NOT NULL,
  PRIMARY KEY (`role_id`,`permission_id`),
  KEY `FK_permission_id` (`permission_id`),
  CONSTRAINT `FK_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_role_per` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions_roles`
--

LOCK TABLES `permissions_roles` WRITE;
/*!40000 ALTER TABLE `permissions_roles` DISABLE KEYS */;
INSERT INTO `permissions_roles` VALUES (2,1),(2,2),(2,3),(3,3),(2,4),(2,5),(4,6),(5,6),(6,6),(4,7),(5,7),(6,7),(4,8),(5,8),(6,8),(4,9),(5,9),(6,9);
/*!40000 ALTER TABLE `permissions_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','admin'),(2,'researcher','researcher'),(3,'support','support'),(4,'manual_qa','manual_qa'),(5,'performance_qa','performance_qa'),(6,'automation_qa','automation_qa'),(7,'admin','admin'),(8,'researcher','researcher'),(9,'support','support'),(10,'manual_qa','manual_qa'),(11,'performance_qa','performance_qa'),(12,'automation_qa','automation_qa');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles_users`
--

DROP TABLE IF EXISTS `roles_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles_users` (
  `role_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  PRIMARY KEY (`role_id`,`user_id`),
  KEY `FK_user_id` (`user_id`),
  CONSTRAINT `FK_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles_users`
--

LOCK TABLES `roles_users` WRITE;
/*!40000 ALTER TABLE `roles_users` DISABLE KEYS */;
INSERT INTO `roles_users` VALUES (1,1),(1,2),(1,3),(2,4),(2,5),(3,5),(2,6),(3,6),(3,7),(3,8),(4,8),(3,9),(4,9),(4,10),(4,11),(5,12),(5,13),(6,14),(6,15);
/*!40000 ALTER TABLE `roles_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `signature_status_histories`
--

DROP TABLE IF EXISTS `signature_status_histories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `signature_status_histories` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `signature_id` int(10) DEFAULT NULL,
  `user_id` int(10) DEFAULT NULL,
  `status` enum('in_progress','in_test','in_qa','published','deleted') DEFAULT NULL,
  `time` time NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_signature_id_status` (`signature_id`),
  KEY `FK_user_id_status` (`user_id`),
  CONSTRAINT `FK_signature_id_status` FOREIGN KEY (`signature_id`) REFERENCES `signatures` (`id`),
  CONSTRAINT `FK_user_id_status` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=208 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `signature_status_histories`
--

LOCK TABLES `signature_status_histories` WRITE;
/*!40000 ALTER TABLE `signature_status_histories` DISABLE KEYS */;
INSERT INTO `signature_status_histories` VALUES (161,1,1,'in_progress','17:12:12','2020-01-15'),(162,1,1,'in_progress','17:12:19','2020-01-15'),(163,2,10,'in_test','17:12:19','2020-01-15'),(164,1,1,'in_progress','17:12:28','2020-01-15'),(165,2,10,'in_test','17:12:28','2020-01-15'),(166,2,11,'in_progress','17:12:28','2020-01-15'),(167,1,1,'in_progress','17:12:33','2020-01-15'),(168,2,10,'in_test','17:12:33','2020-01-15'),(169,2,11,'in_progress','17:12:33','2020-01-15'),(170,3,9,'in_progress','17:12:33','2020-01-15'),(191,3,8,'in_qa','17:12:58','2020-01-15'),(192,4,2,'in_progress','17:13:02','2020-01-15'),(193,5,2,'in_test','17:13:07','2020-01-15'),(194,6,3,'in_progress','17:13:20','2020-01-15'),(195,7,4,'in_progress','17:13:25','2020-01-15'),(196,8,2,'in_progress','17:13:30','2020-01-15'),(197,9,5,'in_qa','17:13:35','2020-01-15'),(198,10,6,'in_test','17:13:39','2020-01-15'),(199,11,7,'in_progress','17:13:46','2020-01-15'),(200,11,11,'in_progress','17:13:51','2020-01-15'),(201,12,12,'in_test','17:13:59','2020-01-15'),(202,13,9,'in_progress','17:14:03','2020-01-15'),(203,14,10,'in_progress','17:14:08','2020-01-15'),(204,15,11,'in_qa','17:14:12','2020-01-15'),(205,15,9,'in_test','17:14:16','2020-01-15');
/*!40000 ALTER TABLE `signature_status_histories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `signatures`
--

DROP TABLE IF EXISTS `signatures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `signatures` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) DEFAULT NULL,
  `attack_id` int(10) DEFAULT NULL,
  `pattern_id` int(10) NOT NULL,
  `type` enum('vuln','vuln_ex','vuln_reg_ex') DEFAULT NULL,
  `creation_time` varchar(25) NOT NULL,
  `creation_date` varchar(25) NOT NULL,
  `status` enum('in_progress','in_test','in_qa','published','deleted') DEFAULT NULL,
  `in_qa_internal_status_manual` enum('init','passed','failed') DEFAULT NULL,
  `in_qa_internal_status_performance` enum('init','passed','failed') DEFAULT NULL,
  `in_qa_internal_status_automation` enum('init','passed','failed') DEFAULT NULL,
  `vuln_data` text NOT NULL,
  `keep_order` tinyint(1) DEFAULT NULL,
  `start_break` varchar(255) DEFAULT NULL,
  `end_break` varchar(255) DEFAULT NULL,
  `right_index` int(10) DEFAULT NULL,
  `scan_uri` tinyint(1) DEFAULT NULL,
  `scan_header` tinyint(1) DEFAULT NULL,
  `scan_body` tinyint(1) DEFAULT NULL,
  `scan_parameters` tinyint(1) DEFAULT NULL,
  `scan_file_name` tinyint(1) DEFAULT NULL,
  `severity` enum('low','medium','high') DEFAULT NULL,
  `description` text,
  `test_data` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pattern_id` (`pattern_id`),
  KEY `FK_created_by` (`user_id`),
  KEY `FK_attack_id` (`attack_id`),
  CONSTRAINT `FK_attack_id` FOREIGN KEY (`attack_id`) REFERENCES `attacks` (`id`),
  CONSTRAINT `FK_created_by` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2830 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `signatures`
--

LOCK TABLES `signatures` WRITE;
/*!40000 ALTER TABLE `signatures` DISABLE KEYS */;
INSERT INTO `signatures` VALUES (1,1,1,123451,'vuln','17:04:44','2020-01-15','published','init','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(2,2,1,123452,'vuln','17:04:44','2020-01-15','published','init','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(3,2,1,123453,'vuln','17:04:44','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(4,2,2,123454,'vuln','17:04:44','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(5,3,2,123455,'vuln','17:04:44','2020-01-15','in_test','passed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(6,5,2,123456,'vuln','17:04:44','2020-01-15','in_test','passed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(7,5,3,123457,'vuln','17:04:44','2020-01-15','in_test','init','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(8,7,3,123458,'vuln','17:04:44','2020-01-15','in_progress','init','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(9,8,4,123459,'vuln','17:04:44','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(10,9,5,1234510,'vuln','17:04:44','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(11,9,6,1234511,'vuln','17:04:44','2020-01-15','in_qa','init','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(12,10,7,1234512,'vuln','17:04:44','2020-01-15','in_qa','init','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(13,12,8,1234513,'vuln','17:04:44','2020-01-15','in_progress','passed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(14,12,10,1234514,'vuln','17:04:44','2020-01-15','in_qa','passed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(15,14,10,1234515,'vuln','17:04:44','2020-01-15','in_progress','init','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(28,2,2,2828,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(29,2,2,2929,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(30,3,10,3030,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(33,2,2,36352,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(45,2,2,9875,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(48,2,2,8888,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(55,2,2,5555,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(56,2,2,5656,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(99,2,2,2929929,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln updateee data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is Update FAKE signature','this is Update FAKE test_data'),(101,3,10,101010,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(103,4,10,103103,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(2424,NULL,NULL,858745,'vuln','Invalid date','2020-01-15','in_progress','init','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(2828,1,1,242424,'vuln','Invalid date','2020-01-15','in_progress','init','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data');
/*!40000 ALTER TABLE `signatures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` enum('active','locked','deleted') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'amins1','0524660335','123123','active'),(2,'faisal','0524660335','222111444555','active'),(3,'avi','0524660335','123123','active'),(4,'gabi','0524660335','4466558833','active'),(5,'tamar','0524660335','123123','active'),(6,'sara','0524660335','sad123e','active'),(7,'soha','0524660335','123123','active'),(8,'adel','0524660335','retg546','active'),(9,'jack','0524660335','123123','active'),(10,'jhon','0524660335','123123','active'),(11,'snow','0524660335','111333999ok','locked'),(12,'petter','0524660335','123123','active'),(13,'moh','0524660335','dangerous','active'),(14,'sobhi','0524660335','123123','active'),(15,'dalia','0524660335','123123','deleted'),(16,'amins1','0524660335','123123','active'),(17,'faisal','0524660335','222111444555','active'),(18,'avi','0524660335','123123','active'),(19,'gabi','0524660335','4466558833','active'),(20,'tamar','0524660335','123123','active'),(21,'sara','0524660335','sad123e','active'),(22,'soha','0524660335','123123','active'),(23,'adel','0524660335','retg546','active'),(24,'jack','0524660335','123123','active'),(25,'jhon','0524660335','123123','active'),(26,'snow','0524660335','111333999ok','locked'),(27,'petter','0524660335','123123','active'),(28,'moh','0524660335','dangerous','active'),(29,'sobhi','0524660335','123123','active'),(30,'dalia','0524660335','123123','deleted');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vuln_data_extras`
--

DROP TABLE IF EXISTS `vuln_data_extras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vuln_data_extras` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `signatureId` int(10) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  KEY `FK_signature_id_data_ex` (`signatureId`),
  CONSTRAINT `FK_signature_id_data_ex` FOREIGN KEY (`signatureId`) REFERENCES `signatures` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25257 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vuln_data_extras`
--

LOCK TABLES `vuln_data_extras` WRITE;
/*!40000 ALTER TABLE `vuln_data_extras` DISABLE KEYS */;
INSERT INTO `vuln_data_extras` VALUES (2,1,'this is sample desc'),(3,5,'this is sample desc'),(4,4,'this is sample Desc'),(5,1,'this is sample desc'),(6,9,'this is sample desc'),(7,8,'this is sample desc'),(91,103,NULL),(2564,2828,NULL),(25256,2424,NULL);
/*!40000 ALTER TABLE `vuln_data_extras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `web_servers`
--

DROP TABLE IF EXISTS `web_servers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `web_servers` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `signatureId` int(10) DEFAULT NULL,
  `web` varchar(2048) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_signature_id_web` (`signatureId`),
  CONSTRAINT `FK_signature_id_web` FOREIGN KEY (`signatureId`) REFERENCES `signatures` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `web_servers`
--

LOCK TABLES `web_servers` WRITE;
/*!40000 ALTER TABLE `web_servers` DISABLE KEYS */;
INSERT INTO `web_servers` VALUES (1,2,'this is sample WEB'),(2,3,'this is sample WEB'),(3,4,'this is sample WEB'),(4,5,'this is sample WEB'),(5,6,'this is sample WEB'),(7,8,'this is sample WEB'),(8,9,'this is sample WEB'),(9,8,'this is sample FILE'),(10,8,'this is sample FILE'),(11,30,'this is sample WEB'),(15,101,'this is sample WEB'),(19,103,'this is sample WEB');
/*!40000 ALTER TABLE `web_servers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-02 21:11:27
