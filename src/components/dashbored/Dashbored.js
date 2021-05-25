import { useState } from 'react'
import Header from './Header';
import Modal from "./Modal";



function Dashbored() {

    const [modal, setmodal] = useState(false);
    const [modalInput, setmodalInput] = useState("")

    



    return (


        <div>

            <Modal show={modal} >
                <div className="card col-sm-7 " id="modal">
                    <div className="card-body">
                        <form>
                            <h5>Create New Workspace</h5>
                            <div className="form-group offset-1">
                                <label for="project-name">Workspace Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="project-name"

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
                                    onClick={(e) => { setmodalInput(e.target.value) }} >
                                    Create
                                   </button> 

                                <button
                                    type="button"
                                    id="button"
                                    className="btn btn-primary offset-1"
                                    onClick={() => { setmodal(false) }}
                                >
                                    Close
                </button>
                            </span>
                        </form>
                    </div>
                </div>
            </Modal>

            <nav className="navbar">
        
            <a className="navbar-brand" href="#">
             Data Processing Services
            </a>
      
            <button className ="btn" type="submit">
              <img className ="user"
                src="https://img.icons8.com/office/30/000000/change-user-male--v1.png"
              />
            </button>
        
          </nav>
      <Header/>


            <div className="background  ">
                <div className="col-md-4 cards ">
                    {/* <span>DPS Wrokspace</span> */}
                    <h3>Create New Workspace</h3>
                    <button className="btn mt-3 col-md-3" id="newbtn" onClick={() => { setmodal(true) }}   >New <i class="fas fa-chevron-down"></i> </button>
                </div>

                <div className=" cards mr-5 mt-5  pb-5 ">
                    <div className="row">
                        <div className="col-md-3 ">
                            <div className="card p-1 shadow" >
                                <div class="row m-0">
                                    <div class="col-md-4 p-3 ">
                                        <img src="./dataimg.jpg" className="imgFluid cardimage" />
                                    </div>
                                    <div class="col-md-8 " >
                                        <div class=" cardTitle font-weight-bold " >ingest</div>
                                        <div class=" cardSUbtitle" >Use the copy data tool to import data once or on a schedule</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-1 shadow">
                                <div class="row m-0">
                                    <div class="col-md-4 p-2">
                                        <img src="./dataimg.jpg" className="imgFluid cardimage" />
                                    </div>

                                    <div class="col-md-8 p-2">
                                        <div class=" cardTitle font-weight-bold " style={{ padding: '3%' }}>Explore</div>
                                        <div class=" cardSUbtitle " >Learn how to navigatye and interact with your data</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card shadow "  >
                                <div class="row m-0">
                                    <div class="col-md-4 p-3  justify-content-center align-items-center">
                                        <img src="./dataimg.jpg" className="imgFluid cardimage" />
                                    </div>
                                    <div class="col-md-8 p-2 " >
                                        <div class="cardTitle font-weight-bold " >Anayze</div>
                                        <div class="cardSUbtitle " >Learn how to use SQL or Spark to get insights from your data</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card  shadow" >
                                <div class="row m-0">
                                    <div class="col-md-4 p-3  ">
                                        <img src="./dataimg.jpg" className="imgFluid cardimage" />
                                    </div>
                                    <div class="col-md-8 p-2">
                                        <div class=" cardTitle font-weight-bold " style={{ padding: '3%' }}>Visualoze</div>
                                        <div class=" cardSUbtitle " >Build intercation with integrated Power BI capabilities</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>

                <div className="col-md-12 secondHalf">
                    <div className="row">
                        <div className="col-md-5 cards  ">
                            <h5 className="font-weight-bold mt-3 ">
                                Recent Projects
                            </h5>

                            <div className="row d-flex" style={{ borderBottom: '1px solid rgb(212,212,212)' }}>
                                <div className=" col-md-6">
                                    <p className="font-weight-bold mt-3  ml-5">NAME</p>
                                </div>
                                <div className="col-md-6 " style={{ borderLeft: '1px solid rgb(212,212,212)', borderRight: '1px solid rgb(212,212,212)' }}>
                                    <p className="font-weight-bold mt-3 ">LAST OPENED BY YOU</p>
                                </div>

                            </div>

                            <div style={{ borderBottom: '1px solid rgb(212,212,212)' }} className="row">
                                <div className="col-md-6 p-2" >
                                    <i class="far fa-file-alt"></i>
                                    <a href="#" className="ml-2">Notebook 1</a>
                                </div>
                                <div className="col-md-6 ">
                                    4 Days ago
                            </div>
                            </div>

                            <div style={{ borderBottom: '1px solid rgb(212,212,212)' }} className="row">
                                <div className="col-md-6 p-2" >
                                    <i class="far fa-file-alt"></i>
                                    <a href="#" className="ml-2">Notebook 1</a>
                                </div>
                                <div className="col-md-6 ">
                                    18 Days ago
                            </div>
                            </div>
                            <div style={{ borderBottom: '1px solid rgb(212,212,212)' }} className="row">
                                <div className="col-md-6 p-2" >
                                    <i class="far fa-file-alt"></i>
                                    <a href="#" className="ml-2">SQL Script 4</a>
                                </div>
                                <div className="col-md-6 ">
                                    18 Days ago
                            </div>
                            </div>
                            <div style={{ borderBottom: '1px solid rgb(212,212,212)' }} className="row">
                                <div className="col-md-6 p-2" >
                                    <i class="far fa-file-alt"></i>
                                    <a href="#" className="ml-2">Shared Metadata Examples</a>
                                </div>
                                <div className="col-md-6 ">
                                    18 Days ago
                            </div>
                            </div>
                            <div style={{ borderBottom: '1px solid rgb(212,212,212)' }} className="row">
                                <div className="col-md-6 p-2" >
                                    <i class="far fa-file-alt"></i>
                                    <a href="#" className="ml-2">Shared Metadata Examples</a>
                                </div>
                                <div className="col-md-6 ">
                                    4 Days ago
                            </div>
                            </div>
                            <div style={{ borderBottom: '1px solid rgb(212,212,212)' }} className="row">
                                <div className="col-md-6 p-2" >
                                    <i class="far fa-file-alt"></i>
                                    <a href="#" className="ml-2">Shared Metadata Examples</a>
                                </div>
                                <div className="col-md-6 ">
                                    18 Days ago
                            </div>
                            </div>
                            <div style={{ borderBottom: '1px solid rgb(212,212,212)' }} className="row">
                                <div className="col-md-6 p-2" >
                                    <i class="far fa-file-alt"></i>
                                    <a href="#" className="ml-2">Shared Metadata Examples</a>
                                </div>
                                <div className="col-md-6 ">
                                    18 Days ago
                            </div>
                            </div>
                            <div style={{ borderBottom: '1px solid rgb(212,212,212)' }} className="row">
                                <div className="col-md-6 p-2" >
                                    <i class="far fa-file-alt"></i>
                                    <a href="#" className="ml-2">Shared Metadata Examples</a>
                                </div>
                                <div className="col-md-6 ">
                                    18 Days ago
                            </div>
                            </div>
                            <div style={{ borderBottom: '1px solid rgb(212,212,212)' }} className="row">
                                <div className="col-md-6 p-2" >
                                    <i class="far fa-file-alt"></i>
                                    <a href="#" className="ml-2">Notebook 1</a>
                                </div>
                                <div className="col-md-6 ">
                                    18 Days ago
                            </div>
                            </div>








                        </div>
                        <div className="col-md-4 ml-3 ">
                            <h5 className="font-weight-bold mt-3 ">
                                Resources
                            </h5>
                            <p>Discover the capabilities offered by  synpasis and learn how to make the most
                                 of them Learn about precing details for synopsis capabilities Samples,Guide and  tour to get you started

                                 
                                 
                                 </p>




                            {/* <a className="mt-5">Getting Started</a>
                            <p>Samples,Guide and  tour to get you started</p>

                            <a className="mt-3">Synapse Analytics overview <i class="far fa-edit"></i></a>
                            <p>Discover the capabilities offered by  synpasis and learn how to make the most of them</p>


                            <a className="mt-3">Pricing <i class="far fa-edit"></i></a>
                            <p>Learn about precing details for synopsis capabilities</p>

                            <a className="mt-3">Documentation <i class="far fa-edit"></i></a>
                            <p>Visit the Documentation center for quickstart, how to guides, and reference for for powershell Apis</p>

                            <a className="mt-3">Give feedback <i class="far fa-edit"></i></a>
                            <p>Share your comments or suggestions with us to imporve the syspsis</p> */}




                        </div>


                    </div>


                </div>

            </div>














        </div>
    )
}

export default Dashbored
