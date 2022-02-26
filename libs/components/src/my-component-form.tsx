export interface MyComponentFormProps {
    onSetA: (value: number) => void;
    onSetB: (value: number) => void;
    onCompute: () => void;
    a: number;
    b: number;
}

export default function MyComponentForm({
    onSetA, 
    onSetB,
    onCompute,
    a,
    b,
}: MyComponentFormProps) {
    return (
        <div className="my-component-form">
            <div className="a-form-group">
                <label>A: </label><input type="number" value={a} onChange={ev => onSetA(+ev.target.value)}></input>
            </div>
            <div className="b-form-group">
                <label>B: </label><input type="number" value={b} onChange={ev => onSetB(+ev.target.value)}></input>
            </div>
            <div className="on-compute-group">
                <button onClick={onCompute}>Compute</button>
            </div>
        </div>
    )
}