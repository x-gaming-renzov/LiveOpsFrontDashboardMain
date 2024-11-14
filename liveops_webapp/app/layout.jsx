import '@/styles/globals.css'
import Nav from '@/components/Nav'
import Provider from '@/components/Provider'
import LeftPanel from '@/components/LeftPanel'
import { SessionProvider } from '@/utils/SessionContext'

export const metadata = {
    title : "X Gaming CRO",
    description : "Boost user retention and monetisation of your game with AI CRO"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
          <Provider>
            <div className='main bg-zinc-950'>
            </div>
            <Nav />
            <div className='flex flex-row content-start w-full h-full relative'>   
                <LeftPanel/>
                <div className='w-full h-full'>
                  {children}
                </div>
            </div>
          </Provider>
      </body>
    </html>
  )
}

export default RootLayout