import React from 'react';

// Logo affiché en haut de l'application, image + texte
const Logo = () => {
    return (
    <div className="logo">
        <div className="overlay"></div>
        {/* Les images importées depuis la balise img sont accessibles dans "public" */}
        <img src="./logo192.png" alt="logo react" />
        <h3>Country App</h3>
    </div>
    );
};

export default Logo;