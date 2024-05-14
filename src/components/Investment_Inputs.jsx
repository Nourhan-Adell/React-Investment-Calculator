export default function Investment_Input({onChangeInput, userInputState}){

    return(
        <section id="user-input">
            <div  className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={userInputState.initialInvestment} onChange={(event)=>onChangeInput('initialInvestment', event.target.value)}/>
                </p>

                <p>
                    <label>Annaul Investment</label>
                    <input type="number" required  value={userInputState.annualInvestment} onChange={(event)=>onChangeInput('annualInvestment', event.target.value)}/>
                </p>
            </div>

            <div  className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={userInputState.expectedReturn} onChange={(event)=>onChangeInput('expectedReturn', event.target.value)}/>
                </p>

                <p>
                    <label>Duration</label>
                    <input type="number" required value={userInputState.duration} onChange={(event)=>onChangeInput('duration', event.target.value)}/>
                </p>
            </div>
        </section>
    )
}