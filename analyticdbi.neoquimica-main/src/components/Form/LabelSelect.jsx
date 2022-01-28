import { Label, SelectLabel } from './styled'

const Component = ({ name, label, flexGrow, readOnly, variant, formik, children }) => {
    return (
        <>
            <SelectLabel className={flexGrow ? flexGrow : null}>
                <Label>
                    <label htmlFor={name}>{label}</label>
                    <div>
                        {formik.touched[name] && formik.errors[name] ?
                            formik.errors[name] :
                            null}
                    </div>
                </Label>
                <select
                    id={name}
                    name={name}
                    readOnly={readOnly}
                    className={variant}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                >
                    {children}
                </select>
            </SelectLabel>
        </>
    )
}

export default Component