import Header from './components/Header';
import ClientOnlyLayout from './components/ClientOnlyLayout';
import '../styles/globals.css';
import 'animate.css';
import { LanguageProvider } from './components/LanguageContext';

export const metadata = {
  title: 'MACHR',
  description: 'Human Resources platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          <ClientOnlyLayout>
            <main>{children}</main>
          </ClientOnlyLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
