-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-06-2024 a las 04:15:03
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
-- Estructura de tabla para la tabla `investrealperu_aumento_cambio`
--

CREATE TABLE `investrealperu_aumento_cambio` (
  `id` int(111) NOT NULL,
  `aumento_venta` decimal(12,3) NOT NULL,
  `aumento_compra` decimal(12,3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `investrealperu_aumento_cambio`
--

INSERT INTO `investrealperu_aumento_cambio` (`id`, `aumento_venta`, `aumento_compra`) VALUES
(1, -0.002, -0.005);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `investrealperu_aumento_cambio`
--
ALTER TABLE `investrealperu_aumento_cambio`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `investrealperu_aumento_cambio`
--
ALTER TABLE `investrealperu_aumento_cambio`
  MODIFY `id` int(111) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
