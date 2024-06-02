import { useReducer } from "react";
import { reducer } from "../app-store/reducer";
let initailState  = {count:0}; 

const ReducerDemo=()=>
    {
        const [ state ,dispatch] = useReducer(reducer,initailState);
        function handleJoinClick()
        {
            dispatch({type:'join'});
        }
        function handleExitClick()
        {
            dispatch({type:'Exit'});
        }
        return(
            <div className="container-fluid">
                <h2>Video Streaming</h2>
                <div className="bg-primary text-white p-3 w-25">
                    ...buffering video
                </div>
                <div className="mt-4 mb-4">
                    Live Count : {state.count} Viewing   
                </div>
                <div className="mt-3">
                    <button onClick={handleJoinClick}>Join</button>
                    <button onClick={handleExitClick}> Exit</button>
                </div>
            </div>
        )
    }
    export default ReducerDemo