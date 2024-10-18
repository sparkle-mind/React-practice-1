import React from "react";

const Propagation = () => {

    function parent(e) {
        console.log("Parent called");
        // e.stopPropagation();
    }

    function child(e) {
        console.log("Child called");
        e.stopPropagation(); // now it only trigger currunt element not with its parent element
    }


    return (
        <>
            <h2 style={{ marginLeft: "0" }}> Event Propagation Phases</h2>
            <p> defult behaviour is <b>Bubbling </b>  (child ----to --- parent)</p>

            <div onClick={parent} className="parent" style={{ width: "300px", height: "300px", background: "green", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div onClick={child} className="child" style={{ width: "100px", height: "100px", background: "red", cursor: "pointer" }}>
                </div>
            </div>

        </>
    )
}

export default Propagation;


// NOTE: --
// Summary :-
// Bubbling (Defult behaviour): The process where an event starts at the target element and bubbles up to its parent in the DOM. (first it trigger itself after that triger his parent and so on...)
// Order: If you click the child, you will see the child's event handler execute before the parent's, which is the essence of bubbling.
// If you want to stop this bubbling behavior, you can use e.stopPropagation() in the child's event handler, which will prevent the event from reaching the parent. 