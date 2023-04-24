import React, { FC } from 'react';
import {
  Alert,
  Form,
  FormGroup,
  FormHelperText,
  TextInput,
  Popover,
  Button,
  InputGroup,
   CalendarMonth,
   ActionList,
   ActionListItem,
   AlertGroup,
   AlertVariant,
   AlertActionCloseButton
} from '@patternfly/react-core';

import HelpIcon from "@patternfly/react-icons/dist/esm/icons/help-icon";
import ExclamationCircleIcon from "@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon";
import OutlinedCalendarAltIcon from "@patternfly/react-icons/dist/esm/icons/outlined-calendar-alt-icon";
type validate = "success" | "warning" | "error" | "default";

export const FormPage:FC= () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [validated, setValidated] = React.useState<validate>("error");
  const [date, setDate] = React.useState('yyyy-mm-dd');
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const [alerts, setAlerts] = React.useState<React.ReactNode[]>([]);
  const [buttonClicked, setButtonClicked] = React.useState(false);

  const handleNameChange = (name:string) => {
    setName(name);
    if (name === " ") {
      setValidated("default");
    } else if (!isNaN(+name)) {
      setValidated("success");
    } else {
      setValidated("error");
    }
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  const handlePhoneChange = (phone: string) => {
    setPhone(phone);
  };

  const onClickCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

   const dateFormat = (date: Date) => 
    date.toLocaleDateString("en-US",{
       year: "numeric",
       month: "numeric", 
        day: "numeric"
    });

  const onSelectDate = (newdate:Date) => {
    const newDate = dateFormat(newdate);
    setDate(newDate);
    setIsCalendarOpen(!isCalendarOpen);
  };

  const calendar = (
    <CalendarMonth date={new Date(date)} onChange={onSelectDate} />
  );

  const calendarButton = (
    <Button
      variant="control"
      aria-label="Toggle calendar"
      onClick={onClickCalendar}
    >
      <OutlinedCalendarAltIcon />
    </Button>
  );

  const onSubmitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (name && email && phone && date) {
      setButtonClicked(!buttonClicked);

      setAlerts((prevState) => {
        return [
          ...prevState,
          <Alert
            variant={AlertVariant["success"]}
            title="Thank You"
            actionClose={
              <AlertActionCloseButton
                variantLabel={`alert`}
                onClose={() => setAlerts([])}
              />
            }
          >
            The form is successfully Submitted
          </Alert>,
        ];
      });
    }
  };

  return (
    <div className='content'>
    <Form isWidthLimited onSubmit={ (e:React.FormEvent<HTMLFormElement>):void =>{e.preventDefault() 
    }} >
     <FormGroup
        label="Full name"
        isRequired
        fieldId="form-name-01"
        helperText={
          <FormHelperText
            icon={<ExclamationCircleIcon />}
            isHidden={validated! =="default"}
          >
          Enter your Full name
          </FormHelperText>
        }
        helperTextInvalid="Add the name field"
        helperTextInvalidIcon={<ExclamationCircleIcon />}
        validated={validated}
        labelIcon={
          <Popover
            headerContent={
              <div>
                The{" "}
                <a
                  href="https://schema.org/name"
                  target="_blank"
                  rel="noreferrer"
                >
                  name
                </a>{" "}
                of a{" "}
                <a
                  href="https://schema.org/Person"
                  target="_blank"
                  rel="noreferrer"
                >
                  Person
                </a>
              </div>
            }
            bodyContent={
              <div>
                Often composed of{" "}
                <a
                  href="https://schema.org/givenName"
                  target="_blank"
                  rel="noreferrer"
                >
                  givenName
                </a>{" "}
                and{" "}
                <a
                  href="https://schema.org/familyName"
                  target="_blank"
                  rel="noreferrer"
                >
                  familyName
                </a>
                .
              </div>
            }
          >
            <button
              type="button"
              aria-label="More info for name field"
              onClick={(e) => e.preventDefault()}
              aria-describedby="simple-form-name-01"
              className="pf-c-form__group-label-help"
            >
              <HelpIcon noVerticalAlign />
            </button>
          </Popover>
        }
      >
        <TextInput
          isRequired
          type="text"
          id="simple-form-name-01"
          name="simple-form-name-01"
          aria-describedby="simple-form-name-01-helper"
          value={name}
          validated={validated}
          onChange={handleNameChange}
        />
      </FormGroup>
       <FormGroup label="Email" isRequired fieldId="simple-form-email-01">
        <TextInput
          isRequired = {true}
          type="email"
          id="simple-form-email-01"
          name="simple-form-email-01"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup label="Phone number" isRequired fieldId="simple-form-phone-01">
        <TextInput
          isRequired
          type="tel"
          id="simple-form-phone-01"
          name="simple-form-phone-01"
          placeholder="555-555-5555"
          value={phone}
          onChange={handlePhoneChange}
        />
      </FormGroup>

    <FormGroup label="Date of birth" isRequired fieldId="simple-form-dateOfBirth-01">
    <Popover
            position="bottom"
            bodyContent={calendar}
            showClose={false}
            isVisible={isCalendarOpen}
            hasNoPadding
            hasAutoWidth
          >
         <InputGroup>
              <TextInput
                type="text"
                id="date"
                aria-label="date field"
                value={date}
              />
              {calendarButton}
         </InputGroup>
        </Popover>
     </FormGroup> 
     <ActionList>
          <ActionListItem>
            <Button variant="primary" type="submit" onClick={onSubmitHandler}>
              Submit
            </Button>
            <AlertGroup isToast isLiveRegion>
              {alerts}
            </AlertGroup>
          </ActionListItem>
        </ActionList>
    </Form>
    </div>
  );
}
