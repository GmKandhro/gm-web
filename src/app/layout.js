import './globals.css'
import { AppProvider } from '../../Context'
import { Footer , Navbar} from './components'
// import { FirebaseProvider } from 'Context/firebase'
export const metadata = {
  title: 'Gm kandhro || develoer || freelaner || web app developer || react ddeveloper',
  description: 'I am a react js developer and freelancer ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className='bg-[#111827]' suppressHydrationWarning={true}>
        <AppProvider >
          {/* <FirebaseProvider> */}
        <Navbar/>
        {children}
        <Footer/>
        {/* </FirebaseProvider> */}
        </AppProvider>
        </body>
    </html>
  )
}
