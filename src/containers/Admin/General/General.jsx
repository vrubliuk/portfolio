import React from "react";
import "./General.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import FileInput from "../../../components/inputs/FileInput/FileInput";

const General = ({ general, updateGeneral, putUserFile }) => {
  const avatarFileName = general.avatar.split(/\\|\//).pop();

  return (
    <div className="General">
      <TextInput label="Name" value={general.name} changeHandler={value => updateGeneral({ name: value })} />
      <TextInput label="Surname" value={general.surname} changeHandler={value => updateGeneral({ surname: value })} />
      <TextInput label="Qualification" value={general.qualification} changeHandler={value => updateGeneral({ qualification: value })} />
      <FileInput
        fileName={avatarFileName}
        label="Avatar"
        changeHandler={file => putUserFile("avatar", file)}
        removeHandler={() => updateGeneral({ avatar: "" })}
      />
    </div>
  );
};

const mapStateToProps = ({ general }) => ({ general: general.general });
const mapDispatchToProps = dispatch => {
  return {
    updateGeneral: payload => dispatch(actions.updateGeneral(payload)),
    putUserFile: (field, payload) => dispatch(actions.putUserFile(field, payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(General);
