import Link from 'next/link';

const Navbar = () => {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>

            {/* <li>
                <Link href="/jschema">
                    <a>JSON Schema Editor</a>
                </Link>
            </li> */}

            <li>
                <Link href="/jform-standard">
                    <a>JForms - Standard</a>
                </Link>
            </li>

            <li>
                <Link href="/jform-custom">
                    <a>JForms - Custom</a>
                </Link>
            </li>
        </ul>
      )
}

export default Navbar