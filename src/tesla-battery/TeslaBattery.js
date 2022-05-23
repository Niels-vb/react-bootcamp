import { useEffect, useState } from "react"
import teslaService from "./tesla-battery.service"
import { initialData } from "../mocks/data"
import { TeslaClimateComponent } from "../components/TeslaClimateComponent"
import { TeslaWheelsComponent } from "../components/TeslaWheelsComponent"
import { TeslaCarComponent } from "../components/TeslaCarComponent"
import { TeslaSpeedComponent } from "../components/TeslaSpeedComponent"
import { TeslaTemperatureComponent } from "../components/TeslaTemperatureComponent";
import { TeslaStatsComponent } from "../components/TeslaStatsComponent";

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
    updateState({ ...state, speed: { ...state.speed, focused: false } })
  };

  const onFocusSpeed = () => {
    // TODO: On Speed focus, set the focus to true
    updateState({ ...state, speed: { ...state.speed, focused: true } })
  }

  const incrementSpeed = () => {
    // TODO: If the speed's value is less than the max speed then increase the speed's value by the speed.step
    updateState({ ...state, speed: { ...state.speed, value: state.speed.value + state.speed.step } })
  }

  const decrementSpeed = () => {
    // TODO: If the speed's value is higher than the min speed then decrease the speed's value by the speed.step
    updateState({ ...state, speed: { ...state.speed, value: state.speed.value - state.speed.step } })
  }

  const onBlurTemperature = () => {
    // TODO: On Temperature blur, set the focus to false
    const newData = {
      ...state,
      temperature: { ...temperature, focused: false },
    };
    updateState(newData);
  };

  const changeClimate = () => {
    // TODO: Switch the value on(true) and off(false)
    updateState({ ...state, climate: { ...climate, value: !climate.value } })
  }

  const onBlurClimate = () => {
    // TODO: On Climate blur, set the focus to false
    updateState({ ...state, climate: { ...climate, focused: false } })
  }

  const onFocusClimate = () => {
    // TODO: On Climate focus, set the focus to true
    updateState({ ...state, climate: { ...climate, focused: true } })
  }
 
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
    <TeslaCarComponent speed={speed} wheels={wheels}/>
      {/* End TeslaCarComponent */}

      {/* TeslaStatsComponent */}

      <TeslaStatsComponent
        models={models}
        wheels={wheels}
        speed={speed}
        metrics={metrics}
        climate={climate}
        temperature={temperature}
      />

      {/* End TeslaStatsComponent */}

      <div className="tesla-controls cf">
        {/* TeslaCounterComponent for speed */}

        {/* Niels was here */}

        <TeslaSpeedComponent onBlurSpeed={onBlurSpeed} onFocusSpeed={onFocusSpeed} speed={speed} incrementSpeed={incrementSpeed} decrementSpeed={decrementSpeed} />

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
          <TeslaClimateComponent temperature={temperature} climate={climate} changeClimate={changeClimate} onBlurClimate={onBlurClimate} onFocusClimate={onFocusClimate} />
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
