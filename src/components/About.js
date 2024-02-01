import React from "react";

function CreateAbout ({image, about}) {
    return (
        <div>
            <aside>
                <img src={image ? image : "https://via.placeholder.com/215"} alt="blog logo" />
                <p>{about}</p>
            </aside>
        </div>
    )
}

export default CreateAbout;