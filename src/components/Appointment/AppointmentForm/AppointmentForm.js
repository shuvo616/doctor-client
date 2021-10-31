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



const AppointmentForm = ({ modalIsOpen, closeModal,appointmentOn }) => {

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
        
      </Modal>
    </div>
  );
};

export default AppointmentForm;
