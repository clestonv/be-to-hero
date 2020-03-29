import React from 'react';

export default function Header( {children} ) { // Posso usar o EXPORT DEFAUL
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

// export default Header; OU AQUI NO FINAL