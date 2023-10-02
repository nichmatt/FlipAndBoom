import { GAME_MODE_SET } from "../actionType";

export function setGameMode(payload) {
  return {
    type: GAME_MODE_SET,
    payload,
  };
}
