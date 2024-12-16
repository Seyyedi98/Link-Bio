/*
  Warnings:

  - Added the required column `owner` to the `Page` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `page` ADD COLUMN `owner` VARCHAR(191) NOT NULL;
