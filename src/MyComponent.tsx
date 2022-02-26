import { useMyComponentLogic } from './my-component-logic';
import { MyComponentForm } from '@ts-paths-sample/components';

export default function MyComponent() {
    const viewModel = useMyComponentLogic();

    return (
        <div className="my-component">
            <MyComponentForm 
                onSetA={viewModel.setA}
                onSetB={viewModel.setB}
                onCompute={viewModel.compute}
                a={viewModel.a}
                b={viewModel.b} />
            {viewModel.result != null
                ? <div className="my-component-result">
                    <label>Result: </label><span>{viewModel.result}</span>
                </div>  
                : undefined
            }
        </div>
    )
}
