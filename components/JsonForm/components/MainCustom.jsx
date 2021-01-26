import { useEffect } from 'react';
import { JsonForms } from '@jsonforms/react';
import { vanillaRenderers, vanillaCells } from '@jsonforms/vanilla-renderers';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import Ajv from "ajv-latest";

import { person } from '@jsonforms/examples';
import personObject from "../../../public/person.json"
import personValidator from "../../../public/person"

const myAjv = new Ajv();

// REF: https://stackoverflow.com/questions/56134857/how-to-install-npm-package-under-alias-or-different-name 
myAjv.compile = (schema) => {
    return personValidator;
}

export const MainCustom = (props) => {
    useEffect(() => {
        console.log("Element Custom mounted");        
        return () => {
            console.log("Element Custom un-mounted");
        }     
        
    }, [])

    // returns the JSON forms renderer base on the value of this components formStyle property
    const RenderEnum = (key) => {
        let renderer;
        switch (key) {
            case 'material':
                renderer = materialRenderers;
                break;
        
            default:
                renderer = vanillaRenderers;
                break;
        }

        return renderer;
    }

    // returns the JSON forms renderer base on the value of this components formStyle property
    const CellsEnum = (key) => {
        let cells;
        switch (key) {
            case 'material':
                cells = materialCells;
                break;
        
            default:
                cells = vanillaCells;
                break;
        }

        return cells;
    }

    return (
        <JsonForms
            schema = {personObject}
            uischema = {props.uischema}
            data = {props.data}
            ajv = {myAjv}
            cells = {CellsEnum(props.formStyle)}
            renderers = {RenderEnum(props.formStyle)}
        />
    )
}

MainCustom.defaultProps = {
    schema: person.schema,
    uischema: person.uischema,
    data: person.data,
    formStyle: 'vanilla'
}

export default MainCustom;
