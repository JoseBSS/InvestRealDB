-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-06-2024 a las 04:15:26
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
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 353, 'Personal Access Token', '9be2aad6343f25b13498b0cf4a537d3bcf57e377c476791656350993c8511b63', '[\"*\"]', NULL, '2022-02-17 01:20:42', '2022-02-17 01:20:42'),
(2, 'App\\Models\\User', 353, 'Personal Access Token', 'bc0561f3828eea5f88eebb63abde30102511ff62bba44d4b4db44c6859b8cd9c', '[\"*\"]', NULL, '2022-02-17 01:22:01', '2022-02-17 01:22:01'),
(3, 'App\\Models\\User', 353, 'Personal Access Token', '835f08b79be99468f8a99bfa44ce704dccdac8148a4ddb5e6b6da5f50d5bbc9b', '[\"*\"]', NULL, '2022-02-17 01:29:21', '2022-02-17 01:29:21'),
(4, 'App\\Models\\User', 353, 'Personal Access Token', 'fd9629348b2103c423920f771759af10c9dbdf793a111cbad026b9aa4a499ae4', '[\"*\"]', NULL, '2022-02-17 01:33:17', '2022-02-17 01:33:17'),
(5, 'App\\Models\\User', 353, 'Personal Access Token', 'd8440d0a16d4fb5c5262a963bf61ff8ebc679ac2df3b140829ddba8af29be860', '[\"*\"]', NULL, '2022-02-17 01:33:40', '2022-02-17 01:33:40'),
(6, 'App\\Models\\User', 353, 'Personal Access Token', '4e04f0ef3e5d58bb26c9d1bde2280c06810d4d42f40c1334d84dd4b5fca1f130', '[\"*\"]', NULL, '2022-02-17 01:39:27', '2022-02-17 01:39:27'),
(7, 'App\\Models\\User', 353, 'Personal Access Token', '8db660a65c5280093086c484aa61ddd15ef596d59aa41bdce8d1c4683cd08e28', '[\"*\"]', NULL, '2022-02-17 01:54:22', '2022-02-17 01:54:22'),
(8, 'App\\Models\\User', 353, 'Personal Access Token', '642000235ec42a340dd8923681f4a39b434f550da80b462c4c0955ebd24419a4', '[\"*\"]', NULL, '2022-02-17 01:55:33', '2022-02-17 01:55:33');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
