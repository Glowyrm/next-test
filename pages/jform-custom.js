import Navbar from '../components/navbar';
import Head from 'next/head';
import MainCustom from '../components/JsonForm/components/MainCustom'

const JFormCustom = () => {
    return (
        <div>
            <Head>
                <title>JForms Custom</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div style={{padding: 2 + 'rem', maxWidth: 850 + 'px', margin: 'auto'}}>
                <p>Implentation of the <a href={'https://jsonforms.io/docs/tutorial'}>Json Forms library</a> using a CUSTOM AJV form validation function</p>
            </div>

            <div style={{padding: 2 + 'rem', maxWidth: 800 + 'px', margin: 'auto'}}>
                <MainCustom
                    formStyle={'material'}
                />
            </div>
        </div>
    )
    
}

export default JFormCustom;