-- CreateTable
CREATE TABLE "Confession" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Confession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Confession_userId_idx" ON "Confession"("userId");
