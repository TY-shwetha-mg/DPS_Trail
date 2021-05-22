import Modal from "./Modal";
import React, { Component } from "react";
import "../asset/Modal.css";

class ModalWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: "",
      modalInputName: "",
    };
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    this.setState({ name: this.state.modalInputName });
    // this.modalClose();
  }

  handleClose(e) {
    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modalInputName: "",
      modal: false,
    });
  }

  render() {
    return (
      <>
        <div className="modal-div col-sm-2">
          {/* <button
            type="button"
            class="btn btn-primary"
            onClick={(e) => this.modalOpen(e)}
          >
            New
          </button> */}
          
          <Modal
            show={this.state.modal}
            handleClose={(e) => this.modalClose(e)}
          >
            <div class="card col-sm-7">
              <div className="card-body">
                <form>
                  <h5>Create New Workspace</h5>
                  <div className="form-group offset-1">
                    <label for="project-name">Workspace Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="project-name"
                      defaultvalue={this.state.modalInputName}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                  <div className="form-group offset-1">
                    <label for="description">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                    />
                  </div>

                  <span>
                    <button
                      type="button"
                      id="button"
                      className="btn btn-primary"
                      onClick={(e) => this.handleSubmit(e)}
                    >
                      Create
                    </button>
                    <button
                      type="button"
                      id="button"
                      className="btn btn-light offset-1"
                      onClick={(e) => this.handleClose(e)}
                    >
                      Close
                    </button>
                  </span>
                </form>
              </div>
            </div>
          </Modal>
        </div>
      </>
    );
  }
}
export default ModalWindow;