import React from "react";
import SoundSpeak from "../../assets/img/audio-loudspeaker-public.svg";
import Artyom from "artyom.js";
import '../../assets/css/css_universal/Speaker.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Speaker({children, value}){
    const notify = () => toast.info('Reproduzindo áudio', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    
    function initializerSpeaker(){
        const artyom = new Artyom();
        console.log(value);
        setTimeout(()=>{
            artyom.initialize({
                lang: value,
                continuous: false,
                soundex: true,
                debug: true,
            }).then((result) => {
                console.log("Artyom has been succesfully initialized");
            }).catch((err) => {
                console.error("Artyom couldn't be initialized: ", err);
            });
            setTimeout(()=>{
                const selection = window.getSelection().toString().trim();
                speak(artyom, selection);
            }, 250);
        }, 250);
    }
    
    function speak(speaker, value){
        notify()
        console.log(speaker);
        console.log(value);
        speaker.say(value);
    }
    return(
        <>
            <ToastContainer />
            <div id="text">
                {children}
            </div>
            <div className="div-audio">
                <button className="button-audio" alt="Clique para escutar" onClick={initializerSpeaker}>
                    <img src={SoundSpeak} style={{width:'30px'}} ></img>
                </button>
            </div>
        </>
    );
}