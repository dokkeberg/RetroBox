/*
  Warnings:

  - Added the required column `type` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('GREEN', 'YELLOW', 'RED');

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "type" "CardType" NOT NULL;
