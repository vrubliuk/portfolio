import React from "react";
import "./General.scss";
import PageTitle from "../../../components/PageTitle/PageTitle";
import {connect} from "react-redux"

import TextInput from "../../../components/inputs/TextInput/TextInput";
import FileInput from "../../../components/inputs/FileInput/FileInput";

const General = ({general}) => {
  return <div className="General">
    <PageTitle title="General"/>
    <TextInput value={general.name} label="Name"/>
    <TextInput value={general.surname} label="Surname"/>
    <TextInput value={general.qualification} label="Qualification"/>
    <FileInput value={general.avatar} label="Avatar"/>
  
  </div>;
};

const mapStateToProps = ({profile}) => ({general: profile.general})

export default connect(mapStateToProps)(General);
