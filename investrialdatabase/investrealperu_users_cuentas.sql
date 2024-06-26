-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-06-2024 a las 04:15:08
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
-- Estructura de tabla para la tabla `investrealperu_users_cuentas`
--

CREATE TABLE `investrealperu_users_cuentas` (
  `id` int(11) NOT NULL,
  `id_user` int(111) NOT NULL,
  `banco_cuenta` varchar(111) NOT NULL,
  `numero_cuenta` varchar(111) NOT NULL,
  `moneda_cuenta` varchar(111) NOT NULL,
  `titular_cuenta` varchar(111) NOT NULL,
  `apodo_cuenta` varchar(111) DEFAULT NULL,
  `estado` int(111) NOT NULL DEFAULT 0,
  `op_tipo` varchar(111) NOT NULL DEFAULT 'cuenta',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `investrealperu_users_cuentas`
--
ALTER TABLE `investrealperu_users_cuentas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `investrealperu_users_cuentas`
--
ALTER TABLE `investrealperu_users_cuentas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
