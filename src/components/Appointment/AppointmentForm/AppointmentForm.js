import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");



const AppointmentForm = ({ modalIsOpen, closeModal,appointmentOn,date }) => {

  const {register,handleSubmit,formState: { errors },} = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h4 className="text-center">{appointmentOn}</h4>
        <h6 className="text-center">Appointment On {date.toDateString()}</h6>
        <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
            <div class="row mb-2">
                <div class="col">
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                </div>
            </div> 
            <div class="row mb-2">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Email" aria-label="Email"/>
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Phone" aria-label="Phone"/>
                </div>
            </div> 
            <div class="row mb-2">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Age" aria-label="Age"/>
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Weight" aria-label="Weight"/>
                </div>
            </div> 

            <select class="form-select" aria-label="Default select example">
                <option selected>Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
            </select>

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"></label>
                <textarea class="form-control" placeholder="Give us a note" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-outline-primary" type="button">Submit Appointment</button>
            </div>
        </form>

        {/* <form class="row g-3 needs-validation container" novalidate>
            <div class="col-md-4 position-relative">
                <label for="validationTooltip01" class="form-label">Your Full Name</label>
                <input type="text" class="form-control" id="validationTooltip01" value="" required/>
                <div class="valid-tooltip">
                Looks good!
                </div>
            </div>
            <div class="col-md-4 position-relative">
                <label for="validationTooltip02" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="validationTooltip02" value="" required/>
                <div class="valid-tooltip">
                Looks good!
                </div>
            </div>
            <div class="col-md-4 position-relative">
                <label for="validationTooltipUsername" class="form-label">Email Address</label>
                <div class="input-group has-validation">
                <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required/>
                <div class="invalid-tooltip">
                    Please choose a unique and valid username.
                </div>
                </div>
            </div>
            <div class="col-md-6 position-relative">
                <label for="validationTooltip03" class="form-label">Short Note</label>
                <input type="text" class="form-control" id="validationTooltip03" required/>
                <div class="invalid-tooltip">
                Please provide a valid city.
                </div>
            </div>
            <div class="col-md-3 position-relative">
                <label for="validationTooltip04" class="form-label">Select Gender</label>
                <select class="form-select" id="validationTooltip04" required>
                <option selected disabled value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                </select>
                <div class="invalid-tooltip">
                Please select a valid state.
                </div>
            </div>
            <div class="col-md-3 position-relative">
                <label for="validationTooltip05" class="form-label">Weight</label>
                <input type="text" class="form-control" id="validationTooltip05" required/>
                <div class="invalid-tooltip">
                Please provide a valid zip.
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form> */}
        
      </Modal>
    </div>
  );
};

export default AppointmentForm;
