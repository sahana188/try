-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 03, 2020 at 07:03 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pizza_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `pizza_tb`
--

CREATE TABLE `pizza_tb` (
  `id` int(10) NOT NULL,
  `item_name` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `total_price` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `image` varchar(20) NOT NULL,
  `street` varchar(100) NOT NULL,
  `pincode` varchar(10) NOT NULL,
  `area` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `no_item` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pizza_tb`
--

INSERT INTO `pizza_tb` (`id`, `item_name`, `price`, `total_price`, `status`, `customer_name`, `image`, `street`, `pincode`, `area`, `city`, `no_item`) VALUES
(1, 'Veg Pizza ', '180', '180', 'Received', 'Abhilash', 'pizza1.jpg', '#24,27th Main Road', '573116', 'Hongasandra', 'Bangalore', '1'),
(3, 'Chiken Pizza', '240', '480', 'Preparing', 'Ranju', 'pizza1.jpg', '#8,4th Main Road', '597733', 'Yelahanka', 'Bangalore', '2'),
(4, 'Plain Pizza ', '80', '160', 'Ready', 'Karthik', 'pizza1.jpg', '#24,8th Main', '680023', 'Banashakari', 'Bangalore', '2'),
(5, 'tomto pizza', '90', '270', 'Preparing', 'Sahana', 'pizza1.jpg', '#5,5th Main Road', '521002', 'Bommanahalli', 'Bangalore', '3'),
(6, 'Onion Pizza', '100', '400', 'Received', 'Tanu', 'pizza1.jpg', '#24, 4th Main', '344003', 'Kengeri', 'Bangalore', '4'),
(7, 'Capsicum Pizza', '300', '600', 'Ready', 'Sonal', 'pizza1.jpg', '#5, 8th Main Road', '560022', '8th Mile', 'Bangalore', '2'),
(8, 'Veg Pizza ', '180', '180', 'Preparing', 'Abhilash', 'pizza1.jpg', '#24,27th Main Road', '573116', 'Hongasandra', 'Bangalore', '1'),
(9, 'Chiken Pizza', '240', '480', 'Received', 'Ranju', 'pizza1.jpg', '#8,4th Main Road', '597733', 'Yelahanka', 'Bangalore', '2'),
(10, 'Plain Pizza ', '80', '160', 'Received', 'Karthik', 'pizza1.jpg', '#24,8th Main', '680023', 'Banashakari', 'Bangalore', '2'),
(12, 'Onion Pizza', '100', '400', 'Preparing', 'Tanu', 'pizza1.jpg', '#24, 4th Main', '344003', 'Kengeri', 'Bangalore', '4'),
(15, 'Chiken Pizza', '240', '480', 'Received', 'Ranju', 'pizza1.jpg', '#8,4th Main Road', '597733', 'Yelahanka', 'Bangalore', '2'),
(17, 'Tomato Pizza', '90', '270', 'Received', 'Sahana', 'pizza1.jpg', '#5,5th Main Road', '521002', 'Bommanahalli', 'Bangalore', '3'),
(18, 'Onion Pizza', '100', '400', 'Preparing', 'Tanu', 'pizza1.jpg', '#24, 4th Main', '344003', 'Kengeri', 'Bangalore', '4'),
(19, 'Capsicum Pizza', '300', '600', 'Received', 'Sonal', 'pizza1.jpg', '#5, 8th Main Road', '560022', '8th Mile', 'Bangalore', '2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pizza_tb`
--
ALTER TABLE `pizza_tb`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pizza_tb`
--
ALTER TABLE `pizza_tb`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
