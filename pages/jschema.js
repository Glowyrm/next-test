import {useEffect} from 'react';
import Navbar from '../components/navbar';
import dynamic from 'next/dynamic'

const JSONEditor = dynamic(() => {
    import('@json-editor/json-editor')
        .then( (mod) => {console.log('JSONEDitor Library is loaded')} ),
        { ssr: false }
});

const mySchema = {
      type: "object",
      title: "Car",
      properties: {
        make: {
            type: "string",
            enum: [
                "Toyota",
                "BMW",
                "Honda",
                "Ford",
                "Chevy",
                "VW"
            ]
        },
        model: {
          type: "string"
        },
        year: {
            type: "integer",
            enum: [
                1995,1996,1997,1998,1999,
                2000,2001,2002,2003,2004,
                2005,2006,2007,2008,2009,
                2010,2011,2012,2013,2014
            ],
            default: 2008
        },
        safety: {
            type: "integer",
            format: "rating",
            maximum: "5",
            exclusiveMaximum: false,
            readonly: false
        }
    }
};

const Jschema = () => {
    useEffect(() => {
        console.log("Element mounted");
        // console.log(JSONEditor);
        const element = document.getElementById('editor_holder');
        let editor;

        // if (typeof window !== 'undefined') {
        //     editor = new JSONEditor(element, {
        //         schema: mySchema
        //     });
        // }
        
        return () => {
            console.log("Element un-mounted");
            // if (typeof window !== 'undefined') {
            //     editor.destroy();
            // }            
        }
    }, [])

    return (
        <div>
            <Navbar/>
            <div>
                <p>Use the editor to modfiy your JSON</p>
            </div>
            
            <div id={"editor_holder"}></div>
            <button>Submit</button>
        </div>
    )
}

export default Jschema