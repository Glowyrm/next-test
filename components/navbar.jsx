import Link from 'next/link';
import { useRouter } from 'next/router' 
import { useState, useEffect } from 'react'


// Data object containing the url and and text to display for each link
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
    // NextJS router hook which gives us access to current page so we can set active link styling
    const router = useRouter()

    // this function is called every time a link is selected 
    let selectLink = (e) => {
        e.preventDefault();
        router.push(e.target.href);        
    }

    return (
        <ul className={'nav nav-pills justify-content-end p-3'}>
            {
                // generates a link for each link object in the linksData array
                linksData.map((linkObj, i) => {
                    return (
                        <li key={i} className={'nav-item'} onClick={selectLink}>
                            {/* We compare the useRouter hook pathname property to determine active link styling */}
                            <a href={linkObj.link} className={router.pathname === linkObj.link? 'nav-link active' : 'nav-link'}>
                                {linkObj.text}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
      )
}

export default Navbar