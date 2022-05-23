export function TeslaClimateComponent(props) {
    const { changeClimate, temperature, onBlurClimate, onFocusClimate, climate } = props
    return (
        <div>
            <label
                className={`tesla-climate__item ${!(temperature.value > 10) ? "tesla-heat " : " "
                    }${climate.value ? "tesla-climate__item--active " : " "}${climate.focused === climate.value
                        ? "tesla-climate__item--focused"
                        : ""
                    }`}
            >
                <p className="heat">
                    {temperature.value > 10 ? "ac" : "heat"}{" "}
                    {climate.value ? "on" : "off"}
                </p>
                <i className="tesla-climate__icon" />
                <input
                    type="checkbox"
                    name="climate"
                    defaultChecked={climate.value}
                    onClick={changeClimate}
                    onBlur={onBlurClimate}
                    onFocus={onFocusClimate}
                />
            </label>
        </div>
    )
}