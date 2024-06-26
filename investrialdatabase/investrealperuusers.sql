-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-06-2024 a las 04:15:00
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
-- Estructura de tabla para la tabla `investrealperuusers`
--

CREATE TABLE `investrealperuusers` (
  `id` int(111) NOT NULL,
  `username` varchar(111) NOT NULL,
  `password` varchar(111) DEFAULT NULL,
  `email` varchar(111) NOT NULL,
  `referidor` varchar(111) DEFAULT NULL,
  `create_date` varchar(111) DEFAULT NULL,
  `punto_asignado` int(111) DEFAULT NULL,
  `update_date` varchar(111) DEFAULT NULL,
  `tipo_cuenta` varchar(111) DEFAULT '0',
  `name` varchar(111) DEFAULT NULL,
  `lastname` varchar(111) DEFAULT NULL,
  `lastname2` varchar(111) DEFAULT NULL,
  `cedula` varchar(111) DEFAULT NULL,
  `celular` varchar(111) DEFAULT NULL,
  `tipo_documento` int(111) DEFAULT NULL,
  `numero_documento` int(111) DEFAULT NULL,
  `id_publico` varchar(111) DEFAULT NULL,
  `direccion1` varchar(111) DEFAULT NULL,
  `direccion2` varchar(111) DEFAULT NULL,
  `region` varchar(111) DEFAULT NULL,
  `provincia` varchar(111) DEFAULT NULL,
  `distrito` varchar(111) DEFAULT NULL,
  `es_empresa` int(111) DEFAULT NULL,
  `fecha_nacimiento` varchar(111) DEFAULT NULL,
  `paisnombre` varchar(111) DEFAULT NULL,
  `paisID` int(11) DEFAULT NULL,
  `genero` varchar(22) DEFAULT 'Seleccione Género',
  `descripcion` varchar(500) DEFAULT 'Ingrese una breve descripción sobre tí',
  `profile_url_img` varchar(555) DEFAULT NULL,
  `status` varchar(111) DEFAULT 'activo',
  `politicamente_expuesta` varchar(111) DEFAULT NULL,
  `nombre_politico` varchar(111) DEFAULT NULL,
  `institucion_politica` varchar(111) DEFAULT NULL,
  `cargo_politico` varchar(111) DEFAULT NULL,
  `ticketsmail` tinyint(1) DEFAULT 0,
  `codigo_de_activacion` varchar(111) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `investrealperuusers`
--

INSERT INTO `investrealperuusers` (`id`, `username`, `password`, `email`, `referidor`, `create_date`, `punto_asignado`, `update_date`, `tipo_cuenta`, `name`, `lastname`, `lastname2`, `cedula`, `celular`, `tipo_documento`, `numero_documento`, `id_publico`, `direccion1`, `direccion2`, `region`, `provincia`, `distrito`, `es_empresa`, `fecha_nacimiento`, `paisnombre`, `paisID`, `genero`, `descripcion`, `profile_url_img`, `status`, `politicamente_expuesta`, `nombre_politico`, `institucion_politica`, `cargo_politico`, `ticketsmail`, `codigo_de_activacion`) VALUES
(585, 'alguien@gmail.com', '0000000000', 'alguien@gmail.com', 'DB5JW0G', '2023-01-19T22:14:09.728Z', NULL, NULL, '1', 'CRISTHIAN IRVING', 'VALENCIA', 'BAZAN', NULL, '234324324', 1, 45454545, 'SZ6?VJG', 'dsadasdasdasd', NULL, 'Ancash', 'Huaraz', 'Olleros', 0, '91991-01-08', NULL, NULL, 'Masculino', 'Ingrese una breve descripción sobre tí', NULL, 'activo', NULL, NULL, NULL, NULL, 0, NULL),
(590, 'admin@gmail.com', '1111111111', 'admin@gmail.com', NULL, '2023-01-23T07:20:48.553Z', NULL, NULL, '999', 'administrados', 'administrados', 'admin', NULL, '1.0E+21', 3, 7777774, '1XZS960', 'lima', NULL, 'Lima', 'Lima', 'Ate', 0, '2023-01-23', NULL, NULL, 'Femenino', 'Ingrese una breve descripción sobre tí', NULL, 'activo', NULL, NULL, NULL, NULL, 0, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `investrealperuusers`
--
ALTER TABLE `investrealperuusers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `id_publico` (`id_publico`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `investrealperuusers`
--
ALTER TABLE `investrealperuusers`
  MODIFY `id` int(111) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=851;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
