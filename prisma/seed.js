const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("password123", 10);

  // User default admin
  const admin = await prisma.user.create({
    data: {
      username: "admin",
      email: "mtssalaqsha@gmail.com",
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
      email: "mtssalaqsha@gmail.com",
      address:
        "Jl. Sutra Ungu No.31, RT.13/RW.10, Klp. Gading Tim., Kec. Klp. Gading, Jkt Utara",
      phone: "0214505722",
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

  await prisma.schoolProfile.create({
    data: {
      namaSekolah: "MTSS AL-AQSHA",
      jenisSekolah: "SWASTA",
      nss: "",
      npsn: "",
      tanggalBerdiri: new Date("2000-01-01"), 
      akreditasi: "c",
      programJurusan: null,
      izinOperasional: null,
      luasTanah: null,
      kurikulum: "KURIKULUM ",
      jamAktif: 7,
      jumlahGuruStaff: null,
      jumlahSiswa: null,
      jumlahRombel: 12,
      jumlahPrestasi: 0,
      sloganSekolah: null,
      kepsek: "Kepsek Al-Aqsha",
      nipKepsek: "null",
      masaKerja: null,
      izinMemimpin: null,
      statusKepegawaian: "null",
      pendidikanTerakhir: "S1",
      deskripsiSekolah:
        "Sekolah MTSS Al-Aqsha",
    },
  });
  // Guru contoh
  await prisma.teacher.createMany({
    data: [
      {
        name: "null",
        nip: "0000000001",
        jabatan: "Kepala Sekolah",
        imageUrl: "",
        pesan: "",
      },
      {
        name: "",
        nip: "0000000002",
        jabatan: "Wakil Kepala Sekolah",
        imageUrl: "",
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
