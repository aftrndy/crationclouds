import '../src/styles/globals.css';
import MainLayout from '../src/layout/MainLayout';

export const metadata = {
  title: 'Nowa - Bootstrap 5 Premium Admin & Dashboard Template',
  description: 'Bootstrap Responsive Admin Web Dashboard HTML5 Template',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
