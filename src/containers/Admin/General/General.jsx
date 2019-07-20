import React from "react";
import "./General.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import ImageInput from "../../../components/inputs/ImageInput/ImageInput";

const General = ({ general, updateGeneral, putUserFile }) => {
  return (
    <div className="General">
      <TextInput label="Name" value={general.name} changeHandler={value => updateGeneral({ name: value })} />
      <TextInput label="Surname" value={general.surname} changeHandler={value => updateGeneral({ surname: value })} />
      <TextInput label="Qualification" value={general.qualification} changeHandler={value => updateGeneral({ qualification: value })} />
      <ImageInput
        label="Avatar"
        value={general.avatar}
        changeHandler={(value, file) => putUserFile("avatar", file)}
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
