export function TeslaWheelsComponent ({wheels, onBlurWheels, changeWheelSize, onFocusWheels} ) {
    return (
        <div className="tesla-wheels">
          <p className="tesla-wheels__title">Wheels</p>
          <div className="tesla-wheels__container cf">
            {wheels.sizes.map((size) => (
              <label
                key={size}
                className={`${wheels.value === size ? "tesla-wheels__item--active " : " "
                  }${wheels.focused === size
                    ? "tesla-wheels__item--focused "
                    : " "
                  }tesla-wheels__item tesla-wheels__item--${size}`}
              >
                <input
                  type="radio"
                  name="wheelsize"
                  value={size}
                  onBlur={() => onBlurWheels}
                  onClick={() => changeWheelSize(size)}
                  onFocus={() => onFocusWheels(size)}
                  defaultChecked={wheels.value === size}
                />
                <p>{size}"</p>
              </label>
            ))}
          </div>
        </div>
    )
}