import React from 'react'

import ListItems from "./ListItems";
import { faculties, specialties } from "../Api";
import { upFirstChar } from "./utils";

export default class Steps extends React.Component {

    state = {
        currentStepIndex: 0,
        selectedIds: {},
    }

    static defaultProps = {
        steps: [
            {
                itemsName: 'faculties',
                getOptions: () => faculties,
            },
            {
                itemsName: 'specialties',
                getOptions: (ids) => specialties[ids.faculties],
            }
        ],
    }

    onSelectItemId = id => () => {
        const { currentStepIndex } = this.state;
        const { steps } = this.props;
        const isLastStep = currentStepIndex === steps.length - 1;

        if (isLastStep) {
            this.endSelectStep();
        } else {
            this.nextStep(id);
        }
    }

    endSelectStep = () => {
        const {navigate} = this.props.navigation;
        navigate('Successes');
    }
    
    nextStep = id => {
        const { currentStepIndex, selectedIds } = this.state;
        const currentStep = this.getCurrentStep();
        
        this.setState({
            currentStepIndex: currentStepIndex + 1,
            selectedIds: {
                ...selectedIds,
                [currentStep.itemsName]: id,
            }
        })
    }

    getCurrentStep = () => {
        const { steps } = this.props;
        const { currentStepIndex } = this.state;
        return steps[currentStepIndex];
    }

    render() {
        const { selectedIds } = this.state;
        const { itemsName, getOptions } = this.getCurrentStep();

        const items = getOptions(selectedIds);

        return (
            <ListItems title={upFirstChar(itemsName)} items={items} onSelectItemId={this.onSelectItemId}/>
        )
    }
}