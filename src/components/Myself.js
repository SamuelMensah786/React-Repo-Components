import React from  "react";

export const Myself = (props) => {
    return (
        <div>
            <p>
                My Name Is {props.name}. I am {props.age}. years old. I am a {props.gender}.
                </p>
        </div>
    );
};