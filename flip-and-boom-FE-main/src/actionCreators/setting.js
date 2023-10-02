import { SETMUSICSETTING, SETSFXAUDIOSETTING } from "../actionType";

export function setMusicSetting(payload) {
    return {
        type: SETMUSICSETTING,
        payload
    }
}

export function setSFXAudio(payload){
    return {
        type: SETSFXAUDIOSETTING,
        payload
    }
}