import React from 'react';
import PropTypes from 'prop-types';
import FullNameInput from '../FullNameInput';
import EmailInput from '../EmailInput';
import PhoneInput from '../PhoneInput';
import SubmitButton from '../SubmitButton';
import HiddenInput from '../HiddenInput';

/** LeadForm */
function LeadForm({action, className, htmlId, method, name, fullNameOnChange, emailOnChange, phoneOnChange}) {
  return (
    <form action={action} className={className} id={htmlId} method={method} name={name}>
      <FullNameInput htmlId="leadFormFullname" onChange={fullNameOnChange}/>
      <EmailInput htmlId="leadFormEmail" onChange={emailOnChange}/>
      <PhoneInput htmlId="leadFormPhone" onChange={phoneOnChange}/>

      <HiddenInput name="creative_id"/>
      <HiddenInput name="campaignid"/>
      <HiddenInput name="utm_source"/>
      <HiddenInput name="SessionId"/>

      <HiddenInput name="DesiredState"/>
      <HiddenInput name="DesiredCity"/>
      <HiddenInput name="DesiredZip"/>
      <HiddenInput name="DesiredCountry"/>

      <HiddenInput name="SourceId"/>
      <HiddenInput name="SubsourceId"/>
      <HiddenInput name="Form_url"/>
      <HiddenInput name="Referrer_url"/>
      <HiddenInput name="Form_id"/>

      <HiddenInput name="inputLocation"/>
      <HiddenInput name="inputMileRadius"/>
      <HiddenInput name="inputRoomType"/>
      <HiddenInput name="inputBudget"/>
      <HiddenInput name="authenticity_token"/>
      <HiddenInput name="DesiredCareType"/>

      <SubmitButton className="submit-btn" label="Request info" iconClassName="fa icon-chevron-right"/>
    </form>
  );
}

LeadForm.propTypes = {
  /** Action for the form */
  action: PropTypes.string.isRequired,

  /** Form ClassName */
  className: PropTypes.string,

  /** Form htmlId */
  htmlId: PropTypes.string,

  /** Form Method */
  method: PropTypes.oneOf(['post', 'get']),

  /** Form Name */
  name: PropTypes.string,

  /** Function called when fullName input value changes */
  fullNameOnChange: PropTypes.func,

  /** Function called when Email input value changes */
  emailOnChange: PropTypes.func,

  /** Function called when Phone input value changes */
  phoneOnChange: PropTypes.func,

};

export default LeadForm;
