import { useEffect } from 'react';
import { JsonForms } from '@jsonforms/react';
import { vanillaRenderers, vanillaCells } from '@jsonforms/vanilla-renderers';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import { person } from '@jsonforms/examples';

const MainStandard = (props) => {
    useEffect(() => {
        console.log("Standard Element mounted");        
        return () => {
            console.log("Standard Element un-mounted");
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
            schema={props.schema}
            uischema={props.uischema}
            data={props.data}
            cells = {CellsEnum(props.formStyle)}
            renderers = {RenderEnum(props.formStyle)}
        />
    )
    
}

MainStandard.defaultProps = {
    schema: person.schema,
    uischema: person.uischema,
    data: person.data,
    formStyle: 'vanilla'
}

export default MainStandard;
