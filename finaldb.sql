-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2021 at 05:53 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clinic`
--

-- --------------------------------------------------------

--
-- Table structure for table `apdates`
--

CREATE TABLE `apdates` (
  `id` int(11) NOT NULL,
  `user_select_date` varchar(255) DEFAULT NULL,
  `t_id` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL,
  `PatientId` varchar(255) DEFAULT NULL,
  `AppointmentDate` varchar(255) DEFAULT NULL,
  `AppointmentTime` varchar(255) DEFAULT NULL,
  `AppointmentTakenDate` varchar(255) DEFAULT NULL,
  `Status` varchar(255) DEFAULT NULL,
  `UserIdGiven` varchar(255) DEFAULT NULL,
  `Prescription` varchar(255) DEFAULT NULL,
  `Fees` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `PatientId`, `AppointmentDate`, `AppointmentTime`, `AppointmentTakenDate`, `Status`, `UserIdGiven`, `Prescription`, `Fees`, `createdAt`, `updatedAt`) VALUES
(25, 'himanshujain367', '2021-04-23', '10:30-10:45', 'Take Appointment', 'Cancelled', 'zydfus', 'images\\1.jpg', NULL, '2021-04-22 08:34:12', '2021-05-08 17:45:15'),
(31, 'ritesh28', '2021-05-15', '10:30-10:45', 'Consult Offline', 'Arrived', NULL, 'images\\1.jpg', NULL, '2021-05-07 04:26:23', '2021-05-10 08:10:36'),
(32, 'ritesh28', '2021-05-15', '10:00-10:15', 'Consult Online', 'Completed', NULL, 'images\\1.jpg', NULL, '2021-05-07 04:32:37', '2021-05-10 16:00:03'),
(33, 'chaitya02', '2021-05-15', '10:15-10:30', 'Consult Offline', 'on hold\r\n', NULL, 'images\\screenshot.png', NULL, '2021-05-07 04:48:30', '2021-05-24 06:05:00'),
(51, 'tarun01', '2021-06-05', '11:00-11:15', 'Consult Online', 'on hold', NULL, 'empty', NULL, '2021-05-19 12:01:06', '2021-05-19 12:01:06'),
(52, 'tarun01', '2021-05-29', '11:00-11:15', 'Consult Online', 'on hold', NULL, 'empty', NULL, '2021-05-19 12:08:13', '2021-05-19 12:08:13'),
(53, 'tarun01', '2021-05-24', '10:00-10:15', 'Consult Offline', 'on hold', NULL, 'empty', NULL, '2021-05-23 04:52:07', '2021-05-23 04:52:07');

-- --------------------------------------------------------

--
-- Table structure for table `aptimes`
--

CREATE TABLE `aptimes` (
  `id` int(11) NOT NULL,
  `timeSlot` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `aptimes`
--

INSERT INTO `aptimes` (`id`, `timeSlot`, `status`, `createdAt`, `updatedAt`) VALUES
(1, '10:00-10:15', 'available', '2021-03-24 11:36:32', '2021-03-24 11:36:32'),
(2, '10:15-10:30', 'available', '2021-04-02 10:58:55', '2021-04-02 10:58:55'),
(3, '10:30-10:45', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(4, '10:45-11:00', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(5, '11:00-11:15', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(6, '11:15-11:30', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(7, '11:30-11:45', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(8, '11:45-12:00', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(13, '16:00-16:15', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(14, '16:15-16:30', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(15, '16:30-16:45', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(16, '16:45-17:00', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(17, '17:00-17:15', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(18, '17:15-17:30', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(19, '17:30-17:45', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(20, '17:45-18:00', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(21, '18:00-18:15', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(22, '18:15-18:30', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(23, '18:30-18:45', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(24, '18:45-19:00', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(25, '19:00-19:15', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(26, '19:15-19:30', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(27, '19:30-19:45', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26'),
(28, '19:45-20:00', 'available', '2021-04-08 13:04:26', '2021-04-08 13:04:26');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `BrandName` varchar(255) DEFAULT NULL,
  `IsDeleted` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `BrandName`, `IsDeleted`, `createdAt`, `updatedAt`) VALUES
(3, 'cadila\r\n', '1', '2021-03-22 08:43:40', '2021-05-08 16:40:44'),
(5, 'cipla', '1', '2021-03-22 08:43:40', '2021-03-22 11:28:02'),
(6, 'glenmark\r\n', '1', '2021-03-22 08:43:40', '2021-03-22 11:28:02'),
(7, 'Sun Pharma', '1', '2021-03-22 08:43:40', '2021-03-22 11:28:02');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `PatientId` varchar(255) DEFAULT NULL,
  `MedicineId` varchar(255) DEFAULT NULL,
  `Qty` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT 'active',
  `Price` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `PatientId`, `MedicineId`, `Qty`, `status`, `Price`, `createdAt`, `updatedAt`) VALUES
(4, 'himanshujain367', '8', '3', 'off', '195', '2021-04-23 09:09:01', '2021-04-23 09:11:51'),
(5, 'himanshujain367', '7', '2', 'off', '500', '2021-04-23 09:09:52', '2021-04-23 09:11:51'),
(6, 'himanshujain367', '7', '1', 'active', '250', '2021-04-24 05:31:16', '2021-04-24 05:31:16'),
(23, 'rohit45', '7', '4', 'off', '1000', '2021-04-26 02:57:01', '2021-04-26 02:58:12'),
(24, 'rohit45', '8', '2', 'off', '130', '2021-04-26 02:57:02', '2021-04-26 02:58:12'),
(26, 'ritesh28', '8', '1', 'off', '65', '2021-05-07 03:31:44', '2021-05-07 04:42:51'),
(27, 'ritesh28', '7', '1', 'off', '250', '2021-05-07 03:32:50', '2021-05-07 04:42:51'),
(28, 'ananya02', '7', '1', 'off', '250', '2021-05-07 08:46:30', '2021-05-08 05:44:22'),
(29, 'ananya02', '19', '3', 'active', '540', '2021-05-08 07:10:20', '2021-05-08 07:10:31'),
(31, 'tarun01', '10', '3', 'off', '1500', '2021-05-10 15:53:20', '2021-05-10 15:54:12');

-- --------------------------------------------------------

--
-- Table structure for table `clinics`
--

CREATE TABLE `clinics` (
  `id` int(11) NOT NULL,
  `ClinicName` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `ContactNo` varchar(255) DEFAULT NULL,
  `AboutUs` varchar(255) DEFAULT NULL,
  `NewPatientFees` varchar(255) DEFAULT NULL,
  `OldPatientFees` varchar(255) DEFAULT NULL,
  `VideoConsultationFees` varchar(255) DEFAULT NULL,
  `drname` varchar(255) DEFAULT NULL,
  `IsDeleted` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `clinic_times`
--

CREATE TABLE `clinic_times` (
  `id` int(11) NOT NULL,
  `ClinicId` varchar(255) DEFAULT NULL,
  `Days` varchar(255) DEFAULT NULL,
  `From` varchar(255) DEFAULT NULL,
  `To` varchar(255) DEFAULT NULL,
  `IsDeleted` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clinic_times`
--

INSERT INTO `clinic_times` (`id`, `ClinicId`, `Days`, `From`, `To`, `IsDeleted`, `createdAt`, `updatedAt`) VALUES
(2, '4', 'Tuesday', '1:30', '4:30', '1', '2021-03-07 08:54:37', '2021-03-22 10:58:51');

-- --------------------------------------------------------

--
-- Table structure for table `lives`
--

CREATE TABLE `lives` (
  `id` int(11) NOT NULL,
  `wtime` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `medicines`
--

CREATE TABLE `medicines` (
  `id` int(11) NOT NULL,
  `MedicineName` varchar(255) DEFAULT NULL,
  `BrandId` varchar(255) DEFAULT NULL,
  `Price` varchar(255) DEFAULT NULL,
  `Photo` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `AvailableQty` varchar(255) DEFAULT NULL,
  `IsDeleted` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `medicines`
--

INSERT INTO `medicines` (`id`, `MedicineName`, `BrandId`, `Price`, `Photo`, `Description`, `AvailableQty`, `IsDeleted`, `createdAt`, `updatedAt`) VALUES
(7, 'Covid-19', '6', '250', 'images\\coid.jpg', 'Vulnerable populations in all countries are the highest priority for vaccination. At the same time, more than 200 additional vaccine candidates are in development, ...', '498', '1', '2021-04-10 14:52:31', '2021-05-08 16:37:39'),
(8, 'Zydum', '7', '65', 'images\\di.jpg', 'Zydum 1000mg Injection is an antibiotic medicine used to treat bacterial infections in your body. It is effective in infections of the brain, lungs, ear, urinary tract, skin and soft tissues, bones and joints, blood, and heart. It is also used to prevent ', '449', '1', '2021-04-10 14:57:04', '2021-05-07 04:42:51'),
(9, 'Ascoril LS Syrup', '3', '600', 'images\\ascoril.jpg', 'Ascoril LS Syrup is a combination medicine used in the treatment of cough with mucus. It thins mucus in the nose, windpipe and lungs, making it easier to cough out. It also provides relief from runny nose, sneezing, itching, and watery eyes.', '300', '1', '2021-05-08 06:26:21', '2021-05-08 06:26:21'),
(10, 'Allegra 120mg Tablet', '3', '500', 'images\\allegra.jpg', 'Allegra 120mg Tablet is an anti-allergy medicine used in the treatment of allergic symptoms such as runny nose, congestion or stuffiness, sneezing, itching, swelling, and watery eyes. It also helps treat skin allergies with itching, redness, or swelling.', '97', '1', '2021-05-08 06:29:36', '2021-05-10 15:54:12'),
(11, 'Combiflam Tablet', '4', '50', 'images\\combiflam.jpg', 'Combiflam Tablet contains two painkiller medicines. They work together to reduce pain, fever, and inflammation. It is used to treat many conditions such as headache, muscle pain, pain during periods, toothache and joint pain.', '600', '1', '2021-05-08 06:47:43', '2021-05-08 06:47:43'),
(12, 'Cheston Cold Tablet', '5', '50', 'images\\cheston.jpg', 'Cheston Cold Tablet is used in the treatment of common cold symptoms like runny nose, stuffy nose, sneezing, watery eyes and congestion or stuffiness. It is also used to relieve pain and fever.', '5', '1', '2021-05-08 06:50:00', '2021-05-08 06:50:00'),
(13, 'Acivir 200 DT Tablet', '5', '100', 'images\\acivir.jpg', 'Acivir 200 DT Tablet is an antiviral medicine. It helps in treating viral infections like herpes labialis, herpes simplex, shingles, genital herpes infection, and chickenpox. It prevents the multiplication of virus in human cells and therefore helps in cl', '200', '1', '2021-05-08 06:54:09', '2021-05-08 06:54:09'),
(14, 'Dolo 650 Tablet', '7', '30', 'images\\dolo.jpg', 'Dolo 650 Tablet is a medicine used to relieve pain and to reduce fever. It is used to treat many conditions such as headaches, body aches, toothaches, and the common cold. It works by inhibiting the release of certain chemicals that cause pain and fever.', '100', '1', '2021-05-08 06:56:44', '2021-05-08 06:56:44'),
(15, 'Grilinctus Syrup', '5', '200', 'images\\grilinctus.jpg', 'Grilinctus Syrup is a combination medicine used to treat cough. It thins mucus in the nose, windpipe and lungs, making it easier to cough out. It also provides relief from runny nose, watery eyes and throat irritation.', '50', '1', '2021-05-08 06:59:12', '2021-05-08 06:59:12'),
(16, 'Ibugesic Plus Oral Suspension Strawberry', '5', '50', 'images\\ibugesic.jpg', 'Ibugesic Plus Oral Suspension Strawberry is a combination of two medicines, Ibuprofen and Paracetamol. Both of these belong to a class of medicines known as non-steroidal anti-inflammatory drugs (NSAIDS). Ibugesic Plus Oral Suspension Strawberry helps low', '20', '1', '2021-05-08 07:03:37', '2021-05-08 07:03:37'),
(17, 'Betadine 2% Gargle Mint', '3', '150', 'images\\betadine.jpg', 'Betadine 2% Gargle Mint is an antiseptic and disinfectant agent that is used as a mouthwash to kill germs that cause infections of the mouth. It also relieves dryness of the mouth and sore throat.', '10', '1', '2021-05-08 07:05:29', '2021-05-08 07:05:29'),
(18, 'Bandy-Plus 12 Tablet', '3', '30', 'images\\bandy.jpg', 'Bandy-Plus 12 Tablet is a combination medicine that is used in the treatment of parasites and worm infestations in the body. It fights against the worms to treat the infection.', '0', '1', '2021-05-08 07:07:30', '2021-05-08 07:07:30'),
(19, 'Meftal-Spas Tablet', '4', '180', 'images\\meftal.jpg', 'Meftal-Spas Tablet is a prescription medicine that helps to provide symptomatic relief from menstrual (period-related) pain and cramps. It is also used to treat abdominal pain by relieving spasms of the muscles in the stomach and intestines.', '3', '1', '2021-05-08 07:10:04', '2021-05-08 07:10:04'),
(20, 'Medrol 4mg Tablet', '6', '220', 'images\\medrol.jpg', 'Medrol 4mg Tablet is a medicine used to treat wide variety of medical conditions such as severe allergic conditions, asthma, rheumatic disorder, skin and eye disorders, and systemic lupus erythematosus. It provides relief by preventing the release of subs', '40', '1', '2021-05-08 07:12:30', '2021-05-08 07:12:30'),
(21, '1mg Super Antioxidant Multiminerals with Betacarotene Capsule', '7', '120', 'images\\antioxidant.png', 'The product contains highly potent ingredients such as betacarotene, zinc sulphate and selenium It strengthens the immune system It supports prostate health  It promotes skin health', '250', '1', '2021-05-08 07:14:35', '2021-05-08 16:38:01');

-- --------------------------------------------------------

--
-- Table structure for table `medicine_orders`
--

CREATE TABLE `medicine_orders` (
  `id` int(11) NOT NULL,
  `PatientId` varchar(255) DEFAULT NULL,
  `MedicineId` varchar(255) DEFAULT NULL,
  `Qty` varchar(255) DEFAULT NULL,
  `Price` varchar(255) DEFAULT NULL,
  `Total` varchar(255) DEFAULT NULL,
  `Delivery_Address` varchar(255) DEFAULT NULL,
  `OrderStatus` varchar(255) DEFAULT NULL,
  `PaymentMode` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `medicine_orders`
--

INSERT INTO `medicine_orders` (`id`, `PatientId`, `MedicineId`, `Qty`, `Price`, `Total`, `Delivery_Address`, `OrderStatus`, `PaymentMode`, `createdAt`, `updatedAt`) VALUES
(18, 'ritesh28', '8', '1', '65', '65', 'balaji', 'Dispatched', 'offline', '2021-05-07 04:42:54', '2021-05-13 05:31:09'),
(19, 'ritesh28', '7', '1', '250', '250', 'balaji', 'Delivered', 'offline', '2021-05-07 04:42:54', '2021-05-13 05:31:17'),
(21, 'tarun01', '10', '3', '500', '1500', 'AMizara', 'Cancelled', 'online', '2021-05-10 15:54:15', '2021-05-10 15:54:28');

-- --------------------------------------------------------

--
-- Table structure for table `online_consulatations`
--

CREATE TABLE `online_consulatations` (
  `id` int(11) NOT NULL,
  `PatientId` varchar(255) DEFAULT NULL,
  `ConsultationDate` varchar(255) DEFAULT NULL,
  `Status` varchar(255) DEFAULT NULL,
  `TimeGiven` varchar(255) DEFAULT NULL,
  `Prescription` varchar(255) DEFAULT NULL,
  `PaymentTransId` varchar(255) DEFAULT NULL,
  `Fees` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `PatientId` varchar(255) DEFAULT NULL,
  `OrderDate` varchar(255) DEFAULT NULL,
  `OrderStatus` varchar(255) DEFAULT NULL,
  `PaymentMode` varchar(255) DEFAULT NULL,
  `Prescription` varchar(255) DEFAULT NULL,
  `PaymentTransId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id` int(11) NOT NULL,
  `OrderId` varchar(255) DEFAULT NULL,
  `MedicineId` varchar(255) DEFAULT NULL,
  `Qty` varchar(255) DEFAULT NULL,
  `Price` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `login_id` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `IsDeleted` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `registers`
--

CREATE TABLE `registers` (
  `id` int(11) NOT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `mname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `uname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `utype` varchar(255) DEFAULT NULL,
  `IsDeleted` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registers`
--

INSERT INTO `registers` (`id`, `fname`, `mname`, `lname`, `address`, `contact_no`, `email_id`, `uname`, `password`, `utype`, `IsDeleted`, `createdAt`, `updatedAt`) VALUES
(17, 'yaksh', NULL, 'shah', 'abcdefghi', NULL, 'yakshshah750@gmail.com', 'yaksh05', '$2b$10$pEHr1ZVsPCf.Iz6DEndRUOCK/JeT.p9SnHOmap4CkOk1r2X.MZpTi', NULL, '1', '2021-04-20 10:10:27', '2021-04-22 04:22:06'),
(18, 'chaitya1', NULL, 'jain', 'jfbjbjbrfdgbjkgrg', '8511660757', 'Mishelshah07@gmail.com', 'chaitya22', '$2b$10$rOSlPbc9WKZ1qKZdsdsIjOVFIzpVATIVncADVoV5B/loTGPOo/9Ai', NULL, '1', '2021-04-20 10:12:33', '2021-04-20 15:07:55'),
(22, 'mishel', NULL, 'shah', 'amizara', '8511660756', 'mishelshah07@gmail.com', 'mishel07', '$2b$10$QH7kDQzvUs3.0jMpwjAXq.3U9mQUNj0RYmXF8UVbPuEsDuUpF/Ici', NULL, '1', '2021-04-21 08:17:47', '2021-04-21 08:17:47'),
(25, 'Himanshu', NULL, 'Jain', 'Shashwat', '9712446711', 'himanshujain367@gmail.com', 'himanshujain367', '$2b$10$SF2WxCRHyQgLaF9Tm96UBu21Tx8WLJVXqviZUtXP6jMn88k.H1E1W', NULL, '1', '2021-04-22 08:28:18', '2021-05-06 11:51:31'),
(26, 'Rohit', NULL, 'Sharma', 'Mumbai', '8511660757', 'yakshshah750@gmail.com', 'rohit45', '$2b$10$kO4NNqGM36DftQy95iHO3e9fPRXqx4Fb/VMYxoPC0E6vKghhDwZoa', NULL, '1', '2021-04-24 05:42:44', '2021-04-24 05:42:44'),
(27, 'Mishel', NULL, 'Shah', '27,amizara soc', '8511660757', 'mishel07@gmail.com', 'mishel29', '$2b$10$4SGvu8HUuxb63dN5K8xcluMJd3Fz.1FSilIkdfX53WmHycsvbvhqC', 're', '1', '2021-05-06 05:53:37', '2021-05-06 05:53:37'),
(28, 'heni', NULL, 'shah', 'mm', '8511660756', NULL, 'heni07', '$2b$10$zT3VXj3zXp.oUKzhgyrLCugqRG.MU1mzdCN9zlrrXGWaheXngQNKu', NULL, '1', '2021-05-06 06:11:23', '2021-05-06 06:11:23'),
(29, 'ritesh', NULL, 'shah', 'balaji', '8511660756', 'mishelshah07@gmail.com', 'ritesh28', '$2b$10$vlHEFQ3StSQfkBX/nDQQgu3nlidW5b5vY/hhTIYSe7vcJwSSTuLnC', NULL, '1', '2021-05-06 06:15:07', '2021-05-06 11:16:14'),
(34, 'chaitya', NULL, 'shah', 'Amizara', '8511660757', 'mishelshah07@gmail.com', 'chaitya02', '$2b$10$zqKcbgMGQMAXN5yjbhmpHeZlXwZiBtVhoRls3q8SPG29uO9ulCHle', NULL, '1', '2021-05-07 04:47:07', '2021-05-07 04:47:07'),
(35, 'test', NULL, 'xyz', 'addres', '1403840239', 's@gmail.com', 'testuser', '$2b$10$uBwEUdcuvte2aILruehIiOHIWxqPs/r3SRXv.xQOd3MPw16m0eNUe', NULL, '1', '2021-05-07 08:45:42', '2021-05-08 15:12:37'),
(37, 'RIta', NULL, 'Shah', '27,Amizara Society,\nRambaug Road,\nSabarmati,\nAhemedabad-05.', '8511660756', 'mishelshah07@gmail.com', 'rita01', '$2b$10$KAD5L3xyj0K36tK0EsxC.OVPARQD8Twf9ZRABfgHpn9JyZI7dLu8K', NULL, '1', '2021-05-08 12:49:30', '2021-05-08 15:20:47'),
(38, 'Rita', NULL, 'shah', 'amizara', '9712446711', 'mishelshah07@gmail.com', 'rita02', '$2b$10$QbVQAiCbVe4C8yNg0mwzXeg3/kIGNn5wQBUpu4S0nfvyW6MNBc7Oi', NULL, '1', '2021-05-08 13:24:48', '2021-05-08 13:24:48'),
(39, 'mishel', NULL, 'shah', 'sabarmati', '8511660757', 'mishelshah07@gmail.com', 'mishel01', '$2b$10$BTFH2ZzFOEcrXUIILUSExOSwfQVuKxw9TltE2iptM60BOzPO/H0CK', NULL, '1', '2021-05-08 18:05:13', '2021-05-08 18:05:13'),
(40, 'Tarun', NULL, 'Shah', 'AMizara', '9712446711', 'ritashah646@gmail.com', 'tarun01', '$2b$10$EJx.AZB8Gr.U6uxaJAJmf.NwwSA3QKNdHVIvpDvYPBbldmPsgkDCS', NULL, '1', '2021-05-10 15:51:54', '2021-05-10 15:55:04'),
(41, 'ajmera', NULL, 'shah', '29,Manibhadra Society,Rambaug Road,Sabarmati,Ahemedabad-05.', '8511660757', 'ajmera07@gmail.com', 'ajmera07', '$2b$10$Jw0zpQKnVffIPyYvtHjEPefEMIckd1HXg9tzpTh15nFVPzzr/prHi', 'doctor', '1', '2021-05-13 04:22:34', '2021-05-13 04:22:34'),
(42, 'Manan', NULL, 'Jain', 'Sabarmati', '9427331543', 'mananjain02@gmail.com', 'manan02', '$2b$10$KUdAJVSYpJbRl9efYQiV8.loXNAXslDH1Fiyatd7lL/hfj7maQN3y', 'receptionist', '1', '2021-05-13 05:08:12', '2021-05-13 05:08:12'),
(43, 'Harshal', NULL, 'Kothari', 'Sabarmati', '9712446711', 'harshalkothari01@gmail.com', 'harshal01', '$2b$10$drEJyACboBec15AANj4FoOufPaRm6ZOhYYFEKgSF8eyyRcbNzYoSS', 'medicalAdmin', '1', '2021-05-13 05:13:39', '2021-05-13 05:13:39');

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `id` int(11) NOT NULL,
  `PatientId` varchar(255) DEFAULT NULL,
  `Report` varchar(255) DEFAULT NULL,
  `Remarks` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apdates`
--
ALTER TABLE `apdates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `aptimes`
--
ALTER TABLE `aptimes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clinics`
--
ALTER TABLE `clinics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clinic_times`
--
ALTER TABLE `clinic_times`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lives`
--
ALTER TABLE `lives`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medicines`
--
ALTER TABLE `medicines`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medicine_orders`
--
ALTER TABLE `medicine_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `online_consulatations`
--
ALTER TABLE `online_consulatations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registers`
--
ALTER TABLE `registers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `apdates`
--
ALTER TABLE `apdates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `aptimes`
--
ALTER TABLE `aptimes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `clinics`
--
ALTER TABLE `clinics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `clinic_times`
--
ALTER TABLE `clinic_times`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `lives`
--
ALTER TABLE `lives`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `medicines`
--
ALTER TABLE `medicines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `medicine_orders`
--
ALTER TABLE `medicine_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `online_consulatations`
--
ALTER TABLE `online_consulatations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registers`
--
ALTER TABLE `registers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
