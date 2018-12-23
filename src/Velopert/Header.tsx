import Link from 'next/link';
import * as React from 'react';

const linkStyle = {
    marginRight: '1rem'
}


const Header = () => {
    return(
        <div>
            <Link href = ''><a style={linkStyle}> Home </a></Link>

        </div>
    )
}


export default Header;