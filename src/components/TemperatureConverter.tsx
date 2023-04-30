import {FC,useState, useMemo, useCallback, useEffect} from 'react';
import { TextContent, Text, TextVariants , TextInput, FormGroup, Form} from '@patternfly/react-core';

export const TemperatureConverter:FC = () => {
  const [celsius, setCelsius] = useState<number>(0);
  const [fahrenheit, setFahrenheit] = useState<number>(32);

  const convertCelsiusToFahrenheit = useCallback((celsiusValue: number) => {
    return (celsiusValue * 9/5) + 32;
  }, []);

  const convertFahrenheitToCelsius = useCallback((fahrenheitValue: number) => {
    return (fahrenheitValue - 32) * 5/9;
  }, []);

  const memoizedFahrenheit = useMemo(() => {
    return convertCelsiusToFahrenheit(celsius);
  }, [celsius, convertCelsiusToFahrenheit]);

  const memoizedCelsius = useMemo(() => {
    return convertFahrenheitToCelsius(fahrenheit);
  }, [fahrenheit, convertFahrenheitToCelsius]);

  useEffect(() => {
    setFahrenheit(memoizedFahrenheit);
  }, [memoizedFahrenheit]);

  useEffect(() => {
    setCelsius(memoizedCelsius);
  }, [memoizedCelsius]);

  const handleCelsiusChange =useCallback(
    (value:string) => {
     setCelsius(parseFloat(value));
  },[]);

  const handleFahrenheitChange = useCallback (
    (value:string) => {
      setFahrenheit(parseFloat(value));
    },
    []
 );

  return (
    <div>
      <br/>
      <TextContent className="pf-u-pt-lg">
        <Text component={TextVariants.h1}>Temperature Conversion from Celsius to Fahrenheit and vice versa</Text>
      </TextContent>
      <br/>
      <Form>
        <FormGroup label= "Celsius:">
        <TextInput type="number" value={celsius} onChange={handleCelsiusChange} aria-label="temperature input example"  />
      </FormGroup>
      <FormGroup label= "Fahrenheit:">
        <TextInput type="number" value={fahrenheit} onChange={handleFahrenheitChange} aria-label="temperature input example" />
      </FormGroup>
      </Form>
    </div>
  )
}

