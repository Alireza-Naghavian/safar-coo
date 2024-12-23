import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className="font-Yekan"
      >
        {children}
      </body>
    </html>
  );
}
