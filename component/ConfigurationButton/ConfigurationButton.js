import React, { useState } from 'react';
import Modal from 'react-modal';
import './Configurationstyle.css';
import { LuEdit } from 'react-icons/lu';
import axios from 'axios';


function ConfigurationButton({ setOwnPlatform }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [modal3IsOpen, setModal3IsOpen] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('');
  const [address, setAddress] = useState("");
  const [port, setPort] = useState("");
  const [topic, setTopic] = useState("");
  const [selectedConnection, setSelectedConnection] = useState("kafka");
  const [addRadar, setAddRadar] = useState(false);
  const [addAIS, setAddAIS] = useState(false);
  const [addADSB, setAddADSB] = useState(false);
  const [radars, setRadars] = useState([]); // Initialize the radars state as an empty array
  const [ais, setAIS] = useState([]); // Initialize the radars state as an empty array
  const [adsb, setADSB] = useState([]); // Initialize the radars state as an empty array
  
  
  const handleClick = () => {
    setOwnPlatform(false);
  };
  const handleCloseClick = () => {
    setModalIsOpen(false);
  };
  

  const handleEditClick = () => {
    setModal2IsOpen(true);
  };

  const handleCloseModal2 = () => {
    setModal2IsOpen(false);
  };
  const handleCloseModal3 = () => {
    setModal3IsOpen(false);
  };

  const handleConnectionChange = (event) => {
    setSelectedConnection(event.target.value);
    setModal2IsOpen(true);
  };
  
  
 {/* Button to add Radar */}
  const handleAddRadar = () => {
    if (addRadar < 3) {
      setAddRadar(addRadar + 1);
      setRadars([...radars, { number: addRadar + 1 }]); // Add a new radar object to the radars array
    }
  };

 {/* Button to delete Radar */}
  const handleDeleteRadar = () => {
    if (addRadar > 0) {
      setAddRadar(addRadar - 1);
      setRadars(radars.slice(0, addRadar - 1)); // Remove the last radar object from the radars array
    }
  };
  
  {/* Button to add AIS */}
  const handleAddAIS = () => {
    if (addAIS < 3) {
      setAddAIS(addAIS + 1);
      setAIS([...ais, { number: addAIS + 1 }]); // Add a new radar object to the radars array
    }
  };
  
  {/* Button to delete AIS */}
  const handleDeleteAIS = () => {
    if (addAIS > 0) {
      setAddAIS(addAIS - 1);
      setAIS(ais.slice(0, addAIS - 1)); // Remove the last radar object from the radars array
    }
  };

  {/* Button to add ADSB */}
  const handleAddADSB = () => {
    if (addADSB < 3) {
      setAddADSB(addADSB + 1);
      setADSB([...adsb, { number: addADSB + 1 }]); // Add a new radar object to the radars array
    }
  };

  {/* Button to delete ADSB */}
  const handleDeleteADSB = () => {
    if (addADSB > 0) {
      setAddADSB(addADSB - 1);
      setADSB(adsb.slice(0, addADSB - 1)); // Remove the last radar object from the radars array
    }
  };


  // Connect to kafka but not successfull
const handleConnectToKafka = () => {
  // Connect to Kafka using address, port, and topic
  axios
    .post('http://localhost:9092/', {
      address: address,
      port: port,
      topic: topic
    })
    .then((response) => {
      console.log(response);
      setConnectionStatus('Connected Successfully');
      setModal2IsOpen(false);
      setModal3IsOpen(true);
    })
    
    .catch((error) => {
      console.log(error);
      setConnectionStatus('Connection Failed');
      setModal2IsOpen(false);
      setModal3IsOpen(true);
    });
};


return (
  <div>
    <button className="configuration-button" onClick={() => setModalIsOpen(true)}>
      Configuration
    </button>

    {/* First Modal box */}
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseClick}
      contentLabel="Configuration Modal"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <h2 className="modal-title">Settings</h2>
        <div className="content-container">
          <div className="button-container">
            <button className="Add-Radar" onClick={handleAddRadar}>
              Add Radar
            </button>
            <button className="Delete-Radar" onClick={handleDeleteRadar}>
              Delete Radar
            </button>
            <button className="Add-AIS" onClick={handleAddAIS}>
              Add AIS
            </button>
            <button className="Delete-AIS" onClick={handleDeleteAIS}>
              Delete AIS
            </button>
            <button className="Add-ADSB" onClick={handleAddADSB}>
              Add ADSB
            </button>
            <button className="Delete-ADSB" onClick={handleDeleteADSB}>
              Delete ADSB
            </button>
          </div>
          <div className="configure-table-container">
            <table className="configuration-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Sensor Active</th>
                  <th>Update Rate</th>
                  <th>Connection</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Own Platform</td>
                  <td>10</td>
                  <td>
                    {/* Logic for connection details not added */}
                    <>
                      Kafka<br />
                      Address = {address} <br />
                      Port = {port} <br />
                      Topic = {topic}
                    </>
                  </td>
                  <td>
                    <div className="button-container">
                      <button className="Edit" onClick={handleEditClick}>
                        <LuEdit />
                      </button>
                      <button className="Export" onClick={handleClick}>
                        Export
                      </button>
                    </div>
                  </td>
                </tr>
                


                {/* Additional Radar rows */}
                {Array.from({ length: addRadar }, (_, index) => (
                  <tr key={index + 2}>
                    <td>{index + 2}</td>
                    <td>Radar {index + 1}</td>
                    <td>10</td>
                    <td>
                      Kafka<br />
                      Address = {address} <br />
                      Port = {port} <br />
                      Topic = {topic}
                    </td>
                    <td>
                      <div className="button-container">
                        <button className="Edit" onClick={handleEditClick}>
                          <LuEdit />
                        </button>
                        <button className="Export" onClick={handleClick}>
                          Export
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}


                {/* Additional ADD AIS rows */}
                {Array.from({ length: addAIS }, (_, index) => (
                  <tr key={index + 2 + addRadar}>
                    <td>{index + 2 + addRadar}</td>
                    <td>AIS {index + 1}</td>
                    <td>10</td>
                    <td>
                      Kafka<br />
                      Address = {address} <br />
                      Port = {port} <br />
                      Topic = {topic}
                    </td>
                    <td>
                      <div className="button-container">
                        <button className="Edit" onClick={handleEditClick}>
                          <LuEdit />
                        </button>
                        <button className="Export" onClick={handleClick}>
                          Export
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}


                {/* Additional ADSB rows */}
                {Array.from({ length: addADSB }, (_, index) => (
                  <tr key={index + 2 + addRadar + addAIS}>
                    <td>{index + 2 + addRadar + addAIS}</td>
                    <td>ADSB {index + 1}</td>
                    <td>10</td>
                    <td>
                      Kafka<br />
                      Address = {address} <br />
                      Port = {port} <br />
                      Topic = {topic}
                    </td>
                    <td>
                      <div className="button-container">
                        <button className="Edit" onClick={handleEditClick}>
                          <LuEdit />
                        </button>
                        <button className="Export" onClick={handleClick}>
                          Export
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {/* Rows */}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
       {/* Add Sensor Header and close button */}
        <div className="footer">
          <div className="rectangle-header"></div>
          <div className="rectangle-header-2"></div>
          <h2 className="modal-title-2">Sensors</h2>
          <button className="close-button" onClick={handleCloseClick}>
            Close
          </button>
        </div>
      </div>
    </Modal>
    {/* End of First Modal */}

    {/* Second Modal */}
    <Modal
      isOpen={modal2IsOpen}
      onRequestClose={handleCloseModal2}
      contentLabel="Edit-Modal"
      className="modal2nd"
      overlayClassName="modal-overlay-2nd"
    >
      {/* Button for close update and update rate */}
      <div className="modal-content-2nd">
        <button className="close-button-2nd" onClick={handleCloseModal2}>
          Cancel
        </button>
        <button className="update-button-2nd" onClick={handleConnectToKafka}>
          Update
        </button>
        <h2 className="modal-title-updaterate" value>
          Update Rate
        </h2>
        <h2 className="modal-title-connection">Connection</h2>

        {/* If Kafka is selected */}
        {selectedConnection === 'kafka' && (
          <>
            <h2 className="modal-title-Address-kafka">Address</h2>
            <h2 className="modal-title-Port-kafka">Port</h2>
            <h2 className="modal-title-Topic-kafka">Topic</h2>
            <div className="rectangle-header-connection"></div>
            <div className="rectange-header-updaterate"></div>
            <input type="text" className="sensor-name-kafka" placeholder=" " />
            <input type="text" className="sensor-name-2nd-kafka" placeholder="" />
            <input type="number" className="number-input-2nd-kafka" placeholder="" />

            <input
              type="text"
              className="adress-kafka"
              placeholder=""
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <input
              type="number"
              className="port-kafka"
              placeholder=""
              value={port}
              onChange={(e) => setPort(e.target.value)}
            />
            <input
              type="text"
              className="topic-kafka"
              placeholder=""
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </>
        )}
        {/* If UDP multicast is selected */}
        {selectedConnection === 'udp-multicast' && (
          <>
            <h2 className="modal-title-multicast-address">Multicast Group Address</h2>
            <h2 className="modal-title-multicast-group">Multicast Group Port</h2>

            <div className="rectangle-header-connection"></div>
            <div className="rectange-header-updaterate"></div>
            <input type="text" className="sensor-name-udp-multicast" placeholder="" />
            <input type="text" className="sensor-name-2nd-udp-multicast" placeholder="" />
            <input type="number" className="number-input-2nd-udp-multicast" placeholder="" />

            <input type="number" className="multicast-address" placeholder="" />
            <input type="number" className="multicast-port" placeholder="" />
          </>
        )}
        {/* If UDP is selected */}
        {selectedConnection === 'UDP' && (
          <>
            <h2 className="modal-title-multicast-address">Multicast Group Address</h2>
            <h2 className="modal-title-multicast-group">Multicast Group Port</h2>

            <div className="rectangle-header-connection"></div>
            <div className="rectange-header-updaterate"></div>
            <input type="text" className="sensor-name-udp" placeholder="" />
            <input type="text" className="sensor-name-2nd-udp" placeholder="" />
            <input type="number" className="number-input-2nd-udp" placeholder="" />

            <input type="number" className="multicast-address-udp" placeholder="" />
            <input type="number" className="multicast-port-udp" placeholder="" />
          </>
        )}
        {/* Select Connection */}
        <select className="select-input-2nd" value={selectedConnection} onChange={handleConnectionChange}>
          <option value="kafka">Kafka</option>
          <option value="udp-multicast">UDP Multicast</option>
          <option value="UDP">UDP</option>
        </select>
      </div>
    </Modal>
    {/* End of Second Modal */}

    {/* Third Modal */}
    <Modal
      isOpen={modal3IsOpen}
      onRequestClose={handleCloseModal3}
      contentLabel="Connection Status Modal"
      className="modal3rd"
      overlayClassName="modal-overlay-3rd"
    >
      <div className="modal-content-3rd">
        {connectionStatus === 'Connected Successfully' ? (
          <>
          {/* If connection is successful */}
            <h2 className="connection-status">Connected Successfully</h2>
            <div className="success-notification">
              <span>Connection established!</span>
            </div>
          </>
        ) : (
          <>
          {/* If connection is failed */}
            <h2 className="connection-status">Connection Failed</h2>
            <div className="error-notification">
              <span>Failed to establish connection!</span>
            </div>
          </>
        )}
      </div>
    </Modal>
    {/* End of Third Modal */}


  </div>

  );
};

export default ConfigurationButton;
 