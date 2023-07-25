import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '@/components'
import { RecoilRoot } from "recoil";
import { MantineProvider, MantineThemeOverride } from '@mantine/core'
import { IconHome, IconMarkdown, IconCalendarEvent } from '@tabler/icons-react';
import Image from 'next/image';

const customTheme: MantineThemeOverride = {
  colorScheme: "dark",
  primaryColor: "teal",
}

const routes = [
  { label: "Home", path: "/", Icon: IconHome },
  { label: "Events", path: "/events", Icon: IconCalendarEvent },
  { label: "About Us", path: "/about", Icon: IconMarkdown },
]

export default function App({ Component, pageProps }: AppProps) {


  return (
    <MantineProvider theme={customTheme} withGlobalStyles withNormalizeCSS>
      <RecoilRoot>
        <div className='flex'>
          <Header routes={routes} />
          <main
            className="h-screen w-full relative"
          >
            <div className="absolute w-full h-full inset-0 bg-black opacity-10">
              <Image
                className='-z-10'
                alt="Index"
                src="/background.png"
                fill={true}
              />
            </div>
            <div className="absolute w-full h-full overflow-y-auto">
              <Component {...pageProps} />
            </div>
          </main>
        </div>
      </RecoilRoot>
    </MantineProvider>
  )
}
