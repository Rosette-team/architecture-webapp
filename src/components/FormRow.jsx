import {observer} from "mobx-react";

function FormRow(props) {
    return(
        <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">{props.label}</label>
            <div className="col-sm-10">
                {props.children}
            </div>
        </div>
    )
}

export default observer(FormRow);