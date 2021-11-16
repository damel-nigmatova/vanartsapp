-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 16, 2021 at 05:33 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodecrud`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` int(255) NOT NULL,
  `address_city` varchar(255) NOT NULL,
  `address_state` varchar(255) NOT NULL,
  `address_country_zip` varchar(255) NOT NULL,
  `notes` varchar(20) NOT NULL,
  `item_purchased` varchar(500) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `first_name`, `last_name`, `email`, `phone`, `address_city`, `address_state`, `address_country_zip`, `notes`, `item_purchased`, `quantity`, `price`, `image`) VALUES
(1, 'Damel', 'Nigmatova', 'damel@email.com', 5541, 'Vancouver', 'BC', 'V34A05', 'some notes123', 'some items', 3, 20, ''),
(2, 'John', 'Doe', 'doe@email.com', 123123, 'Vancouver', 'BC', '123QWE', 'some test notes', 'some test items', 4, 86, 'Doe.png'),
(3, 'Emma', 'Brown', 'brown@email.com', 234234, 'Brooklyn', 'NY', '456RTE', 'test', 'test', 1, 5, 'Brown.jpeg'),
(5, 'Julia', 'Smith', 'julia@email.com', 123434, 'Brooklyn', 'NY', '123QWE', 'my notes', 'my items', 2, 23, 'Smith.jpeg'),
(6, 'John', 'Doe', 'doe@email.com', 1345345, 'Vancouver', 'BC', '123QWE', 'some test notes', 'my items', 2, 56, 'Doe.jpeg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
