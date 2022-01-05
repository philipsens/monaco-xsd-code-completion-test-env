import * as monaco from 'monaco-editor';
// or import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
// if shipping only a subset of the features & languages is desired
import uxml from '../../monaco-xsd-code-completion/uxml.xsd'
import XsdManager from '../../monaco-xsd-code-completion/esm/XsdManager'
import XsdFeatures from '../../monaco-xsd-code-completion/esm/XsdFeatures'
import '../../monaco-xsd-code-completion/src/style.css'

const editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'xml',
    theme: 'vs-dark',
})

const xsdManager = new XsdManager(editor) // Initialise the xsdManager

xsdManager.set({
    path: 'uxml.xsd',
    value: uxml,
    alwaysInclude: true, // Include the XSD even if there's no reference. This could be useful if the XSD is server-side only.
})

const xsdFeatures = new XsdFeatures(xsdManager, monaco, editor) // Initialise the xsdFeatures.

xsdFeatures.addCompletion() // Add auto completion.
xsdFeatures.addValidation() // Add auto validation on debounce. Can be manually triggered with doValidation.
xsdFeatures.addGenerateAction() // Add geneate template to actions menu. Generate can be run with doGenerate.
xsdFeatures.addReformatAction() // Add reformat code to actions menu. Can be run manually with doReformatCode.