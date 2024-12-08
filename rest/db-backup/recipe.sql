-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 09, 2024 at 12:48 AM
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
  `recipe_category` varchar(20) NOT NULL,
  `recipe_level` varchar(10) NOT NULL,
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

INSERT INTO `recipe` (`recipe_aid`, `recipe_title`, `recipe_category`, `recipe_level`, `recipe_serving`, `recipe_prep_time`, `recipe_image`, `recipe_ingredients`, `recipe_description`, `recipe_instruction`, `recipe_is_active`, `recipe_datetime`, `recipe_created`) VALUES
(9, 'Baked Feta Pasta', 'pasta', 'easy', 4, '45 min', 'pasta-2.jpg', '[{\"ingredients\":\"cherry tomatoes\",\"amount\":\"\",\"unit\":\"(20 ounces) \"},{\"ingredients\":\"extra-virgin olive oil\",\"amount\":\"\",\"unit\":\"1\\/2 cup\"},{\"ingredients\":\"Kosher salt and freshly ground black pepper\",\"amount\":\"\",\"unit\":\"n\\/a\"},{\"ingredients\":\"block feta cheese, drained (see Cook\\u2019s Note)\",\"amount\":\"\",\"unit\":\"8 ounce\"},{\"ingredients\":\"mezze rigatoni\",\"amount\":\"\",\"unit\":\"10 ounces\"},{\"ingredients\":\" garlic, finely grated\",\"amount\":\"\",\"unit\":\"1 clove\"},{\"ingredients\":\"crushed red pepper flakes, optional\",\"amount\":\"\",\"unit\":\"1 Pinch\"},{\"ingredients\":\"fresh basil leaves, thinly sliced\",\"amount\":\"\",\"unit\":\"1\\/4 cup\"},{\"ingredients\":\"Flaky sea salt, for serving\",\"amount\":\"\",\"unit\":\"n\\/a\"}]', 'Whether you’re an avid TikTok user or scroll Instagram occasionally, you probably saw the baked feta pasta recipe that took social media by storm in early 2021. While some viral sensations aren\\\'t built to last, the team at Food Network Kitchen felt that this one deserved a closer look. Recipe Developer Amanda Neal tinkered with the TikTok feta pasta rubric to create this crowd-pleasing version that stands the test of time. Here’s how to bring her vision to life.', '##### Step 1\nPreheat the oven to 400 degrees F.\n\n##### Step 2\nToss the cherry tomatoes and olive oil with 1/4 teaspoon of salt and several grinds of black pepper in a medium bowl until combined. Transfer to a 2 1/2- to 3-quart baking dish, place the feta in the center of the tomatoes and season with a pinch of black pepper. Bake until the tomatoes have burst and the feta has softened, about 30 minutes. Raise the heat to 450 degrees F and continue to cook until the tomatoes and feta are golden brown, 10 to 15 minutes more. \n\n##### Step 3\n Meanwhile, bring a large pot of generously salted water to a boil over high heat. Add the pasta and cook until al dente, about 13 minutes. Reserve 1/2 cup of the cooking water, then thoroughly drain the pasta\n\n##### Step 4\nAs soon as the tomatoes and feta come out of the oven, stir in the garlic and red pepper flakes (if using). Use the back of a spoon to smash the tomatoes and feta into a smooth and creamy sauce (it’s okay if some of the oil isn’t fully integrated). Add the pasta and half the basil and toss until evenly coated. If the sauce is too thick, stir in some pasta water a couple tablespoons at a time. Taste and adjust the seasoning with salt and pepper. Serve topped with the remaining basil and a pinch of sea salt.\n\n\n![Tux, the Linux mascot](https://i.pinimg.com/originals/ff/1b/47/ff1b47bde042ca9b604243d5bf493fa4.png)', 1, '2024-12-04 15:05:20', '2024-12-04 13:01:19'),
(10, 'Baked Mostaccioli', 'pasta', 'easy', 8, '1 hr 35 min', 'pasta-3.webp', '[{\"ingredients\":\"olive oil, plus more for greasing the baking dish\",\"amount\":\"\",\"unit\":\"1 tablespoon\"},{\"ingredients\":\"yellow onion, finely chopped\",\"amount\":\"\",\"unit\":\"1 small \"},{\"ingredients\":\"Kosher salt and freshly ground black pepper\",\"amount\":\"\",\"unit\":\"\"},{\"ingredients\":\"ground beef\",\"amount\":\"\",\"unit\":\"1\\/2 pound \"},{\"ingredients\":\" sweet Italian sausage, casings removed (from about 3 sausage links)\",\"amount\":\"\",\"unit\":\"1\\/2 pound \"},{\"ingredients\":\"garlic, minced\",\"amount\":\"\",\"unit\":\"4 cloves \"},{\"ingredients\":\"tomato paste\",\"amount\":\"\",\"unit\":\"2 tablespoons\"},{\"ingredients\":\" dried oregano\",\"amount\":\" \",\"unit\":\"1\\/2 easpoon \"},{\"ingredients\":\"more for the ricotta\",\"amount\":\"\",\"unit\":\"  1\\/4 teaspoon \"},{\"ingredients\":\"Pinch crushed red pepper flakes (optional)\",\"amount\":\"\",\"unit\":\"\"}]', 'he best baked mostaccioli has everything you love about lasagna — a savory meat sauce, creamy ricotta and melty mozzarella bubbling at the edges. But instead of flat lasagna noodles, the pasta is mostaccioli, a type of penne with a smooth exterior.', '##### Step 1\nHeat the 1 tablespoon olive oil in a large skillet over medium-high heat. Add the onion, a good pinch of salt and several grinds of black pepper. Cook, stirring occasionally, until the onion is tender and translucent, about 5 minutes. Add the ground beef and sausage; cook, breaking up the meat with a wooden spoon, until crumbled, golden brown and no longer pink, about 8 minutes. Add the garlic, tomato paste, 1/2 teaspoon oregano, crushed red pepper flakes (if using), 1 teaspoon salt and several grinds of black pepper; cook, stirring, until the garlic is tender and the tomato paste is thoroughly combined, 1 to 2 minutes. Add the crushed tomatoes, parsley sprigs and 1/4 cup water and stir to combine. Bring to a simmer, then cover partially with a lid and reduce the heat to medium low. Cook, stirring occasionally, until the sauce has thickened slightly and the flavors have melded, about 15 minutes. Taste and adjust the seasoning with salt and black pepper.\n\n##### Step 2\nMeanwhile, bring a large pot of salted water to a boil over medium-high heat. Add the pasta and cook according to the package directions, stirring occasionally, until al dente. Drain well.\n\n##### Step 3\nMeanwhile, stir together the ricotta, 1/4 cup of the Pecorino Romano, the egg, remaining 1/4 teaspoon oregano, pinch of salt and a couple grinds of black pepper in a medium bowl until smooth and combined; set aside.\n\n##### Step 4\nPreheat the oven to 350 degrees F and lightly grease the bottom and sides of a 9-by-13-inch baking dish with olive oil. Once the meat sauce is finished cooking, remove the parsley sprigs and discard. Stir in the al dente mostaccioli until well coated.\n\n##### Step 5\nTransfer half of the pasta and sauce to the prepared baking dish, then spread the ricotta mixture on top in an even layer with a rubber spatula or small offset spatula. Top with the remaining pasta and sauce, followed by the mozzarella, then the remaining 3 tablespoons Pecorino Romano.\n\n##### Step 6\nCover the baking dish with foil and bake until heated through, about 20 minutes. Remove the foil and bake until the cheese is completely melted and the sauce is bubbling at the edges, 10 to 15 minutes more. Sprinkle with chopped parsley. Let rest for about 5 minutes before serving.', 1, '2024-12-04 15:04:24', '2024-12-04 13:12:53'),
(11, 'yum burger', 'beef', 'easy', 1, '5mins', 'burger-1.webp', '[{\"ingredients\":\"buns\",\"amount\":\"\",\"unit\":\"1\"},{\"ingredients\":\"patty\",\"amount\":\"\",\"unit\":\"1\"}]', 'yumbyrger', 'eat in the bus', 1, '2024-12-09 07:35:25', '2024-12-09 07:35:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`recipe_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `recipe_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
