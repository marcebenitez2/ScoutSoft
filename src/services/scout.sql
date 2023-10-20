-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-10-2023 a las 15:03:15
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `scout`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accounts`
--

CREATE TABLE `accounts` (
  `username` varchar(50) NOT NULL,
  `password` varchar(50) DEFAULT NULL,
  `rol` enum('admin','user') DEFAULT NULL,
  `branch` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `accounts`
--

INSERT INTO `accounts` (`username`, `password`, `rol`, `branch`) VALUES
('marce', '123', 'admin', 'Todos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `beneficiaries`
--

CREATE TABLE `beneficiaries` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `direction` varchar(50) DEFAULT NULL,
  `tel` bigint(20) DEFAULT NULL,
  `mail` varchar(100) DEFAULT NULL,
  `branch` varchar(30) DEFAULT NULL,
  `personal_file` tinyint(1) DEFAULT NULL,
  `medical_file` tinyint(1) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `cuota` date DEFAULT NULL,
  `dni` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `beneficiaries`
--

INSERT INTO `beneficiaries` (`id`, `name`, `birth`, `direction`, `tel`, `mail`, `branch`, `personal_file`, `medical_file`, `active`, `cuota`, `dni`) VALUES
(1, 'Juan Benitez', '1990-05-15', 'Calle 123', 1234567890, 'juan.perez@email.com', 'Castores', 0, 0, 0, '2023-10-01', '98716522'),
(2, 'María López', '1985-03-20', 'Avenida 456', 9876543210, 'maria.lopez@email.com', 'Haditas', 0, 1, 1, '2023-09-15', '63066527'),
(3, 'Pedro Ramírez', '1992-08-10', 'Calle 789', 5555555555, 'pedro.ramirez@email.com', 'Manada', 1, 1, 0, '2023-10-05', '19183073'),
(4, 'Carlos Rodríguez', '1988-12-30', 'Avenida 789', 4444444444, 'carlos.rodriguez@email.com', 'Scout', 1, 0, 1, '2023-10-10', '06715789'),
(5, 'Ana Martínez', '1995-02-25', 'Calle 567', 9999999999, 'ana.martinez@email.com', 'Raider', 0, 1, 1, '2023-09-20', '76029729'),
(6, 'Laura González', '1983-07-18', 'Avenida 123', 7777777777, 'laura.gonzalez@email.com', 'Rover', 1, 1, 0, '2023-10-15', '60001282'),
(7, 'Alejandro Torres', '1993-09-05', 'Calle 456', 8888888888, 'alejandro.torres@email.com', 'Cocina', 1, 0, 1, '2023-10-20', '71917225'),
(8, 'Sofía Pérez', '1998-04-12', 'Avenida 678', 6666666666, 'sofia.perez@email.com', 'Todos', 0, 1, 1, '2023-09-25', '79582285'),
(9, 'Javier Sánchez', '1987-06-28', 'Calle 789', 3333333333, 'javier.sanchez@email.com', 'Castores', 1, 1, 0, '2023-10-25', '82159754'),
(10, 'Elena Rodríguez', '1991-11-08', 'Avenida 234', 2222222222, 'elena.rodriguez@email.com', 'Haditas', 1, 0, 1, '2023-10-30', '72051916'),
(11, 'Marcela Gómez', '1989-06-12', 'Calle 789', 5555555555, 'marcela.gomez@email.com', 'Scout', 1, 0, 1, '2023-11-05', '13780321'),
(12, 'Luisa Martínez', '1994-03-25', 'Avenida 567', 9999999999, 'luisa.martinez@email.com', 'Raider', 0, 1, 1, '2023-10-20', '52745860'),
(13, 'Roberto Pérez', '1986-08-08', 'Calle 123', 1234567890, 'roberto.perez@email.com', 'Rover', 1, 1, 0, '2023-11-10', '22388343'),
(14, 'Carmen López', '1997-02-15', 'Avenida 678', 6666666666, 'carmen.lopez@email.com', 'Cocina', 1, 0, 1, '2023-11-15', '53704139'),
(15, 'Miguel Ramírez', '1984-09-30', 'Calle 234', 2222222222, 'miguel.ramirez@email.com', 'Todos', 0, 1, 1, '2023-10-25', '01355669'),
(16, 'Isabel González', '1990-12-05', 'Avenida 123', 7777777777, 'isabel.gonzalez@email.com', 'Castores', 1, 0, 1, '2023-11-01', '45665931'),
(17, 'Andrés Torres', '1993-07-18', 'Calle 456', 8888888888, 'andres.torres@email.com', 'Haditas', 1, 1, 0, '2023-11-05', '24262651'),
(18, 'Carolina Sánchez', '1998-04-12', 'Avenida 789', 4444444444, 'carolina.sanchez@email.com', 'Manada', 0, 1, 1, '2023-11-10', '84315466'),
(19, 'Ricardo Rodríguez', '1987-06-28', 'Calle 567', 3333333333, 'ricardo.rodriguez@email.com', 'Scout', 1, 0, 1, '2023-11-15', '48789379'),
(20, 'Silvia Martínez', '1991-11-08', 'Avenida 234', 5555555555, 'silvia.martinez@email.com', 'Raider', 1, 1, 0, '2023-11-20', '91000500'),
(21, 'Lucía García', '1993-09-20', 'Calle 567', 5555555555, 'lucia.garcia@email.com', 'Rover', 1, 0, 1, '2023-11-05', '08634369'),
(22, 'Carlos Sánchez', '1998-04-12', 'Avenida 789', 4444444444, 'carlos.sanchez@email.com', 'Cocina', 0, 1, 1, '2023-11-10', '70170346'),
(23, 'Patricia Rodríguez', '1987-06-28', 'Calle 234', 3333333333, 'patricia.rodriguez@email.com', 'Todos', 1, 0, 1, '2023-11-15', '24948627'),
(24, 'Mariano Martínez', '1991-11-08', 'Avenida 123', 7777777777, 'mariano.martinez@email.com', 'Castores', 1, 1, 0, '2023-11-01', '14232103'),
(25, 'Natalia Torres', '1993-07-18', 'Calle 456', 8888888888, 'natalia.torres@email.com', 'Haditas', 0, 1, 1, '2023-11-05', '96314637'),
(26, 'Diego Ramírez', '1984-09-30', 'Calle 234', 2222222222, 'diego.ramirez@email.com', 'Manada', 1, 0, 1, '2023-11-10', '38876880'),
(27, 'Alicia González', '1990-12-05', 'Avenida 123', 6666666666, 'alicia.gonzalez@email.com', 'Scout', 1, 0, 1, '2023-11-15', '05440492'),
(28, 'Jorge Pérez', '1996-02-15', 'Calle 789', 9999999999, 'jorge.perez@email.com', 'Raider', 1, 1, 0, '2023-11-20', '10571824'),
(29, 'Marina López', '1986-08-08', 'Avenida 456', 1234567890, 'marina.lopez@email.com', 'Rover', 0, 1, 1, '2023-11-25', '36537648'),
(30, 'Héctor Martínez', '1995-03-25', 'Calle 567', 9876543210, 'hector.martinez@email.com', 'Cocina', 1, 0, 1, '2023-11-30', '50972771'),
(33, 'Marcelo Nahuel ', '2002-06-07', 'Balbo 4156', 3415690470, 'marcebenitez0607@gmail.com', 'Rover', 1, 1, 1, '2023-04-10', '45250915'),
(34, 'Nico pro', '2000-07-05', 'asldkja123', 123123123, 'nicoo@gmail.com', 'Cocina', 1, 1, 0, '2023-04-10', '73336264');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `branchs`
--

CREATE TABLE `branchs` (
  `namebranch` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `branchs`
--

INSERT INTO `branchs` (`namebranch`) VALUES
('Castores'),
('Cocina'),
('Haditas'),
('Manada'),
('Raider'),
('Rover'),
('Scout'),
('Todos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calendary`
--

CREATE TABLE `calendary` (
  `title` varchar(100) NOT NULL,
  `date` date DEFAULT NULL,
  `startTime` time DEFAULT NULL,
  `endTime` time DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `type` enum('evento','salida','reunion') DEFAULT NULL,
  `document` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inventory`
--

CREATE TABLE `inventory` (
  `id` int(11) NOT NULL,
  `name` varchar(70) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `branch` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `tel` bigint(20) DEFAULT NULL,
  `mail` varchar(100) DEFAULT NULL,
  `message` varchar(300) DEFAULT NULL,
  `date` date DEFAULT current_timestamp(),
  `active` tinyint(1) DEFAULT NULL,
  `userSystem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `notifications`
--

INSERT INTO `notifications` (`id`, `name`, `tel`, `mail`, `message`, `date`, `active`, `userSystem`) VALUES
(1, 'Nombre1', 1234567890, 'correo1@example.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non suscipit.', '2023-10-03', 1, NULL),
(2, 'Nombre2', 2345678901, 'correo2@example.com', 'Sed auctor lectus eget rhoncus. In eu justo nec purus pharetra viverra.', '2023-10-03', 1, NULL),
(3, 'Nombre3', 3456789012, 'correo3@example.com', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.', '2023-10-03', 1, NULL),
(4, 'Nombre4', 4567890123, 'correo4@example.com', 'Praesent in euismod est. Nullam eu tortor aliquet, tristique felis nec, laoreet turpis.', '2023-10-03', 0, 'marce'),
(5, 'Nombre5', 5678901234, 'correo5@example.com', 'Aliquam fringilla ex a nisi ultrices, a dignissim purus volutpat.', '2023-10-03', 0, 'marce'),
(6, 'Nombre6', 6789012345, 'correo6@example.com', 'Fusce id malesuada nulla. Integer eget felis id mi auctor congue.', '2023-10-03', 0, 'marce'),
(7, 'Nombre7', 7890123456, 'correo7@example.com', 'Suspendisse vehicula sapien eu gravida. Fusce quis dolor ut est euismod dapibus.', '2023-10-03', 0, 'marce'),
(8, 'Nombre8', 8901234567, 'correo8@example.com', 'Phasellus consectetur ex vitae tincidunt. Nullam eget dolor vitae purus blandit lacinia.', '2023-10-03', 0, 'marce');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plans`
--

CREATE TABLE `plans` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `branch` varchar(30) DEFAULT NULL,
  `event` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`username`),
  ADD KEY `branch` (`branch`);

--
-- Indices de la tabla `beneficiaries`
--
ALTER TABLE `beneficiaries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branch` (`branch`);

--
-- Indices de la tabla `branchs`
--
ALTER TABLE `branchs`
  ADD PRIMARY KEY (`namebranch`);

--
-- Indices de la tabla `calendary`
--
ALTER TABLE `calendary`
  ADD PRIMARY KEY (`title`);

--
-- Indices de la tabla `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branch` (`branch`);

--
-- Indices de la tabla `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userSystem` (`userSystem`);

--
-- Indices de la tabla `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `event` (`event`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `beneficiaries`
--
ALTER TABLE `beneficiaries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`branch`) REFERENCES `branchs` (`namebranch`);

--
-- Filtros para la tabla `beneficiaries`
--
ALTER TABLE `beneficiaries`
  ADD CONSTRAINT `beneficiaries_ibfk_1` FOREIGN KEY (`branch`) REFERENCES `branchs` (`namebranch`);

--
-- Filtros para la tabla `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`branch`) REFERENCES `branchs` (`namebranch`);

--
-- Filtros para la tabla `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`userSystem`) REFERENCES `accounts` (`username`);

--
-- Filtros para la tabla `plans`
--
ALTER TABLE `plans`
  ADD CONSTRAINT `plans_ibfk_1` FOREIGN KEY (`event`) REFERENCES `calendary` (`title`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
