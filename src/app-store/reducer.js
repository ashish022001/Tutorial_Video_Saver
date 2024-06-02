export function reducer(state,action){
    switch(action.type)
    {
        case "join":
            return {count:state.count + 1}
        case "Exit":
            return {count:state.count - 1}
    }
}