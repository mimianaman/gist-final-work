import React from "react";
import useForm from "react-hook-form";

const MentorShipForm = () => {
  //handle form submission using the react hook form
  //console log to ensure u geting the data from the form

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`form-row bg-purple p-5`}
    >
      <div className="col-md-5 mx-5">
        <div className="row text-capitalize">
          <h1>mentorship form</h1>
        </div>
        <div>
          <label>Full Name</label>
          <input name="name" className="form-control" ref={register} />
        </div>
        <div className="form-group">
          <label>Email address:</label>
          <input name="email" className="form-control" ref={register} />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input name="phone" className="form-control" ref={register} />
        </div>

        <div className="form-group">
          <label>Profession:</label>
          <input name="occupation" className="form-control" ref={register} />
        </div>
      </div>
      <div className="col-md-5 mx-5 pt-5">
        <div className="form-group">
          <label>Place of Residence:</label>
          <input name="residence" className="form-control" ref={register} />
        </div>

        <div className="form-group">
          <label>Years of Experience:</label>
          <input
            name="yearsOfExperience"
            className="form-control"
            ref={register}
          />
        </div>
        <div className="form-group">
          <label>Why do you want to be a mentor ?</label>
          <input
            name="reasonOfMentorship"
            className="form-control"
            ref={register}
          />
        </div>
      </div>
      <input
        type="submit"
        title="submit"
        className="btn btn-info btn-lg mx-auto"
      />
    </form>
  );
};

export default MentorShipForm;
