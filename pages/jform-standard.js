import Navbar from '../components/navbar';
import Head from 'next/head';
import MainStandard from '../components/JsonForm/components/MainStandard'

const JFormStandard = () => {
    return (
        <div>
            <Head>
                <title>JForms Standard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div style={{padding: 2 + 'rem', maxWidth: 850 + 'px', margin: 'auto'}}>
                <p>Implentation of the <a href={'https://jsonforms.io/docs/tutorial'}>Json Forms library</a> using the DEFAULT AJV form validation</p>
            </div>

            <div style={{padding: 2 + 'rem', maxWidth: 800 + 'px', margin: 'auto'}}>
                <MainStandard
                    formStyle={'material'}
                />
            </div>
        </div>
    )
    
}

export default JFormStandard;