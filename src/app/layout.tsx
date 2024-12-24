import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-Yekan bg-gray-800 "
      >
        {children}
      </body>
    </html>
  );
}
