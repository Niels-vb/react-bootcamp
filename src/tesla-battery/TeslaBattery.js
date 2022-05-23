import { useEffect, useState } from "react";
import teslaService from "./tesla-battery.service";
import { initialData } from "../mocks/data";
import { TeslaTemperatureComponent } from "../components/TeslaTemperatureComponent";

export const TeslaBattery = () => {
  const [state, updateState] = useState(initialData);

  const { title, wheels, speed, models, metrics, climate, temperature } = state;

  useEffect(() => {
    // TODO: When the app starts, get the metrics from the services and set the state to the metrics
    updateState({
      ...state,
      metrics: teslaService.getModelData(),
    });
  }, [updateState]);

  const onBlurSpeed = () => {
    // TODO: On Speed blur, set the focus to false
  };

  const onFocusSpeed = () => {
    // TODO: On Speed focus, set the focus to true
  };

  const incrementSpeed = () => {
    // TODO: If the speed's value is less than the max speed then increase the speed's value by the speed.step
  };

  const decrementSpeed = () => {
    // TODO: If the speed's value is higher than the min speed then decrease the speed's value by the speed.step
  };

  const onBlurTemperature = () => {
    // TODO: On Temperature blur, set the focus to false
    const newData = {
      ...state,
      temperature: { ...temperature, focused: false },
    };
    updateState(newData);
  };

  const onFocusTemperature = () => {
    // TODO: On Temperature focus, set the focus to true
    const newData = {
      ...state,
      temperature: { ...temperature, focused: true },
    };
    updateState(newData);
  };

  const incrementTemperature = () => {
    // TODO: If the temperature's value is less than the max temperature then increase the temperature's value by the temperature.step

    const newData = {
      ...state,
      temperature: {
        ...temperature,
        value: temperature.value + temperature.step,
      },
    };
    updateState(newData);
  };

  const decrementTemperature = () => {
    // TODO: If the temperature's value is higher than the min temperature then decrease the temperature's value by the temperature.step
    const newData = {
      ...state,
      temperature: {
        ...temperature,
        value: temperature.value - temperature.step,
      },
    };
    updateState(newData);
  };

  const changeClimate = () => {
    // TODO: Swith the value on(true) and off(false)
  };

  const onBlurClimate = () => {
    // TODO: On Climate blur, set the focus to false
  };

  const onFocusClimate = () => {
    // TODO: On Climate focus, set the focus to true
  };

  const onBlurWheels = () => {
    // TODO: On Wheels blur, set the focus to null
  };

  const changeWheelSize = (size) => {
    // TODO: On Wheels change size, assign the new value to the wheels' value
  };

  const onFocusWheels = (size) => {
    // TODO: On Wheels focus, assign the size to the focused property of the wheels' object
  };

  if (!metrics) {
    return <div>....Fetching Data from the backend</div>;
  }

  return (
    <div className="tesla-battery">
      {/* <h1>{title}</h1> */}

      {/* TeslaCarComponent */}
      {/* <div className="tesla-car">
        <div className="tesla-wheels">
          <div
            className={`tesla-wheel tesla-wheel--front tesla-wheel--${wheels.value}--${speed.value}`}
          />
          <div
            className={`tesla-wheel tesla-wheel--rear tesla-wheel--${wheels.value}--${speed.value}`}
          />
        </div>
      </div> */}
      {/* End TeslaCarComponent */}

      {/* TeslaStatsComponent */}
      {/* <div className="tesla-stats">
        <ul>
          {models
            .map((model) => {
              const miles =
                metrics[model][wheels.value][climate.value ? "on" : "off"]
                  .speed[speed.value][temperature.value];
              return {
                model,
                miles,
              }
            })
            .map((stat) => (
              <li key={stat.model}>
                <div
                  className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}
                />
                <p>
                  {stat.miles}
                  <span>MI</span>
                </p>
              </li>
            ))}
        </ul>
      </div> */}
      {/* End TeslaStatsComponent */}

      <div className="tesla-controls cf">
        {/* TeslaCounterComponent for speed */}
        <div className="tesla-counter">
          <p className="tesla-counter__title">Speed</p>
          <div className="tesla-counter__container cf">
            <div
              className="tesla-counter__item"
              tabIndex="0"
              data-testid="speed-container-control"
              onBlur={onBlurSpeed}
              onFocus={onFocusSpeed}
            >
              <p data-testid="speed-display" className="tesla-counter__number">
                {speed.value}
                <span>mph</span>
              </p>
              <div className="tesla-counter__controls" tabIndex="-1">
                <button
                  tabIndex="-1"
                  type="button"
                  data-testid="speed-increment-btn"
                  onClick={incrementSpeed}
                  disabled={speed.value === speed.max}
                />
                <button
                  tabIndex="-1"
                  type="button"
                  data-testid="speed-decrement-btn"
                  onClick={decrementSpeed}
                  disabled={speed.value === speed.min}
                />
              </div>
            </div>
          </div>
        </div>
        {/* End TeslaCounterComponent for speed */}
        <div className="tesla-climate cf">
          {/* TeslaCounterComponent for outside temperature */}
          <TeslaTemperatureComponent
            onBlurTemperature={onBlurTemperature}
            temperature={temperature}
            onFocusTemperature={onFocusTemperature}
            incrementTemperature={incrementTemperature}
            decrementTemperature={decrementTemperature}
          />

          {/* End TeslaCounterComponent for outside temperature */}

          {/* TeslaClimateComponent */}
          {/* <div>
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
          </div> */}
          {/* End TeslaClimateComponent */}
        </div>

        {/* TeslaWheelsComponent */}
        {/* <div className="tesla-wheels">
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
        </div> */}
        {/* End TeslaWheelsComponent */}
      </div>
      {/* TeslaCarPolicyComponent */}
      {/* <div className="tesla-battery__notice">
        <p>
          The actual amount of range that you experience will vary based on
          your particular use conditions. See how particular use conditions
          may affect your range in our simulation model.
        </p>
        <p>
          Vehicle range may vary depending on the vehicle configuration,
          battery age and condition, driving style and operating,
          environmental and climate conditions.
        </p>
      </div> */}
      {/* End TeslaCarPolicyComponent */}
    </div>
  );
};
