import {mount} from "auth/AuthApp";
import React, {useRef, useEffect} from "react";
import { useHistory } from "react-router-dom"


export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({pathname: nextPathName}) => {
                const {pathname} = history.location;

                if(pathname !== nextPathName){
                    history.push(nextPathName);
                }
            },
            onSignIn: () => {
                console.log("User signed in..")
            }
        });
    }, []);

    return <div ref={ref}></div>
}