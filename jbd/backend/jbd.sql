-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 27, 2022 at 11:14 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jbd`
--

-- --------------------------------------------------------

--
-- Table structure for table `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `copete` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `copete`, `cuerpo`, `img_id`) VALUES
(4, 'Qué tendencias reinarán en la casa durante 2022', 'La decoración de interiores también se ha hecho eco de los cambios producidos en el hogar durante el confinamiento, haciendo que la casa retome su papel como un lugar íntimo y seguro, donde relajarse y socializar, al mismo tiempo. ', '1. NATURALEZA. La pasión por la naturaleza se mantiene intacta con materiales naturales, como la madera o el mármol, o otros reciclados de botellas de plástico o de cáscara de huevo, por ejemplo. 2. SOSTENIBILIDAD. La sostenibilidad y la economía circular han sido dos de los motivos principales que han movido este Supersalone con clara conciencia ‘eco’. 3. LO ANTIGUO CON OTRO AIRE. Más moderno y actual. Esta tendencia también ha buscado su lado más ‘green’ rediseñando grandes iconos con materiales más ecológicos y procesos más sostenibles, como la butaca UP de Gaetano Pesce ahora en corcho. 4. EN VERDE. Y no solo como referente a lo natural, sino que hablamos del verde como color. Esmeralda, olivo, lavanda, pino o el ácido y explosivo lima vestían muebles de cuero, como estos de Baxter, terciopelo o mármol. 5. MAXIMALISTA. Por mucho que pese a los que piensan que ‘menos es más’, lo cierto es que desde hace un tiempo el maximalismo se ha colado en la decoración de interiores por la puerta grande, dispuesto a hacerse un lugar entre el japandi, el estilo zen y la sencillez del nórdico. ', NULL),
(5, 'Claves para vivir y decorar la casa con un espíritu más sostenible', 'Se trata de vivir y consumir con responsabilidad, tratando de generar los menos residuos posibles.', 'Son muchas las implicaciones que rodean al movimiento zero waste, pero la esencia es muy sencilla: conseguir vivir sin generar residuos que supongan un peligro añadido para el ecosistema. Este objetivo se puede alcanzar a través de diferentes acciones: - RECHAZAR. Si no quieres generar residuos en casa has de empezar por decir NO a todo aquello que no necesitas: papeles, bolsas de plástico o todas aquellas cosas que compramos sin necesidad. Cambia el chip y bórralas de tu vida. Haz un esfuerzo para evitar que lleguen a ti. - REDUCIR. Esta acción se divide en dos partes: una, comienza a comprar con cabeza y sin derrochar, y dos, deshazte de todo aquello que te sobra. Puedes seguir las enseñanzas de Marie Kondo, o guiarte por otros sistemas de orden y organización como el Dödstäning. Sea como sea, la clave está en reducir lo que tienes en casa. - REUTILIZAR. Olvídate de todo lo desechable, que genera un sinfín de residuos contaminantes. Y, sobre todo, del plástico. Ese es uno de los objetivos de la cultura zero waste: vivir sin plástico. Si generas residuos, aprende a gestionarlos.', NULL),
(6, 'Once cambios exprés para actualizar la decoración de tu casa', 'Con estos pequeños cambios DIY, verdaderos aliados antiedad, lograrás que tu vivienda parezca joven y moderna, sin necesidad de hacer grandes obras o de llamar a un profesional, que dispare tu presupuesto. ¡Descubre cuáles son!', '1. Pon en forma tus PAREDES. Hay pocos cambios tan agradecidos y con tan buen resultado que una mano de pintura. 2. Renueva la tapicería del SOFÁ. Si tu sofá es el más cómodo del mundo, pero su aspecto no acompaña, puedes renovar su ‘look’ con una funda nueva. 3. Da otro aire a los ARMARIOS de cocina. Un simple cambio de los tiradores de los módulos o cambiar el color de las puertas de los armarios, logra un efecto inmediato. 4. CAMBIA los muebles de sitio. Cuando la decoración de casa lleva mucho tiempo igual, se produce cierto estancamiento estético, que puede resultar algo ‘viejuno’ y tremendamente aburrido. 5. Actualiza los AZULEJOS. Una buena idea, fácil de hacer, es pintarlo con una pintura específica para cerámica. Otra opción aún más fácil de lavar la cara de los azulejos de la cocina y el baño es colocar adhesivos especiales. 6. Cambia los INTERRUPTORES. Así de sencillo y de efectivo. Son uno de los elementos de la casa de más uso y que más sufren el paso del tiempo. 7. Crea una pared ACENTO. En colores intensos, que den fuerza y personalidad al ambiente en el que se encuentra. 8. CUSTOMIZA un mueble. Para ello, nada como una mano de pintura, para que parezca otro. 9. Cambia el REVESTIMIENTO. Una manera de dar vida y estilo a tus paredes es empapelándolas con un papel pintado de tendencia o apostar por los paneles decorativos. 10. Sustituye alguna LÁMPARA. Aunque no nos demos cuenta, son parte esencial de la decoración de interiores y uno de los elementos más importantes, y no solo por la función que ejercen. 11. Haz que tus PUERTAS parezcan otras. Para ello, bastará con pintarlas en blanco, potenciando la luminosidad y los metros del espacio.', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'agostina', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'agos', '0000');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
