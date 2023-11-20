import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Fragment} from "react";
import Header from "@/components/layouts/Header/header";

export default function App({ Component, pageProps }: AppProps) {
  return(
      <Fragment>
        <Header />
           <div className="container justify-center">
               <Component {...pageProps} />
           </div>
      </Fragment>
  )
}
