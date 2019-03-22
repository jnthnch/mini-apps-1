/*
    sqlite3 items.db < schema.sql
    the right side of < means you will run schema.sql commands onto 
    items.db file

    to run sqlite3, type sqlite3 reports.db
    
*/


DROP TABLE IF EXISTS `reports`;
		
CREATE TABLE `reports` (
  `id` INTEGER NULL DEFAULT NULL,
  `firstName` VARCHAR(140) NULL DEFAULT NULL,
  `lastName` VARCHAR NULL DEFAULT NULL,
  `county` VARCHAR NULL DEFAULT NULL,
  `city` VARCHAR NULL DEFAULT NULL,
  `role` VARCHAR NULL DEFAULT NULL,
  `sales` INTEGER NULL DEFAULT NULL
);