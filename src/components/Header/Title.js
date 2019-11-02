import React from "react";

const styles = {
    head: {
        background: "great",
        width: "100%",
        height: "20%"
    },
    headtext: {
        justifyContent: "center",
        alignItems: "center"
    }
};

function Title() {
    return (
        <div style={styles.head}>
            <h1 style={styles.headtext}>This is the clicky game</h1>
        </div>
    );
}

export default Title;
