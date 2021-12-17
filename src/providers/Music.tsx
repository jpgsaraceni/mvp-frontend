import React, { useCallback } from "react";
import { createContext } from "react";

type Props = {
    children: React.ReactNode
}

export interface iMusicContextData {
    toggleAudio: Function
    setBackground: Function
    playBackground: Function
    stopBackground: Function
    playCard: Function
    playError: Function
    playSuccess: Function
    playPhaseEnd: Function
    isMuted: Function
}

export const audios = {
    background: {
        menu: 'https://cdn.artlist.io/artlist-song-aac/262574_09_-_Homemade_Apple_Pie_(16-44.1).aac',
        phases: {
            world: 'https://cdn.artlist.io/artlist-song-aac/382845__382517_Alon_Peretz_-_Colors_Of_Playful_-_Spring_In_My_Step_-_Master_V2_-_INT_-_X_-_2444.aac'
        },
    },
    events: {
        error: 'https://cdn.artlist.io/artlist-sfx-aac/465113_Beeps_and_Bells_34_normal.aac',
        success: 'https://cdn.artlist.io/artlist-sfx-aac/422590_Magic_and_Spell_Sounds_-_chimes_magic_bell_ding_1_normal.aac',
        phaseEnd: 'https://cdn.artlist.io/artlist-sfx-aac/509521_UI_NewRecord_Tada_normal.aac'
    }
}

export const MusicContext = createContext({} as iMusicContextData);
export const MusicProvider = ({ children }: Props) => {
    const backgroundMusic = audios.background.menu;
    let backgroundPlayer = new Audio(backgroundMusic);

    backgroundPlayer.loop = true;
    backgroundPlayer.muted = true;
    backgroundPlayer.volume = 0.25;

    const playBackground = useCallback(() => {
        backgroundPlayer.muted = false;
        backgroundPlayer.play()
    }, [backgroundPlayer]);

    const setBackground = useCallback((music) => {
        const currentStatus = backgroundPlayer.muted
        backgroundPlayer.pause();
        backgroundPlayer = new Audio(music);
        backgroundPlayer.volume = 0.25;
        backgroundPlayer.loop = true;
        backgroundPlayer.muted = currentStatus;

        if (!backgroundPlayer.muted) {
            backgroundPlayer.play();
        }
    }, []);

    const stopBackground = useCallback(() => {
        backgroundPlayer.muted = true;
        backgroundPlayer.pause()

    }, [backgroundPlayer]);
    
    const toggleAudio = useCallback(() => {
        const soundStatus: boolean = backgroundPlayer.muted;
        backgroundPlayer.muted = !soundStatus;

        if (backgroundPlayer.muted) {
            stopBackground();
        } else {
            playBackground();
        }
    }, [backgroundPlayer, playBackground, stopBackground]);

    const isMuted = useCallback(() => {
        return backgroundPlayer.muted;
    }, [backgroundPlayer])


    const playCard = useCallback((card) => {
        const cardPlayer = new Audio(card);
        cardPlayer.loop = false;
        cardPlayer.muted = false;
        cardPlayer.volume = 1;
        cardPlayer.play();
    }, [])

    const playError = useCallback(() => {
        const errorPlayer = new Audio(audios.events.error);
        errorPlayer.loop = false;
        errorPlayer.muted = false;
        errorPlayer.play();
    }, []);

    const playSuccess = useCallback(() => {
        const successPlayer = new Audio(audios.events.success);
        successPlayer.loop = false;
        successPlayer.muted = false;
        successPlayer.play();
    }, [])

    const playPhaseEnd = useCallback(() => {
        backgroundPlayer.pause();
        const endPlayer = new Audio(audios.events.phaseEnd);
        endPlayer.loop = false;
        endPlayer.muted = false;
        endPlayer.volume = 0.5;
        endPlayer.play();
    }, [backgroundPlayer]);


    return (
        < MusicContext.Provider value={
            {
                toggleAudio,
                setBackground,
                playBackground,
                stopBackground,
                playCard,
                playError,
                playSuccess,
                playPhaseEnd,
                isMuted
            }
        }>
            {children}
        </ MusicContext.Provider>
    );
}