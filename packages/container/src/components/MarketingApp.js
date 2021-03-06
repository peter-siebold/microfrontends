import {mount} from "marketing/MarketingApp";
import React, {useRef, useEffect} from "react";
import { useHistory } from "react-router-dom"


export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        //
        mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({pathname: nextPathName}) => {
                const {pathname} = history.location;

                if(pathname !== nextPathName){

                    history.push(nextPathName);
                }
            }
        });
    }, []);

    return <div ref={ref}></div>
}