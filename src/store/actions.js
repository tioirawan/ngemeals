import {ACTION_TYPE} from "./constants"

export function setCategory(category) {
    return {
        type: ACTION_TYPE.SET_CATEGORY,
        category
    }
}