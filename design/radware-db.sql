CREATE DATABASE  IF NOT EXISTS `radware` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `radware`;
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
) ENGINE=InnoDB AUTO_INCREMENT=99014 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attacks`
--

LOCK TABLES `attacks` WRITE;
/*!40000 ALTER TABLE `attacks` DISABLE KEYS */;
INSERT INTO `attacks` VALUES (1,'attack1'),(2,'attack2'),(3,'attack3'),(4,'attack4'),(5,'attack5'),(6,'attack6'),(7,'attack7'),(8,'attack8'),(9,'attack9'),(10,'attack10'),(11,'attack11'),(12,'attack11'),(13,'attack12'),(14,'attack13'),(15,'attack1'),(16,'attack2'),(17,'attack3'),(18,'attack4'),(19,'attack5'),(20,'attack6'),(21,'attack7'),(22,'attack8'),(23,'attack9'),(24,'attack10'),(25,'attack11'),(26,'attack11'),(27,'attack12'),(28,'attack13'),(29,NULL),(55,'saeed'),(99,'attack90'),(100,'attack901'),(101,'attack9011'),(102,'attack91'),(103,'attack991'),(106,'attack991'),(888,'attack1'),(66979,'rgaergergerg'),(98987,'attack1'),(98988,'rgaergergerg'),(98989,'rgaergergerg'),(98990,'rgaergergerg'),(98991,'rgaergergerg'),(98992,'rgaergergerg'),(98993,'rgaergergerg'),(98994,'rgaergergerg'),(98995,'rgaergergerg'),(98996,'rgaergergerg'),(98997,'rgaergergerg'),(98998,'rgaergergerg'),(98999,'rgaergergerg'),(99000,'rgaergergerg'),(99001,'rgaergergerg'),(99002,'rgaergergerg'),(99003,'rgaergergerg'),(99004,'rgaergergerg'),(99005,'rgaergergerg'),(99006,'rgaergergerg'),(99007,'rgaergergerg'),(99008,'rgaergergerg'),(99009,'rgaergergerg'),(99010,'rgaergergerg'),(99011,'rgaergergerg'),(99012,'rgaergergerg'),(99013,'rgaergergerg');
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
) ENGINE=InnoDB AUTO_INCREMENT=252715 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `external_references`
--

LOCK TABLES `external_references` WRITE;
/*!40000 ALTER TABLE `external_references` DISABLE KEYS */;
INSERT INTO `external_references` VALUES (2,4,'cveid','http://www.security.com/bid/214'),(3,68264,'bugtraqid','http://www.cve.com/bid/24'),(4,68264,'cveid','http://www.security.com/'),(5,1,'cveid','http://www.security.com/bid/214'),(6,1,'bugtraqid','http://www.BOOS.com/55'),(8,1,'bugtraqid','http://www.cve.com/bid/24'),(9,1,'cveid','http://www.security.com/'),(10,29,'cveid','http://www.security.com/bid/214'),(11,30,'cveid','http://www.security.com/bid/214'),(15,101,'cveid','http://www.security.com/bid/214'),(19,103,'cveid','http://www.security.com/bid/214'),(8787,2828,'cveid','http://www.security.com/bid/214'),(252586,2424,'cveid','http://www.security.com/bid/214'),(252587,68270,'bugtraqid','http://www.BOOS.com/55'),(252588,68270,'bugtraqid','http://www.cve.com/bid/24'),(252589,68270,'cveid','http://www.security.com/'),(252590,68270,'cveid','dvsdzvsdv'),(252591,68271,'bugtraqid','http://www.BOOS.com/55'),(252592,68271,'bugtraqid','http://www.cve.com/bid/24'),(252593,68271,'cveid','http://www.security.com/'),(252594,68272,'bugtraqid','http://www.BOOS.com/55'),(252595,68272,'bugtraqid','http://www.cve.com/bid/24'),(252596,68272,'cveid','http://www.security.com/'),(252597,68274,'bugtraqid','http://www.BOOS.com/55'),(252598,68274,'bugtraqid','http://www.cve.com/bid/24'),(252599,68274,'cveid','http://www.security.com/'),(252600,68275,'bugtraqid','http://www.BOOS.com/55'),(252601,68275,'bugtraqid','http://www.cve.com/bid/24'),(252602,68275,'cveid','http://www.security.com/'),(252603,68276,'bugtraqid','http://www.BOOS.com/55'),(252604,68276,'bugtraqid','http://www.cve.com/bid/24'),(252605,68276,'cveid','http://www.security.com/'),(252606,68278,'bugtraqid','http://www.BOOS.com/55'),(252607,68278,'bugtraqid','http://www.cve.com/bid/24'),(252608,68278,'cveid','http://www.security.com/'),(252609,68279,'bugtraqid','http://www.BOOS.com/55'),(252610,68279,'bugtraqid','http://www.cve.com/bid/24'),(252611,68279,'cveid','http://www.security.com/'),(252612,68283,'bugtraqid','http://www.BOOS.com/55'),(252613,68287,'bugtraqid','http://www.BOOS.com/55'),(252614,68287,'bugtraqid','http://www.cve.com/bid/24'),(252615,68287,'cveid','http://www.security.com/'),(252616,68288,'bugtraqid','http://www.BOOS.com/55'),(252617,68288,'bugtraqid','http://www.cve.com/bid/24'),(252618,68288,'cveid','http://www.security.com/'),(252619,68289,'bugtraqid','http://www.BOOS.com/55'),(252620,68289,'bugtraqid','http://www.cve.com/bid/24'),(252621,68289,'cveid','http://www.security.com/'),(252622,68291,'bugtraqid','http://www.BOOS.com/55'),(252623,68291,'bugtraqid','http://www.cve.com/bid/24'),(252624,68291,'cveid','http://www.security.com/'),(252625,68292,'bugtraqid','http://www.BOOS.com/55'),(252626,68292,'bugtraqid','http://www.cve.com/bid/24'),(252627,68292,'cveid','http://www.security.com/'),(252628,68295,'bugtraqid','http://www.BOOS.com/55'),(252629,68295,'bugtraqid','http://www.cve.com/bid/24'),(252630,68295,'cveid','http://www.security.com/'),(252631,68299,'bugtraqid','http://www.BOOS.com/55'),(252632,68299,'bugtraqid','http://www.cve.com/bid/24'),(252633,68299,'cveid','http://www.security.com/'),(252634,68301,'bugtraqid','http://www.BOOS.com/55'),(252635,68301,'bugtraqid','http://www.cve.com/bid/24'),(252636,68301,'cveid','http://www.security.com/'),(252637,68302,'bugtraqid','http://www.BOOS.com/55'),(252638,68302,'bugtraqid','http://www.cve.com/bid/24'),(252639,68302,'cveid','http://www.security.com/'),(252640,68324,'bugtraqid','http://www.BOOS.com/55'),(252641,68324,'bugtraqid','http://www.cve.com/bid/24'),(252642,68324,'cveid','http://www.security.com/'),(252643,68329,'bugtraqid','http://www.BOOS.com/55'),(252644,68329,'bugtraqid','http://www.cve.com/bid/24'),(252645,68329,'cveid','http://www.security.com/'),(252646,68330,'bugtraqid','http://www.BOOS.com/55'),(252647,68330,'bugtraqid','http://www.cve.com/bid/24'),(252648,68330,'cveid','http://www.security.com/'),(252649,68331,'bugtraqid','http://www.BOOS.com/55'),(252650,68331,'bugtraqid','http://www.cve.com/bid/24'),(252651,68331,'cveid','http://www.security.com/'),(252652,68332,'bugtraqid','http://www.BOOS.com/55'),(252653,68332,'bugtraqid','http://www.cve.com/bid/24'),(252654,68332,'cveid','http://www.security.com/'),(252655,68333,'bugtraqid','http://www.BOOS.com/55'),(252656,68333,'bugtraqid','http://www.cve.com/bid/24'),(252657,68333,'cveid','http://www.security.com/'),(252658,68334,'bugtraqid','http://www.BOOS.com/55'),(252659,68334,'cveid','http://www.security.com/'),(252660,68334,'bugtraqid','http://www.cve.com/bid/24'),(252661,68335,'bugtraqid','http://www.BOOS.com/55'),(252662,68335,'bugtraqid','http://www.cve.com/bid/24'),(252663,68335,'cveid','http://www.security.com/'),(252664,68336,'bugtraqid','http://www.BOOS.com/55'),(252665,68336,'bugtraqid','http://www.cve.com/bid/24'),(252666,68336,'cveid','http://www.security.com/'),(252667,68337,'bugtraqid','http://www.BOOS.com/55'),(252668,68337,'bugtraqid','http://www.cve.com/bid/24'),(252669,68337,'cveid','http://www.security.com/'),(252670,68338,'bugtraqid','http://www.BOOS.com/55'),(252671,68338,'bugtraqid','http://www.cve.com/bid/24'),(252672,68338,'cveid','http://www.security.com/'),(252673,68339,'bugtraqid','http://www.BOOS.com/55'),(252674,68339,'bugtraqid','http://www.cve.com/bid/24'),(252675,68339,'cveid','http://www.security.com/'),(252676,68340,'bugtraqid','http://www.BOOS.com/55'),(252677,68340,'bugtraqid','http://www.cve.com/bid/24'),(252678,68340,'cveid','http://www.security.com/'),(252679,68341,'bugtraqid','http://www.BOOS.com/55'),(252680,68341,'bugtraqid','http://www.cve.com/bid/24'),(252681,68341,'cveid','http://www.security.com/'),(252682,68342,'bugtraqid','http://www.BOOS.com/55'),(252683,68342,'bugtraqid','http://www.cve.com/bid/24'),(252684,68342,'cveid','http://www.security.com/'),(252685,68343,'bugtraqid','http://www.BOOS.com/55'),(252686,68343,'bugtraqid','http://www.cve.com/bid/24'),(252687,68343,'cveid','http://www.security.com/'),(252688,68344,'bugtraqid','http://www.BOOS.com/55'),(252689,68344,'bugtraqid','http://www.cve.com/bid/24'),(252690,68344,'cveid','http://www.security.com/'),(252691,68345,'bugtraqid','http://www.BOOS.com/55'),(252692,68345,'bugtraqid','http://www.cve.com/bid/24'),(252693,68345,'cveid','http://www.security.com/'),(252694,68346,'bugtraqid','http://www.BOOS.com/55'),(252695,68346,'cveid','http://www.security.com/'),(252696,68346,'bugtraqid','http://www.cve.com/bid/24'),(252697,68347,'bugtraqid','http://www.BOOS.com/55'),(252698,68347,'bugtraqid','http://www.cve.com/bid/24'),(252699,68347,'cveid','http://www.security.com/'),(252700,68348,'bugtraqid','http://www.BOOS.com/55'),(252701,68348,'bugtraqid','http://www.cve.com/bid/24'),(252702,68348,'cveid','http://www.security.com/'),(252703,68349,'bugtraqid','http://www.BOOS.com/55'),(252704,68349,'bugtraqid','http://www.cve.com/bid/24'),(252705,68349,'cveid','http://www.security.com/'),(252706,68350,'bugtraqid','http://www.BOOS.com/55'),(252707,68350,'bugtraqid','http://www.cve.com/bid/24'),(252708,68350,'cveid','http://www.security.com/'),(252709,68351,'bugtraqid','http://www.BOOS.com/55'),(252710,68351,'bugtraqid','http://www.cve.com/bid/24'),(252711,68351,'cveid','http://www.security.com/'),(252712,68352,'bugtraqid','http://www.cve.com/bid/24'),(252713,68352,'bugtraqid','http://www.BOOS.com/55'),(252714,68352,'cveid','http://www.security.com/');
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
  `file` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_signature_id_files` (`signatureId`),
  CONSTRAINT `FK_signature_id_files` FOREIGN KEY (`signatureId`) REFERENCES `signatures` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28856 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (1,2,'this is sample FILE'),(2,3,'this is sample FILE'),(3,4,'this is sample FILE'),(4,5,'this is sample FILE'),(5,6,'this is sample FILE'),(6,7,'this is sample FILE'),(7,8,'this is sample FILE'),(9,8,'this is sample FILE'),(23,55,'this is sample FILE'),(55,1,'Simple File'),(56,1,'Simple File'),(57,56,'this is sample FILE'),(66,28,'this is sample FILE'),(67,29,'this is sample FILE'),(100,101,'this is sample FILE'),(108,103,'this is sample FILE'),(2825,2828,'Simple File'),(28759,2424,'Simple File'),(28760,68264,'Simple File'),(28761,68264,'Simple File'),(28762,68270,'Simple File'),(28763,68270,'Simple File'),(28764,68271,'Simple File'),(28765,68271,'Simple File'),(28766,68272,'Simple File'),(28767,68272,'Simple File'),(28768,68274,'Simple File'),(28769,68274,'Simple File'),(28770,68275,'Simple File'),(28771,68275,'Simple File'),(28772,68276,'Simple File'),(28773,68276,'Simple File'),(28774,68278,'Simple File'),(28775,68278,'Simple File'),(28776,68279,'Simple File'),(28777,68279,'Simple File'),(28778,68283,'Simple File'),(28779,68283,'Simple File'),(28780,68287,'Simple File'),(28781,68287,'Simple File'),(28782,68288,'Simple File'),(28783,68288,'Simple File'),(28784,68289,'Simple File'),(28785,68289,'Simple File'),(28786,68291,'Simple File'),(28787,68291,'Simple File'),(28788,68292,'Simple File'),(28789,68292,'Simple File'),(28790,68295,'Simple File'),(28791,68295,'Simple File'),(28792,68299,'Simple File'),(28793,68299,'Simple File'),(28794,68301,'Simple File'),(28795,68301,'Simple File'),(28796,68302,'Simple File'),(28797,68302,'Simple File'),(28798,68324,'Simple File'),(28799,68324,'Simple File'),(28800,68325,'Simple File'),(28801,68325,'Simple File'),(28802,68326,'Simple File'),(28803,68326,'Simple File'),(28804,68327,'Simple File'),(28805,68327,'Simple File'),(28806,68328,'Simple File'),(28807,68328,'Simple File'),(28808,68329,'Simple File'),(28809,68329,'Simple File'),(28810,68330,'Simple File'),(28811,68330,'Simple File'),(28812,68331,'Simple File'),(28813,68331,'Simple File'),(28814,68332,'Simple File'),(28815,68332,'Simple File'),(28816,68333,'Simple File'),(28817,68333,'Simple File'),(28818,68334,'Simple File'),(28819,68334,'Simple File'),(28820,68335,'Simple File'),(28821,68335,'Simple File'),(28822,68336,'Simple File'),(28823,68336,'Simple File'),(28824,68337,'Simple File'),(28825,68337,'Simple File'),(28826,68338,'Simple File'),(28827,68338,'Simple File'),(28828,68339,'Simple File'),(28829,68339,'Simple File'),(28830,68340,'Simple File'),(28831,68340,'Simple File'),(28832,68341,'Simple File'),(28833,68341,'Simple File'),(28834,68342,'Simple File'),(28835,68342,'Simple File'),(28836,68343,'Simple File'),(28837,68343,'Simple File'),(28838,68344,'Simple File'),(28839,68344,'Simple File'),(28840,68345,'Simple File'),(28841,68345,'Simple File'),(28842,68346,'Simple File'),(28843,68346,'Simple File'),(28844,68347,'Simple File'),(28845,68347,'Simple File'),(28846,68348,'Simple File'),(28847,68348,'Simple File'),(28848,68349,'Simple File'),(28849,68349,'Simple File'),(28850,68350,'Simple File'),(28851,68350,'Simple File'),(28852,68351,'Simple File'),(28853,68351,'Simple File'),(28854,68352,'Simple File'),(28855,68352,'Simple File');
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
) ENGINE=InnoDB AUTO_INCREMENT=26227 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parameters`
--

LOCK TABLES `parameters` WRITE;
/*!40000 ALTER TABLE `parameters` DISABLE KEYS */;
INSERT INTO `parameters` VALUES (1,1,'this is sample PARAMETERS!'),(2,1,'this is sample PARAMETERS!'),(3,2,'this is sample PARAMETERS!'),(4,2,'this is sample PARAMETERS!'),(5,3,'this is sample PARAMETERS!'),(6,3,'this is sample PARAMETERS!'),(7,4,'this is sample PARAMETERS!'),(8,5,'this is sample PARAMETERS!'),(111,103,'this is sample PARAMETERS!'),(9898,2828,'this is sample PARAMETERS!'),(25878,2424,'this is sample PARAMETERS!'),(25879,68270,'this is sample PARAMETERS!'),(25880,68270,'this is sample PARAMETERS!'),(25881,68270,'this is sample PARAMETERS!'),(25882,68270,'ergerg'),(25883,68270,'this is sample PARAMETERS!'),(25884,68270,'this is sample PARAMETERS!'),(25885,68270,'this is sample PARAMETERS!'),(25886,68270,'ergerg'),(25887,68270,'this is sample PARAMETERS!'),(25888,68270,'this is sample PARAMETERS!'),(25889,68270,'this is sample PARAMETERS!'),(25890,68270,'ergerg'),(25891,68270,'this is sample PARAMETERS!'),(25892,68270,'this is sample PARAMETERS!'),(25893,68270,'this is sample PARAMETERS!'),(25894,68270,'ergerg'),(25895,68271,'this is sample PARAMETERS!'),(25896,68271,'this is sample PARAMETERS!'),(25897,68271,'this is sample PARAMETERS!'),(25898,68271,'ergerg'),(25899,68271,'this is sample PARAMETERS!'),(25900,68271,'this is sample PARAMETERS!'),(25901,68271,'this is sample PARAMETERS!'),(25902,68271,'ergerg'),(25903,68271,'this is sample PARAMETERS!'),(25904,68271,'this is sample PARAMETERS!'),(25905,68271,'this is sample PARAMETERS!'),(25906,68271,'ergerg'),(25907,68272,'this is sample PARAMETERS!'),(25908,68272,'this is sample PARAMETERS!'),(25909,68272,'this is sample PARAMETERS!'),(25910,68272,'ergerg'),(25911,68272,'this is sample PARAMETERS!'),(25912,68272,'this is sample PARAMETERS!'),(25913,68272,'this is sample PARAMETERS!'),(25914,68272,'ergerg'),(25915,68272,'this is sample PARAMETERS!'),(25916,68272,'this is sample PARAMETERS!'),(25917,68272,'this is sample PARAMETERS!'),(25918,68272,'ergerg'),(25919,NULL,'this is sample PARAMETERS!'),(25920,NULL,'this is sample PARAMETERS!'),(25921,NULL,'this is sample PARAMETERS!'),(25922,NULL,'ergerg'),(25923,NULL,'this is sample PARAMETERS!'),(25924,NULL,'this is sample PARAMETERS!'),(25925,NULL,'ergerg'),(25926,NULL,'this is sample PARAMETERS!'),(25927,NULL,'this is sample PARAMETERS!'),(25928,NULL,'this is sample PARAMETERS!'),(25929,NULL,'this is sample PARAMETERS!'),(25930,NULL,'ergerg'),(25931,NULL,'this is sample PARAMETERS!'),(25932,NULL,'this is sample PARAMETERS!'),(25933,NULL,'this is sample PARAMETERS!'),(25934,NULL,'ergerg'),(25935,NULL,'this is sample PARAMETERS!'),(25936,NULL,'this is sample PARAMETERS!'),(25937,NULL,'ergerg'),(25938,NULL,'this is sample PARAMETERS!'),(25939,NULL,'this is sample PARAMETERS!'),(25940,NULL,'this is sample PARAMETERS!'),(25941,NULL,'this is sample PARAMETERS!'),(25942,NULL,'ergerg'),(25943,NULL,'this is sample PARAMETERS!'),(25944,NULL,'this is sample PARAMETERS!'),(25945,NULL,'this is sample PARAMETERS!'),(25946,NULL,'ergerg'),(25947,NULL,'this is sample PARAMETERS!'),(25948,NULL,'this is sample PARAMETERS!'),(25949,NULL,'this is sample PARAMETERS!'),(25950,NULL,'ergerg'),(25951,NULL,'this is sample PARAMETERS!'),(25952,NULL,'this is sample PARAMETERS!'),(25953,NULL,'this is sample PARAMETERS!'),(25954,NULL,'ergerg'),(25955,NULL,'this is sample PARAMETERS!'),(25956,NULL,'this is sample PARAMETERS!'),(25957,NULL,'this is sample PARAMETERS!'),(25958,NULL,'ergerg'),(25959,NULL,'this is sample PARAMETERS!'),(25960,NULL,'this is sample PARAMETERS!'),(25961,NULL,'ergerg'),(25962,NULL,'this is sample PARAMETERS!'),(25963,NULL,'this is sample PARAMETERS!'),(25964,NULL,'this is sample PARAMETERS!'),(25965,NULL,'this is sample PARAMETERS!'),(25966,NULL,'ergerg'),(25967,NULL,'this is sample PARAMETERS!'),(25968,NULL,'this is sample PARAMETERS!'),(25969,NULL,'this is sample PARAMETERS!'),(25970,NULL,'ergerg'),(25971,NULL,'this is sample PARAMETERS!'),(25972,NULL,'this is sample PARAMETERS!'),(25973,NULL,'ergerg'),(25974,NULL,'this is sample PARAMETERS!'),(25975,NULL,'this is sample PARAMETERS!'),(25976,NULL,'this is sample PARAMETERS!'),(25977,NULL,'this is sample PARAMETERS!'),(25978,NULL,'ergerg'),(25979,NULL,'this is sample PARAMETERS!'),(25980,NULL,'this is sample PARAMETERS!'),(25981,NULL,'this is sample PARAMETERS!'),(25982,NULL,'ergerg'),(25983,NULL,'this is sample PARAMETERS!'),(25984,NULL,'this is sample PARAMETERS!'),(25985,NULL,'ergerg'),(25986,NULL,'this is sample PARAMETERS!'),(25987,NULL,'this is sample PARAMETERS!'),(25988,NULL,'this is sample PARAMETERS!'),(25989,NULL,'this is sample PARAMETERS!'),(25990,NULL,'ergerg'),(25991,NULL,'this is sample PARAMETERS!'),(25992,NULL,'this is sample PARAMETERS!'),(25993,NULL,'ergerg'),(25994,NULL,'this is sample PARAMETERS!'),(25995,NULL,'this is sample PARAMETERS!'),(25996,NULL,'this is sample PARAMETERS!'),(25997,NULL,'ergerg'),(25998,NULL,'this is sample PARAMETERS!'),(25999,NULL,'this is sample PARAMETERS!'),(26000,NULL,'this is sample PARAMETERS!'),(26001,NULL,'this is sample PARAMETERS!'),(26002,NULL,'ergerg'),(26003,NULL,'this is sample PARAMETERS!'),(26004,NULL,'this is sample PARAMETERS!'),(26005,NULL,'this is sample PARAMETERS!'),(26006,NULL,'ergerg'),(26007,NULL,'this is sample PARAMETERS!'),(26008,NULL,'this is sample PARAMETERS!'),(26009,NULL,'this is sample PARAMETERS!'),(26010,NULL,'ergerg'),(26011,NULL,'this is sample PARAMETERS!'),(26012,NULL,'this is sample PARAMETERS!'),(26013,NULL,'this is sample PARAMETERS!'),(26014,NULL,'ergerg'),(26015,NULL,'this is sample PARAMETERS!'),(26016,NULL,'this is sample PARAMETERS!'),(26017,NULL,'this is sample PARAMETERS!'),(26018,NULL,'ergerg'),(26019,NULL,'this is sample PARAMETERS!'),(26020,NULL,'this is sample PARAMETERS!'),(26021,NULL,'ergerg'),(26022,NULL,'this is sample PARAMETERS!'),(26023,NULL,'this is sample PARAMETERS!'),(26024,NULL,'this is sample PARAMETERS!'),(26025,NULL,'this is sample PARAMETERS!'),(26026,NULL,'ergerg'),(26027,NULL,'this is sample PARAMETERS!'),(26028,NULL,'this is sample PARAMETERS!'),(26029,NULL,'this is sample PARAMETERS!'),(26030,NULL,'ergerg'),(26031,NULL,'this is sample PARAMETERS!'),(26032,NULL,'this is sample PARAMETERS!'),(26033,NULL,'this is sample PARAMETERS!'),(26034,NULL,'ergerg'),(26035,NULL,'this is sample PARAMETERS!'),(26036,NULL,'this is sample PARAMETERS!'),(26037,NULL,'this is sample PARAMETERS!'),(26038,NULL,'ergerg'),(26039,NULL,'this is sample PARAMETERS!'),(26040,NULL,'this is sample PARAMETERS!'),(26041,NULL,'this is sample PARAMETERS!'),(26042,NULL,'ergerg'),(26043,NULL,'this is sample PARAMETERS!'),(26044,NULL,'this is sample PARAMETERS!'),(26045,NULL,'ergerg'),(26046,NULL,'this is sample PARAMETERS!'),(26047,NULL,'this is sample PARAMETERS!'),(26048,NULL,'this is sample PARAMETERS!'),(26049,NULL,'this is sample PARAMETERS!'),(26050,NULL,'ergerg'),(26051,NULL,'this is sample PARAMETERS!'),(26052,NULL,'this is sample PARAMETERS!'),(26053,NULL,'this is sample PARAMETERS!'),(26054,NULL,'ergerg'),(26055,NULL,'this is sample PARAMETERS!'),(26056,NULL,'this is sample PARAMETERS!'),(26057,NULL,'this is sample PARAMETERS!'),(26058,NULL,'ergerg'),(26059,NULL,'this is sample PARAMETERS!'),(26060,NULL,'this is sample PARAMETERS!'),(26061,NULL,'this is sample PARAMETERS!'),(26062,NULL,'ergerg'),(26063,NULL,'this is sample PARAMETERS!'),(26064,NULL,'this is sample PARAMETERS!'),(26065,NULL,'this is sample PARAMETERS!'),(26066,NULL,'ergerg'),(26067,NULL,'this is sample PARAMETERS!'),(26068,NULL,'this is sample PARAMETERS!'),(26069,NULL,'this is sample PARAMETERS!'),(26070,NULL,'ergerg'),(26071,NULL,'this is sample PARAMETERS!'),(26072,NULL,'this is sample PARAMETERS!'),(26073,NULL,'this is sample PARAMETERS!'),(26074,NULL,'ergerg'),(26075,NULL,'this is sample PARAMETERS!'),(26076,NULL,'this is sample PARAMETERS!'),(26077,NULL,'this is sample PARAMETERS!'),(26078,NULL,'ergerg'),(26079,NULL,'this is sample PARAMETERS!'),(26080,NULL,'this is sample PARAMETERS!'),(26081,NULL,'this is sample PARAMETERS!'),(26082,NULL,'ergerg'),(26083,NULL,'this is sample PARAMETERS!'),(26084,NULL,'this is sample PARAMETERS!'),(26085,NULL,'this is sample PARAMETERS!'),(26086,NULL,'ergerg'),(26087,NULL,'this is sample PARAMETERS!'),(26088,NULL,'this is sample PARAMETERS!'),(26089,NULL,'ergerg'),(26090,NULL,'this is sample PARAMETERS!'),(26091,NULL,'this is sample PARAMETERS!'),(26092,NULL,'this is sample PARAMETERS!'),(26093,NULL,'this is sample PARAMETERS!'),(26094,NULL,'ergerg'),(26095,NULL,'this is sample PARAMETERS!'),(26096,NULL,'this is sample PARAMETERS!'),(26097,NULL,'this is sample PARAMETERS!'),(26098,NULL,'ergerg'),(26099,NULL,'this is sample PARAMETERS!'),(26100,NULL,'this is sample PARAMETERS!'),(26101,NULL,'this is sample PARAMETERS!'),(26102,NULL,'ergerg'),(26103,NULL,'this is sample PARAMETERS!'),(26104,NULL,'this is sample PARAMETERS!'),(26105,NULL,'this is sample PARAMETERS!'),(26106,NULL,'ergerg'),(26107,NULL,'this is sample PARAMETERS!'),(26108,NULL,'this is sample PARAMETERS!'),(26109,NULL,'this is sample PARAMETERS!'),(26110,NULL,'ergerg'),(26111,68330,'this is sample PARAMETERS!'),(26112,68330,'this is sample PARAMETERS!'),(26113,68330,'this is sample PARAMETERS!'),(26114,68330,'ergerg'),(26115,68330,'this is sample PARAMETERS!'),(26116,68330,'this is sample PARAMETERS!'),(26117,68330,'ergerg'),(26118,68330,'this is sample PARAMETERS!'),(26119,68330,'this is sample PARAMETERS!'),(26120,68330,'this is sample PARAMETERS!'),(26121,68330,'this is sample PARAMETERS!'),(26122,68330,'ergerg'),(26123,68331,'this is sample PARAMETERS!'),(26124,68331,'this is sample PARAMETERS!'),(26125,68331,'this is sample PARAMETERS!'),(26126,68331,'ergerg'),(26127,68331,'this is sample PARAMETERS!'),(26128,68331,'this is sample PARAMETERS!'),(26129,68331,'this is sample PARAMETERS!'),(26130,68331,'ergerg'),(26131,68331,'this is sample PARAMETERS!'),(26132,68331,'this is sample PARAMETERS!'),(26133,68331,'this is sample PARAMETERS!'),(26134,68331,'ergerg'),(26135,68332,'this is sample PARAMETERS!'),(26136,68332,'this is sample PARAMETERS!'),(26137,68332,'this is sample PARAMETERS!'),(26138,68332,'ergerg'),(26139,68332,'this is sample PARAMETERS!'),(26140,68332,'this is sample PARAMETERS!'),(26141,68332,'this is sample PARAMETERS!'),(26142,68332,'ergerg'),(26143,68332,'this is sample PARAMETERS!'),(26144,68332,'this is sample PARAMETERS!'),(26145,68332,'this is sample PARAMETERS!'),(26146,68332,'ergerg'),(26147,68333,'this is sample PARAMETERS!'),(26148,68333,'this is sample PARAMETERS!'),(26149,68333,'this is sample PARAMETERS!'),(26150,68333,'ergerg'),(26151,68334,'this is sample PARAMETERS!'),(26152,68334,'this is sample PARAMETERS!'),(26153,68334,'this is sample PARAMETERS!'),(26154,68334,'ergerg'),(26155,68335,'this is sample PARAMETERS!'),(26156,68335,'this is sample PARAMETERS!'),(26157,68335,'this is sample PARAMETERS!'),(26158,68335,'ergerg'),(26159,68336,'this is sample PARAMETERS!'),(26160,68336,'this is sample PARAMETERS!'),(26161,68336,'this is sample PARAMETERS!'),(26162,68336,'ergerg'),(26163,68337,'this is sample PARAMETERS!'),(26164,68337,'this is sample PARAMETERS!'),(26165,68337,'this is sample PARAMETERS!'),(26166,68337,'ergerg'),(26167,68338,'this is sample PARAMETERS!'),(26168,68338,'this is sample PARAMETERS!'),(26169,68338,'this is sample PARAMETERS!'),(26170,68338,'ergerg'),(26171,68339,'this is sample PARAMETERS!'),(26172,68339,'this is sample PARAMETERS!'),(26173,68339,'this is sample PARAMETERS!'),(26174,68339,'ergerg'),(26175,68340,'this is sample PARAMETERS!'),(26176,68340,'this is sample PARAMETERS!'),(26177,68340,'this is sample PARAMETERS!'),(26178,68340,'ergerg'),(26179,68341,'this is sample PARAMETERS!'),(26180,68341,'this is sample PARAMETERS!'),(26181,68341,'this is sample PARAMETERS!'),(26182,68341,'ergerg'),(26183,68342,'this is sample PARAMETERS!'),(26184,68342,'this is sample PARAMETERS!'),(26185,68342,'this is sample PARAMETERS!'),(26186,68342,'ergerg'),(26187,68343,'this is sample PARAMETERS!'),(26188,68343,'this is sample PARAMETERS!'),(26189,68343,'this is sample PARAMETERS!'),(26190,68343,'ergerg'),(26191,68344,'this is sample PARAMETERS!'),(26192,68344,'this is sample PARAMETERS!'),(26193,68344,'this is sample PARAMETERS!'),(26194,68344,'ergerg'),(26195,68345,'this is sample PARAMETERS!'),(26196,68345,'this is sample PARAMETERS!'),(26197,68345,'this is sample PARAMETERS!'),(26198,68345,'ergerg'),(26199,68346,'this is sample PARAMETERS!'),(26200,68346,'this is sample PARAMETERS!'),(26201,68346,'this is sample PARAMETERS!'),(26202,68346,'ergerg'),(26203,68347,'this is sample PARAMETERS!'),(26204,68347,'this is sample PARAMETERS!'),(26205,68347,'this is sample PARAMETERS!'),(26206,68347,'ergerg'),(26207,68348,'this is sample PARAMETERS!'),(26208,68348,'this is sample PARAMETERS!'),(26209,68348,'this is sample PARAMETERS!'),(26210,68348,'ergerg'),(26211,68349,'this is sample PARAMETERS!'),(26212,68349,'this is sample PARAMETERS!'),(26213,68349,'this is sample PARAMETERS!'),(26214,68349,'ergerg'),(26215,68350,'this is sample PARAMETERS!'),(26216,68350,'this is sample PARAMETERS!'),(26217,68350,'this is sample PARAMETERS!'),(26218,68350,'ergerg'),(26219,68351,'this is sample PARAMETERS!'),(26220,68351,'this is sample PARAMETERS!'),(26221,68351,'this is sample PARAMETERS!'),(26222,68351,'ergerg'),(26223,68352,'this is sample PARAMETERS!'),(26224,68352,'this is sample PARAMETERS!'),(26225,68352,'this is sample PARAMETERS!'),(26226,68352,'ergerg');
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
  `pattern_id` int(10) DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=68353 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `signatures`
--

LOCK TABLES `signatures` WRITE;
/*!40000 ALTER TABLE `signatures` DISABLE KEYS */;
INSERT INTO `signatures` VALUES (1,1,1,123451,'vuln','17:04:44','2020-01-15','published','init','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(2,2,1,123452,'vuln','17:04:44','2020-01-15','published','init','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(3,2,1,123453,'vuln','17:04:44','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(4,2,2,123454,'vuln','17:04:44','2020-01-15','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,1,1,0,1,0,'high','ergerge','NEED TO ADD TEST DATA'),(5,3,2,123455,'vuln','17:04:44','2020-01-15','in_test','passed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(6,5,2,123456,'vuln','17:04:44','2020-01-15','in_test','passed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(7,5,3,123457,'vuln','17:04:44','2020-01-15','in_test','init','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(8,7,3,123458,'vuln','17:04:44','2020-01-15','in_progress','init','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(9,8,4,123459,'vuln','17:04:44','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(10,9,5,1234510,'vuln','17:04:44','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(11,9,6,1234511,'vuln','17:04:44','2020-01-15','in_qa','init','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(12,10,7,1234512,'vuln','17:04:44','2020-01-15','in_qa','init','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(13,12,8,1234513,'vuln','17:04:44','2020-01-15','in_progress','passed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(14,12,10,1234514,'vuln','17:04:44','2020-01-15','in_qa','passed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(15,14,10,1234515,'vuln','17:04:44','2020-01-15','in_progress','init','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(28,2,2,2828,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(29,2,2,2929,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(30,3,10,3030,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(33,2,2,36352,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(45,2,2,9875,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(48,2,2,8888,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(55,2,2,5555,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(56,2,2,5656,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(99,2,2,2929929,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln updateee data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is Update FAKE signature','this is Update FAKE test_data'),(101,3,10,101010,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(103,4,10,103103,'vuln','Invalid date','2020-01-15','in_progress','failed','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(2424,NULL,NULL,858745,'vuln','Invalid date','2020-01-15','in_progress','init','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(2828,1,1,242424,'vuln','Invalid date','2020-01-15','in_progress','init','init','init','vuln data for this signature is: ',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'low','this is FAKE signature','this is FAKE test_data'),(68264,NULL,NULL,68264,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68270,NULL,NULL,68265,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68271,NULL,NULL,8888755,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68272,NULL,NULL,8885755,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68274,NULL,NULL,458454,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,1,1,0,1,0,'high','ergerge','NEED TO ADD TEST DATA'),(68275,NULL,NULL,54785,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,1,1,0,1,0,'high','ergerge','NEED TO ADD TEST DATA'),(68276,NULL,NULL,87459,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,1,1,0,1,0,'high','ergerge','NEED TO ADD TEST DATA'),(68278,NULL,NULL,554555,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,1,1,0,1,0,'high','ergerge','NEED TO ADD TEST DATA'),(68279,NULL,NULL,88888,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68283,NULL,NULL,548721,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68287,NULL,NULL,41578,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68288,NULL,NULL,54789,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68289,NULL,NULL,321654,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68291,NULL,NULL,65478,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68292,NULL,NULL,654987,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68295,NULL,NULL,98754,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68299,NULL,NULL,65421,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68301,NULL,NULL,9854,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68302,NULL,NULL,98554,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68304,NULL,NULL,65498,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68307,NULL,NULL,547885,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68308,NULL,NULL,54854,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68309,1,NULL,47856,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68310,1,NULL,47857,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68311,1,NULL,47757,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68312,1,NULL,46757,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68313,NULL,NULL,46747,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68315,1,NULL,41747,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68318,1,1,40747,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68322,1,1,43747,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68323,1,1,44747,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68324,1,1,48747,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68325,1,1,48647,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68326,1,1,46417,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68327,1,1,46817,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68328,1,1,46827,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68329,1,1,46867,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68330,1,1,46877,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68331,1,1,468597,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68332,1,1,468596,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68333,1,1,468595,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68334,1,1,98752,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68335,1,1,NULL,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68336,1,1,NULL,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68337,1,1,NULL,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68338,1,1,68338,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68339,1,1,68339,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68340,1,1,68340,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68341,1,1,68341,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68342,1,1,68342,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68343,1,1,68343,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68344,1,1,68344,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68345,1,1,68345,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68346,1,1,68346,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68347,1,1,68347,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68348,1,1,68348,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68349,1,1,68349,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68350,1,1,68350,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68351,1,1,68351,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA'),(68352,1,1,68352,'vuln','Invalid date','3.2.2020','in_qa','init','init','init','',0,'setStartBreakByAlpha','setEndBreakByFileName',3,NULL,NULL,NULL,NULL,NULL,'high','ergerge','NEED TO ADD TEST DATA');
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
) ENGINE=InnoDB AUTO_INCREMENT=25309 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vuln_data_extras`
--

LOCK TABLES `vuln_data_extras` WRITE;
/*!40000 ALTER TABLE `vuln_data_extras` DISABLE KEYS */;
INSERT INTO `vuln_data_extras` VALUES (2,1,'this is sample desc'),(3,5,'this is sample desc'),(4,4,'this is sample Desc'),(5,1,'this is sample desc'),(6,9,'this is sample desc'),(7,8,'this is sample desc'),(91,103,NULL),(2564,2828,NULL),(25256,2424,NULL),(25257,68331,'sample desc'),(25258,68331,'sample desc2'),(25259,68331,'sample desc'),(25260,68331,'sample desc2'),(25261,68331,'sample desc'),(25262,68331,'sample desc2'),(25263,68332,'sample desc'),(25264,68332,'sample desc2'),(25265,68332,'sample desc'),(25266,68332,'sample desc2'),(25267,68332,'sample desc'),(25268,68332,'sample desc2'),(25269,68333,'sample desc'),(25270,68333,'sample desc2'),(25271,68334,'sample desc'),(25272,68334,'sample desc2'),(25273,68335,'sample desc'),(25274,68335,'sample desc2'),(25275,68336,'sample desc'),(25276,68336,'sample desc2'),(25277,68337,'sample desc'),(25278,68337,'sample desc2'),(25279,68338,'sample desc'),(25280,68338,'sample desc2'),(25281,68339,'sample desc2'),(25282,68339,'sample desc'),(25283,68340,'sample desc'),(25284,68340,'sample desc2'),(25285,68341,'sample desc'),(25286,68341,'sample desc2'),(25287,68342,'sample desc'),(25288,68342,'sample desc2'),(25289,68343,'sample desc'),(25290,68343,'sample desc2'),(25291,68344,'sample desc'),(25292,68344,'sample desc2'),(25293,68345,'sample desc'),(25294,68345,'sample desc2'),(25295,68346,'sample desc'),(25296,68346,'sample desc2'),(25297,68347,'sample desc'),(25298,68347,'sample desc2'),(25299,68348,'sample desc'),(25300,68348,'sample desc2'),(25301,68349,'sample desc2'),(25302,68349,'sample desc'),(25303,68350,'sample desc'),(25304,68350,'sample desc2'),(25305,68351,'sample desc'),(25306,68351,'sample desc2'),(25307,68352,'sample desc'),(25308,68352,'sample desc2');
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
  `web` varchar(2048) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_signature_id_web` (`signatureId`),
  CONSTRAINT `FK_signature_id_web` FOREIGN KEY (`signatureId`) REFERENCES `signatures` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=200 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `web_servers`
--

LOCK TABLES `web_servers` WRITE;
/*!40000 ALTER TABLE `web_servers` DISABLE KEYS */;
INSERT INTO `web_servers` VALUES (1,2,'this is sample WEB'),(2,3,'this is sample WEB'),(3,4,'this is sample WEB'),(4,5,'this is sample WEB'),(5,6,'this is sample WEB'),(7,8,'this is sample WEB'),(8,9,'this is sample WEB'),(9,8,'this is sample FILE'),(10,8,'this is sample FILE'),(11,30,'this is sample WEB'),(15,101,'this is sample WEB'),(19,103,'this is sample WEB'),(22,2,'this'),(23,68288,NULL),(24,68288,NULL),(25,68288,NULL),(26,68288,NULL),(27,68288,NULL),(28,68288,NULL),(29,68288,NULL),(30,68288,NULL),(31,68288,NULL),(32,68289,NULL),(33,68289,NULL),(34,68289,NULL),(35,68289,NULL),(36,68289,NULL),(37,68289,NULL),(38,68289,NULL),(39,68289,NULL),(40,68289,NULL),(41,68291,NULL),(42,68291,NULL),(43,68291,NULL),(44,68291,NULL),(45,68291,NULL),(46,68291,NULL),(47,68291,NULL),(48,68291,NULL),(49,68291,NULL),(50,68292,NULL),(51,68292,NULL),(52,68292,NULL),(53,68292,NULL),(54,68292,NULL),(55,68292,NULL),(56,68292,NULL),(57,68292,NULL),(58,68292,NULL),(59,68295,NULL),(60,68295,NULL),(61,68295,NULL),(62,68295,NULL),(63,68295,NULL),(64,68295,NULL),(65,68295,NULL),(66,68295,NULL),(67,68295,NULL),(68,68299,NULL),(69,68299,NULL),(70,68299,NULL),(71,68299,NULL),(72,68299,NULL),(73,68299,NULL),(74,68299,NULL),(75,68299,NULL),(76,68299,NULL),(77,68301,NULL),(78,68301,NULL),(79,68301,NULL),(80,68301,NULL),(81,68301,NULL),(82,68301,NULL),(83,68301,NULL),(84,68301,NULL),(85,68301,NULL),(86,68302,NULL),(87,68302,NULL),(88,68302,NULL),(89,68302,NULL),(90,68302,NULL),(91,68302,NULL),(92,68302,NULL),(93,68302,NULL),(94,68302,NULL),(95,68324,NULL),(96,68324,NULL),(97,68324,NULL),(98,68324,NULL),(99,68324,NULL),(100,68324,NULL),(101,68324,NULL),(102,68324,NULL),(103,68324,NULL),(104,68329,NULL),(105,68329,NULL),(106,68329,NULL),(107,68329,NULL),(108,68329,NULL),(109,68329,NULL),(110,68329,NULL),(111,68329,NULL),(112,68329,NULL),(113,68330,NULL),(114,68330,NULL),(115,68330,NULL),(116,68330,NULL),(117,68330,NULL),(118,68330,NULL),(119,68330,NULL),(120,68330,NULL),(121,68330,NULL),(122,68331,NULL),(123,68331,NULL),(124,68331,NULL),(125,68331,NULL),(126,68331,NULL),(127,68331,NULL),(128,68331,NULL),(129,68331,NULL),(130,68331,NULL),(131,68332,NULL),(132,68332,NULL),(133,68332,NULL),(134,68332,NULL),(135,68332,NULL),(136,68332,NULL),(137,68332,NULL),(138,68332,NULL),(139,68332,NULL),(140,68333,NULL),(141,68333,NULL),(142,68333,NULL),(143,68334,NULL),(144,68334,NULL),(145,68334,NULL),(146,68335,NULL),(147,68335,NULL),(148,68335,NULL),(149,68336,NULL),(150,68336,NULL),(151,68336,NULL),(152,68337,NULL),(153,68337,NULL),(154,68337,NULL),(155,68338,NULL),(156,68338,NULL),(157,68338,NULL),(158,68339,NULL),(159,68339,NULL),(160,68339,NULL),(161,68340,NULL),(162,68340,NULL),(163,68340,NULL),(164,68341,NULL),(165,68341,NULL),(166,68341,NULL),(167,68342,NULL),(168,68342,NULL),(169,68342,NULL),(170,68343,NULL),(171,68343,NULL),(172,68343,NULL),(173,68344,NULL),(174,68344,NULL),(175,68344,NULL),(176,68345,NULL),(177,68345,NULL),(178,68345,NULL),(179,68346,NULL),(180,68346,NULL),(181,68346,NULL),(182,68347,NULL),(183,68347,NULL),(184,68347,NULL),(185,68348,NULL),(186,68348,NULL),(187,68348,NULL),(188,68349,NULL),(189,68349,NULL),(190,68349,NULL),(191,68350,NULL),(192,68350,NULL),(193,68350,NULL),(194,68351,NULL),(195,68351,NULL),(196,68351,NULL),(197,68352,NULL),(198,68352,NULL),(199,68352,NULL);
/*!40000 ALTER TABLE `web_servers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'radware'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-07  9:48:05
