-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 12, 2021 at 02:50 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dec_alumni`
--

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE `branch` (
  `branch_code` int(11) NOT NULL,
  `branch_name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `branch`
--

INSERT INTO `branch` (`branch_code`, `branch_name`) VALUES
(1, 'Civil Engineering'),
(2, 'Computer Science & Engineering'),
(3, 'Electrical engineering'),
(4, 'Electrical & Electronics Engineering'),
(5, 'Mechanical Engineering');

-- --------------------------------------------------------

--
-- Table structure for table `current_job`
--

CREATE TABLE `current_job` (
  `user_id` varchar(100) NOT NULL,
  `company_name` varchar(300) NOT NULL,
  `title` varchar(250) NOT NULL,
  `joining_year` int(250) NOT NULL,
  `city` varchar(300) NOT NULL,
  `country` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `current_job`
--

INSERT INTO `current_job` (`user_id`, `company_name`, `title`, `joining_year`, `city`, `country`) VALUES
('dff7ci1joknynnbs6', '', '', 0, '', ''),
('dff7ci7h8knim6ai1', 'Google', 'CEO', 2015, 'Hollywood', 'USA');

-- --------------------------------------------------------

--
-- Table structure for table `event_post`
--

CREATE TABLE `event_post` (
  `post_id` varchar(250) NOT NULL,
  `event_title` text NOT NULL,
  `det` int(2) NOT NULL,
  `month` varchar(12) NOT NULL,
  `year` int(5) NOT NULL,
  `time` varchar(10) NOT NULL,
  `ampm` varchar(3) NOT NULL,
  `day` varchar(25) NOT NULL,
  `user_id` varchar(350) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `jobintern_post`
--

CREATE TABLE `jobintern_post` (
  `post_id` varchar(250) NOT NULL,
  `job_title` text NOT NULL,
  `c_name` varchar(500) NOT NULL,
  `loc` varchar(250) NOT NULL,
  `sal` varchar(30) NOT NULL,
  `apply_link` text NOT NULL,
  `user_id` varchar(350) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jobintern_post`
--

INSERT INTO `jobintern_post` (`post_id`, `job_title`, `c_name`, `loc`, `sal`, `apply_link`, `user_id`) VALUES
('5wcknzibvo1', 'Software Engineer', 'Amazon', 'Delhi', '1.2 Lac', 'https://www.google.com', 'dff7ci7h8knim6ai1'),
('dff7ci10okob5vlot', 'Dumka Engineering College Organised a Plantation Campaign', 'uiuo', 'uiouo', 'uioui', 'uiouou', 'dff7ci7h8knim6ai1'),
('dff7ci76gko1j7pvh', 'Web developer', 'TCS', 'Kolkata', '2 Lac/year', 'http://localhost:3000/jobintern_post', 'dff7ci7h8knim6ai1'),
('hjgj', 'gjhgj', 'hjg', 'ghj', 'ghj', 'gjgj', 'gjghj');

-- --------------------------------------------------------

--
-- Table structure for table `need_post`
--

CREATE TABLE `need_post` (
  `post_id` varchar(350) NOT NULL,
  `msg` text NOT NULL,
  `user_id` varchar(350) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `news_post`
--

CREATE TABLE `news_post` (
  `news_id` varchar(250) NOT NULL,
  `news_title` text NOT NULL,
  `pic_path` varchar(350) NOT NULL,
  `news_body` text NOT NULL,
  `det` varchar(15) NOT NULL,
  `user_id` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `news_post`
--

INSERT INTO `news_post` (`news_id`, `news_title`, `pic_path`, `news_body`, `det`, `user_id`) VALUES
('dff7ci10okob5tvpu', 'Dumka Engineering College Organised a Plantation Campaign', 'postpic/1617273222621.jpg', 'dfgfjyhjkhgvh', '05-05-2021', 'dff7ci7h8knim6ai1'),
('dff7ci6tsko0zy1qy', 'Dumka Engineering College Organised a Plantation Campaign...', 'postpic/Coronavirus-COVID-19-learning-CPD-guidance.jpg', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi aliquid veritatis adipisci officiis architecto sit amet quaerat magnam, fugit beatae minima quam, ipsa numquam facere excepturi aut et similique ab quod nihil ipsum minus possimus porro. Quidem quos officia, laboriosam ut voluptatibus veniam. Voluptatum labore ea laboriosam natus excepturi soluta possimus? Rerum expedita asperiores iste doloremque tempore, repellendus maxime ab excepturi ipsa reprehenderit, beatae distinctio. Harum ut modi odit ipsam magni numquam animi odio iste dolorem, pariatur culpa, rerum aliquam laboriosam autem in laudantium doloribus unde consequuntur minima! Quidem sed assumenda autem odio blanditiis. Provident, cupiditate? Consequatur velit, accusamus totam, repellat delectus id sit repudiandae doloremque quam, sed rem cupiditate corporis itaque aut eveniet sunt quae quidem recusandae eaque debitis porro iure! Sequi quisquam nobis ab sed ipsum natus non itaque tempore ea culpa delectus eligendi sint nemo, repellat neque perspiciatis unde error. Doloribus molestias nisi optio nobis totam accusamus omnis obcaecati incidunt beatae recusandae commodi in culpa, sed dolorem praesentium odit alias, asperiores ipsum tempora dolores. Dolorem consequatur sed non saepe! Adipisci animi nesciunt possimus error doloribus provident tempora blanditiis recusandae molestiae porro vel eaque impedit accusantium quaerat quibusdam assumenda atque, quae nemo minima id hic! Iure, dolor itaque?', '28-04-2021', 'dff7ci7h8knim6ai1');

-- --------------------------------------------------------

--
-- Table structure for table `personal_info`
--

CREATE TABLE `personal_info` (
  `user_id` varchar(250) NOT NULL,
  `Profile_pic_path` text NOT NULL,
  `name` varchar(250) NOT NULL,
  `gender` varchar(30) NOT NULL,
  `class_yr` int(5) NOT NULL,
  `bio` text NOT NULL,
  `dob` varchar(10) NOT NULL,
  `branch_code` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `personal_info`
--

INSERT INTO `personal_info` (`user_id`, `Profile_pic_path`, `name`, `gender`, `class_yr`, `bio`, `dob`, `branch_code`) VALUES
('dff7ci1joknynnbs6', 'profilepic/defaultpic.jpg', 'Sunny Gupta', 'Male', 2015, '', '2001-12-26', 3),
('dff7ci7h8knim6ai1', 'profilepic/photo.jpg', 'Saroj Marandi', 'Male', 2017, 'Name : Gulshan Marandi\r\nVill : Hathiapathar\r\nPO : Gormala\r\n', '1997-12-27', 2);

-- --------------------------------------------------------

--
-- Table structure for table `previous_job`
--

CREATE TABLE `previous_job` (
  `user_id` varchar(100) NOT NULL,
  `company_name` varchar(300) NOT NULL,
  `title` varchar(250) NOT NULL,
  `joining_year` int(250) NOT NULL,
  `city` varchar(300) NOT NULL,
  `country` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `previous_job`
--

INSERT INTO `previous_job` (`user_id`, `company_name`, `title`, `joining_year`, `city`, `country`) VALUES
('dff7ci1joknynnbs6', '', '', 0, '', ''),
('dff7ci7h8knim6ai1', 'Amazon', 'CEO', 2014, 'Dumka', 'country');

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `user_id` varchar(767) NOT NULL,
  `email` varchar(740) NOT NULL,
  `password` text NOT NULL,
  `code` bigint(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_details`
--

INSERT INTO `user_details` (`user_id`, `email`, `password`, `code`) VALUES
('dff7ci1joknynnbs6', 'sunny@gmail.com', '$2a$08$Y30WSsCPi4z1DMwfA/u1W.nqNXkfP4v5I3Gyip/2rtElOkbtTvm7m', 0),
('dff7ci7h8knim6ai1', 'gulshanmarandi1997@gmail.com', '$2a$08$BnG2vIqTlVv.jnXhZ6ILeei7VlyPIf.zJZS7MQN8Sxm/6u49eKvMS', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`branch_code`);

--
-- Indexes for table `current_job`
--
ALTER TABLE `current_job`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `event_post`
--
ALTER TABLE `event_post`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `jobintern_post`
--
ALTER TABLE `jobintern_post`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `need_post`
--
ALTER TABLE `need_post`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `news_post`
--
ALTER TABLE `news_post`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `personal_info`
--
ALTER TABLE `personal_info`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `previous_job`
--
ALTER TABLE `previous_job`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
