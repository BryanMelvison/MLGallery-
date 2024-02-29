import React from 'react';
import ModelTitle  from  "../../components/model_title";
import ModelForm from '@/components/model_form';
import { Form } from '@/projects';


const nli = () => {
    const api = "http://localhost:8000/submit-nli"
    const listform = Form['nli']

    const modelFormProps = {
        api: api,
        listform: listform,
    };

    return (
        <ModelTitle 
            Title = "Natural Language Inference"
            ModelForm={ModelForm}
            modelFormProps={modelFormProps}
            Description= "This model assesses the relationship between a given premise and a hypothesis, determining whether the hypothesis is entailed by, contradicts, or is neutral with respect to the premise. It's a tool for Natural Language Inference (NLI), crucial for understanding logical consistencies in text. Trained under the SNLI Corpus, using a BiLSTM Model"
        />
    )
}

export default nli
