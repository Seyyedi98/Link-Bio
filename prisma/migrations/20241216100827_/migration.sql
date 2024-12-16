/*
  Warnings:

  - You are about to drop the column `pageUri` on the `users` table. All the data in the column will be lost.
  - Added the required column `owner` to the `Page` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_pageUri_fkey`;

-- AlterTable
ALTER TABLE `page` ADD COLUMN `owner` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `pageUri`;
