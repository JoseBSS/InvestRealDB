-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-06-2024 a las 04:15:06
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
-- Estructura de tabla para la tabla `investrealperu_operaciones`
--

CREATE TABLE `investrealperu_operaciones` (
  `id` int(6) NOT NULL,
  `id_user` int(111) NOT NULL,
  `banco_que_envia` varchar(111) DEFAULT NULL,
  `quierecomprardolares` varchar(11) NOT NULL,
  `dolaresaenviar` varchar(111) DEFAULT NULL,
  `solesaenviar` varchar(111) DEFAULT NULL,
  `recibe` varchar(111) NOT NULL,
  `cuenta_admin` varchar(111) NOT NULL,
  `banco_tarjeta` varchar(111) DEFAULT NULL,
  `numero_tarjeta` varchar(111) DEFAULT NULL,
  `moneda_tarjeta` varchar(111) DEFAULT NULL,
  `titular_tarjeta` varchar(111) DEFAULT NULL,
  `apodo_tarjeta` varchar(111) DEFAULT NULL,
  `banco_cuenta` varchar(111) DEFAULT NULL,
  `numero_cuenta` varchar(111) DEFAULT NULL,
  `moneda_cuenta` varchar(111) DEFAULT NULL,
  `titular_cuenta` varchar(111) DEFAULT NULL,
  `apodo_cuenta` varchar(111) DEFAULT NULL,
  `precio_actual` varchar(111) DEFAULT NULL,
  `estado` int(111) NOT NULL DEFAULT 0,
  `op_tipo` varchar(111) DEFAULT NULL,
  `new_url_image` varchar(111) DEFAULT NULL,
  `ventadollarplus` varchar(111) NOT NULL,
  `compradollarplus` varchar(111) NOT NULL,
  `email_user` varchar(111) DEFAULT 'N/D',
  `celular_user` varchar(111) DEFAULT 'N/D',
  `borrada` varchar(111) NOT NULL DEFAULT 'no',
  `credito_usado` varchar(111) DEFAULT NULL,
  `id_credito_usado` varchar(111) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `investrealperu_operaciones`
--
ALTER TABLE `investrealperu_operaciones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `investrealperu_operaciones`
--
ALTER TABLE `investrealperu_operaciones`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2168;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
