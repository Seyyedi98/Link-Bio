-- CreateTable
CREATE TABLE `Page` (
    `uri` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Page_uri_key`(`uri`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
