-- DropIndex
DROP INDEX `Page_owner_fkey` ON `page`;

-- AlterTable
ALTER TABLE `page` MODIFY `owner` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Page` ADD CONSTRAINT `Page_owner_fkey` FOREIGN KEY (`owner`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
