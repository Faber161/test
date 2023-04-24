-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Апр 24 2023 г., 18:55
-- Версия сервера: 10.4.27-MariaDB
-- Версия PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `f0810470_test`
--

-- --------------------------------------------------------

--
-- Структура таблицы `checkup`
--

CREATE TABLE `checkup` (
  `id` int(11) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `check1` varchar(30) NOT NULL,
  `check2` varchar(30) NOT NULL,
  `check3` varchar(30) NOT NULL,
  `check4` varchar(30) NOT NULL,
  `old_price` int(5) NOT NULL,
  `new_price` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `checkup`
--

INSERT INTO `checkup` (`id`, `gender`, `check1`, `check2`, `check3`, `check4`, `old_price`, `new_price`) VALUES
(1, 'мужчин', 'Гормональный скрининг', 'Тестостерон', 'Свободный тестостерон', 'Глобулин', 3500, 2800),
(2, 'женщин', 'lorem', 'ipsum', 'dolor', 'amet', 3500, 2500),
(3, 'мужчин', 'Тестостерон', 'Скрининг', 'Глобулин', 'Свободный тестостерон', 4000, 3200),
(4, 'женщин', 'Ещё', 'одна', 'запись', 'тест', 5000, 3500);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `checkup`
--
ALTER TABLE `checkup`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `checkup`
--
ALTER TABLE `checkup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
