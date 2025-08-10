import React from "react";
import { db } from "../../db/state";
import { useValue } from "../../lib/db/react";
import { getConfig } from "../../plugins";
import Plugin from "../shared/Plugin";

const Background: React.FC = () => {
    const background = useValue(db, "background");

    const { dashboardComponent } = getConfig(background.key);
    const ref = React.useRef(null);
    const countRef = React.useRef(0);
    React.useEffect(() => {
        if (countRef.current > 0) {
            return;
        }
        countRef.current++;
        const init = (window as any).BillInit;
        console.log("oni: init2", init);
        init?.(ref.current, "assets/bill_cypher.glb")
    }, [])

    return (
        <div ref={ref} className="Background">
            {/* <Plugin id={background.id} component={dashboardComponent} /> */}
        </div>
    );
};

export default Background;
