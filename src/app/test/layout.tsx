export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <h2>Test layout</h2>
      {children}
    </>
  )
}
