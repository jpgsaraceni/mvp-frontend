import { iMusicContextData, MusicContext } from "../providers/Music";
import { useContext } from "react";

export function useSound ()
{
    const context: iMusicContextData = useContext(MusicContext);

    return context;
}
