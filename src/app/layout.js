export const metadata = {
  title: "Forget About Code",
  description: "Startup Framework Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
