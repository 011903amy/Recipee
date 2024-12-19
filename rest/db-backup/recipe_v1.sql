-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 16, 2024 at 12:10 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipe_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `recipe`
--

CREATE TABLE `recipe` (
  `recipe_aid` int(11) NOT NULL,
  `recipe_title` varchar(50) NOT NULL,
  `recipe_category_id` int(11) NOT NULL,
  `recipe_level_id` int(11) NOT NULL,
  `recipe_serving` int(10) NOT NULL,
  `recipe_prep_time` varchar(20) NOT NULL,
  `recipe_image` varchar(20) NOT NULL,
  `recipe_ingredients` text NOT NULL,
  `recipe_description` text NOT NULL,
  `recipe_instruction` text NOT NULL,
  `recipe_is_active` tinyint(1) NOT NULL,
  `recipe_datetime` varchar(20) NOT NULL,
  `recipe_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`recipe_aid`, `recipe_title`, `recipe_category_id`, `recipe_level_id`, `recipe_serving`, `recipe_prep_time`, `recipe_image`, `recipe_ingredients`, `recipe_description`, `recipe_instruction`, `recipe_is_active`, `recipe_datetime`, `recipe_created`) VALUES
(14, 'Rafayel', 4, 6, 1, 'infinity', 'GEOsjFkW4AAIzR7.jpg', '[{\"ingredients\":\"fish\",\"amount\":\"1\",\"unit\":\"\"}]', 'Dramatic Artist', 'Don\\\\\\\'t tease him too much', 1, '2024-12-12 15:15:32', '2024-12-12 15:11:47'),
(15, 'myth', 3, 6, 1, '11', 'banner.jpg', '[{\"ingredients\":\"11\",\"amount\":\"11\",\"unit\":\"11\"}]', '111', '1111', 1, '2024-12-12 15:12:56', '2024-12-12 15:12:40'),
(16, 'Baked Feta Pasta', 3, 4, 4, '45 min', 'pasta-2.jpg', '[{\"ingredients\":\"(20 ounces) cherry tomatoes\",\"amount\":\"2 \",\"unit\":\"pints \"},{\"ingredients\":\"extra-virgin olive oil\",\"amount\":\"1\\/2 \",\"unit\":\"cup\"},{\"ingredients\":\"Kosher salt and freshly ground black pepper\",\"amount\":\"1\",\"unit\":\"stem\"},{\"ingredients\":\"block feta cheese, drained (see Cook\\u2019s Note)\",\"amount\":\"8\",\"unit\":\"ounce \"},{\"ingredients\":\"mezze rigatoni\",\"amount\":\"10 \",\"unit\":\"ounces \"},{\"ingredients\":\"garlic, finely grated\",\"amount\":\"1\",\"unit\":\"clove \"},{\"ingredients\":\"crushed red pepper flakes, optional\",\"amount\":\"1\",\"unit\":\"pinch \"},{\"ingredients\":\"resh basil leaves, thinly sliced\",\"amount\":\"1\\/4 \",\"unit\":\"cup\"},{\"ingredients\":\"Flaky sea salt, for serving\",\"amount\":\"1\",\"unit\":\"pinch\"}]', 'Whether you’re an avid TikTok user or scroll Instagram occasionally, you probably saw the baked feta pasta recipe that took social media by storm in early 2021. While some viral sensations arent built to last, the team at Food Network Kitchen felt that this one deserved a closer look. Recipe Developer Amanda Neal tinkered with the TikTok feta pasta rubric to create this crowd-pleasing version that stands the test of time. Here’s how to bring her vision to life.', '##### Step 1: \nPreheat the oven to 400 degrees F.\n\n##### Step 2: \nToss the cherry tomatoes and olive oil with 1/4 teaspoon of salt and several grinds of black pepper in a medium bowl until combined. Transfer to a 2 1/2- to 3-quart baking dish, place the feta in the center of the tomatoes and season with a pinch of black pepper. Bake until the tomatoes have burst and the feta has softened, about 30 minutes. Raise the heat to 450 degrees F and continue to cook until the tomatoes and feta are golden brown, 10 to 15 minutes more. \n\n##### Step 3: \nMeanwhile, bring a large pot of generously salted water to a boil over high heat. Add the pasta and cook until al dente, about 13 minutes. Reserve 1/2 cup of the cooking water, then thoroughly drain the pasta. \n\n##### Step 4: \nAs soon as the tomatoes and feta come out of the oven, stir in the garlic and red pepper flakes (if using). Use the back of a spoon to smash the tomatoes and feta into a smooth and creamy sauce (it’s okay if some of the oil isn’t fully integrated). Add the pasta and half the basil and toss until evenly coated. If the sauce is too thick, stir in some pasta water a couple tablespoons at a time. Taste and adjust the seasoning with salt and pepper. Serve topped with the remaining basil and a pinch of sea salt.', 1, '2024-12-12 15:27:48', '2024-12-12 15:23:20'),
(17, 'enternity', 4, 6, 0, 'asdasd', '56e710dabe6766abcbe1', '[{\"ingredients\":\"asdasd\",\"amount\":\"asdasd\",\"unit\":\"asdasd\"}]', 'asdasd', 'asdasdasd', 1, '2024-12-13 12:44:51', '2024-12-13 12:44:51');

-- --------------------------------------------------------

--
-- Table structure for table `recipe_category`
--

CREATE TABLE `recipe_category` (
  `category_aid` int(11) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_title` varchar(30) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe_category`
--

INSERT INTO `recipe_category` (`category_aid`, `category_is_active`, `category_title`, `category_datetime`, `category_created`) VALUES
(2, 1, 'Pastry', '2024-12-12 12:02:01', '2024-12-12 10:15:38'),
(3, 1, 'Pasta', '2024-12-12 10:24:50', '2024-12-12 10:24:50'),
(4, 1, 'Beef', '2024-12-12 12:36:44', '2024-12-12 12:05:03'),
(5, 1, 'Chicken', '2024-12-12 12:05:10', '2024-12-12 12:05:10'),
(6, 1, 'Pork', '2024-12-12 12:05:14', '2024-12-12 12:05:14'),
(8, 1, 'Dummy Category', '2024-12-12 12:17:14', '2024-12-12 12:17:14'),
(9, 1, 'hello', '2024-12-13 12:26:25', '2024-12-13 12:26:25'),
(10, 1, 'sup', '2024-12-13 12:44:22', '2024-12-13 12:44:22');

-- --------------------------------------------------------

--
-- Table structure for table `recipe_level`
--

CREATE TABLE `recipe_level` (
  `level_aid` int(11) NOT NULL,
  `level_is_active` tinyint(1) NOT NULL,
  `level_title` varchar(20) NOT NULL,
  `level_datetime` varchar(20) NOT NULL,
  `level_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe_level`
--

INSERT INTO `recipe_level` (`level_aid`, `level_is_active`, `level_title`, `level_datetime`, `level_created`) VALUES
(4, 1, 'Easy', '2024-12-12 13:33:24', '2024-12-12 13:33:24'),
(5, 1, 'Moderate', '2024-12-12 13:33:37', '2024-12-12 13:33:37'),
(6, 1, 'Difficult', '2024-12-12 13:33:44', '2024-12-12 13:33:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`recipe_aid`);

--
-- Indexes for table `recipe_category`
--
ALTER TABLE `recipe_category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `recipe_level`
--
ALTER TABLE `recipe_level`
  ADD PRIMARY KEY (`level_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `recipe_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `recipe_category`
--
ALTER TABLE `recipe_category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `recipe_level`
--
ALTER TABLE `recipe_level`
  MODIFY `level_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
