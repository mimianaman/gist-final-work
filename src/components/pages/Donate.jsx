import React from "react";
import volunteerImage from "../../images/volunteer.PNG";
import useForm from "react-hook-form";
import mtnMomoImage from "../../images/mtn.png";
import vodaMomoImage from "../../images/voda.png";

export const Donate = () => {
  // eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-6">
          <h3 className="text-center">Donate</h3>
          <h4 className="m-5">
            {" "}
            Giving is not just about making a donation , it is about making a
            difference. - Kathy Calvin
          </h4>
        </div>
        <div className="col-md-3">
          <img src={mtnMomoImage} alt="mtn momo" />
          <p className="pt-3">
            +(233) 54 3759 688 <br />
            Account Name (Ohemaa Adjei Asante)
          </p>
        </div>
        <div className="col-md-3">
          <img src={vodaMomoImage} alt="vodafone momo" />
          <p className="pt-5">
            +(233) 20 446 6965 <br />
            Account Name (Wilhemina S. Anaman)
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 animated infinite heartBeat">
          <img src={volunteerImage} alt="website logo" />
        </div>
        <div className="col-md-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`form-row bg-purple p-5`}
          >
            <div>
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
                <input
                  name="occupation"
                  className="form-control"
                  ref={register}
                />
              </div>
              <div>
                <div className="form-group">
                  <label>Are you above 18 ?:</label>
                  <input name="age" className="form-control" ref={register} />
                </div>

                <div className="form-group">
                  <label>Area of study:</label>
                  <input
                    name="areaOfStudy"
                    className="form-control"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <label>Any volunteer experience:</label>
                  <input
                    name="experience"
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donate;
