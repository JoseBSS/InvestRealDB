-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-06-2024 a las 04:15:02
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `investrealperusysdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `investrealperu_1_promociones`
--

CREATE TABLE `investrealperu_1_promociones` (
  `id` int(111) NOT NULL,
  `promocion1_new_url_image` varchar(111) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `investrealperu_1_promociones`
--

INSERT INTO `investrealperu_1_promociones` (`id`, `promocion1_new_url_image`, `fecha_creacion`) VALUES
(21, 'https://i.ibb.co/QcLZdvG/banner1.png', '2024-06-25 21:11:06'),
(22, 'https://i.ibb.co/4j9HrLY/banner2.png', '2024-06-25 21:11:26'),
(23, 'https://i.ibb.co/gSDHLzH/banner3.png', '2024-06-25 21:11:38');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `investrealperu_1_promociones`
--
ALTER TABLE `investrealperu_1_promociones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `investrealperu_1_promociones`
--
ALTER TABLE `investrealperu_1_promociones`
  MODIFY `id` int(111) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
