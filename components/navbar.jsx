import Link from 'next/link';
import { useRouter } from 'next/router' 
import { useState, useEffect } from 'react'


// Data object contiang the url and and text to display for each link
// ... links will generated for each link object in this array
const linksData = [
    {
        link: "/",
        text:"Home" 
    },
    {
        link: "/jform-standard",
        text:"JForms - Standard" 
    },
    {
        link: "/jform-custom",
        text:"JForms - custom" 
    }
]

const Navbar = () => {

    // used to keep track of which link object is the
    const [indexOfActiveLink, setindexOfActiveLink] = useState(0);

    // this function is called every time a link is selected 
    let selectLink = (e) => {
        e.preventDefault();
        // console.log(e.target)
        // console.log(e.target.dataset.linkindex)
        setindexOfActiveLink(Number(e.target.dataset.linkindex));
        
    }

    return (
        <ul className={'nav nav-pills justify-content-end p-3'}>
            {
                // generates a link for each link object in the linksData array
                linksData.map((linkObj, i) => {
                    return (
                        <li key={i} className={'nav-item'} onClick={selectLink}>
                            <Link href={linkObj.link}>
                                <a data-linkindex={i} className={i === indexOfActiveLink ? 'nav-link active' : 'nav-link'}>{linkObj.text}</a>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
      )
}

export default Navbar