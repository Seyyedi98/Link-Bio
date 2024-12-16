/*
  Warnings:

  - You are about to drop the column `owner` on the `page` table. All the data in the column will be lost.
  - Added the required column `pageUri` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `page` DROP COLUMN `owner`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `pageUri` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_pageUri_fkey` FOREIGN KEY (`pageUri`) REFERENCES `Page`(`uri`) ON DELETE RESTRICT ON UPDATE CASCADE;
