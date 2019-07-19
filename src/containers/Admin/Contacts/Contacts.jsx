import React from "react";
import "./Contacts.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import TextInput from "../../../components/inputs/TextInput/TextInput";

const Contacts = ({ contacts, updateContacts }) => {
  return (
    <div className="Contacts">
      <TextInput value={contacts.location} changeHandler={value => updateContacts({ location: value })} label="Location" />
      <TextInput value={contacts.phone} changeHandler={value => updateContacts({ phone: value })} label="Phone" />
      <TextInput value={contacts.email} changeHandler={value => updateContacts({ email: value })} label="Email" />
      <TextInput value={contacts.github} changeHandler={value => updateContacts({ github: value })} label="Github" />
      <TextInput value={contacts.linkedIn} changeHandler={value => updateContacts({ linkedIn: value })} label="LinkedIn" />
    </div>
  );
};

const mapStateToProps = ({ contacts }) => ({ contacts: contacts.contacts });
const mapDispatchToProps = dispatch => {
  return {
    updateContacts: payload => dispatch(actions.updateContacts(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
