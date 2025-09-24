import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex">
      <div className="w-[20%]">

      <Link href="#about">
        <button className="bg-white text-blue-500 px-3 py-1 rounded">
          Ke About
        </button>
      </Link>
      </div>
      <div className="w-full">{children}</div>
      <div className="w-[20%]">side bar kanan</div>
    </div>
  );
}
