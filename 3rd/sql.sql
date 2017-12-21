USE `mark`;

SET FOREIGN_KEY_CHECKS=0;


-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(255) NOT NULL unique,
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `access_times` varchar(20) NOT NULL,
  `description` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for url_detail
-- ----------------------------
DROP TABLE IF EXISTS `url_detail`;
CREATE TABLE `url_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `url` varchar(2048) NOT NULL,
  `icon` varchar(4096) NOT NULL,
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `access_times` varchar(20) NOT NULL,
  `description` longtext NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;