const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("password123", 10);

  // User default admin
  const admin = await prisma.user.create({
    data: {
      username: "admin",
      email: "repomtssalaqsha@gmail.com",
      password: hashedPassword,
    },
  });

  // Visi & Misi default
  await prisma.visiMisi.create({
    data: {
      visi: "Menjadi sekolah unggul dalam prestasi dan akhlak mulia.",
      misi: "Mendidik siswa dengan penuh kasih sayang dan disiplin.",
    },
  });

  // Contact default
  await prisma.contact.create({
    data: {
      email: "info@sekolah.sch.id",
      address: "Jl. Pendidikan No. 123, Jakarta",
      phone: "081234567890",
    },
  });

  // Sosmed default
  await prisma.sosmed.createMany({
    data: [
      { sosmedName: "Instagram" },
      { sosmedName: "Youtube" },
      { sosmedName: "Facebook" },
    ],
  });

  // Guru contoh
  await prisma.teacher.createMany({
    data: [
      {
        name: "Bapak Ahmad",
        jabatan: "Kepala Sekolah",
        imageUrl: "/images/ahmad.jpg",
        pesan: "",
      },
      {
        name: "Ibu Siti",
        jabatan: "Wakil Kepala Sekolah",
        imageUrl: "/images/siti.jpg",
        pesan: "",
      },
    ],
  });

  console.log("✅ Seed berhasil! Admin:", admin.username);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
