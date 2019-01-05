import React from "react";
import "./Contacts.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import TextInput from "../../../components/inputs/TextInput/TextInput";

const Contacts = ({contacts, setContacts, saveContacts}) => {

  const handleChange = (payload) => {
    setContacts(payload)
    saveContacts()
  }

  return <div className="Contacts">
    <TextInput value={contacts.location} changeHandler={value => handleChange({ location: value })} label="Location" />
    <TextInput value={contacts.phone} changeHandler={value => handleChange({ phone: value })} label="Phone" />
    <TextInput value={contacts.email} changeHandler={value => handleChange({ email: value })} label="Email" />
    <TextInput value={contacts.github} changeHandler={value => handleChange({ github: value })} label="Github" />
    <TextInput value={contacts.linkedIn} changeHandler={value => handleChange({ linkedIn: value })} label="LinkedIn" />
  
  </div>;
};

const mapStateToProps = ({ contacts}) => ({ contacts: contacts.contacts });
const mapDispatchToProps = dispatch => {
  return {
    setContacts: payload => dispatch(actions.setContacts(payload)),
    saveContacts: () => dispatch(actions.saveContacts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
