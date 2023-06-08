import React, { useState } from 'react';
import Modal from 'react-modal';
import './Configurationstyle.css';
import { LuEdit } from 'react-icons/lu';

function ConfigurationButton({ setOwnPlatform }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClick = () => {
    setOwnPlatform(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleCloseClick = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button className="configuration-button" onClick={() => setModalIsOpen(true)}>
        Configuration
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Configuration Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2 className="modal-title">Settings</h2>
          <div className="content-container">
          <div className ="button-container">
          <button className="Add-Radar" onClick={handleClick}>
            Add Radar
          </button>
          <button className="Delete-Radar" onClick={handleClick}>
            Delete Radar
          </button>
          <button className="Add-AIS" onClick={handleClick}>
            Add AIS
          </button>
          <button className="Delete-AIS" onClick={handleClick}>
            Delete AIS
          </button>
          <button className="Add-ADSB" onClick={handleClick}>
            Add ADSB
          </button>
          <button className="Delete-ADSB" onClick={handleClick}>
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
                    Kafka<br />
                    Adress = <br />
                    Port = <br />
                    Topic=
                  </td>
                  <td>
                    <button className="Edit" onClick={handleClick}>
                      <LuEdit />
                    </button>
                    <button className="Export" onClick={handleClick}>
                      Export
                    </button>
                  </td>
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
    </div>
  );
}

export default ConfigurationButton;
