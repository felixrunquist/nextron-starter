import '../styles/globals.scss'

import { APP_NAME } from "../../lib/constants"
import TitleBar from "../components/title-bar"
import Background from "../components/background"

export default function MyApp({ Component, pageProps }) {
    return <>
        <title>{APP_NAME}</title>
        <TitleBar>{APP_NAME}</TitleBar>
        <Background/>
        <Component {...pageProps} />
    </>
}