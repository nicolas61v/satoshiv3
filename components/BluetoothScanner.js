import React, { useState } from "react";

const BluetoothConnection = () => {
  const [device, setDevice] = useState(null);
  const [error, setError] = useState(null);

  const requestDevice = async () => {
    try {
      const bluetooth = navigator.bluetooth;
      if (!bluetooth) {
        setError("Web Bluetooth not supported on this device");
        return;
      }
      const device = await bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ["fbba4179-b71a-4db7-8b48-6ff849aba480"],
      });
      setDevice(device);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const sendDataToDevice = async () => {
    // ...
  };

  return (
    <div>
      <button onClick={requestDevice}>Connect to device</button>
      <button onClick={sendDataToDevice}>Send data</button>
      {error && <p>Error: {error}</p>}
      {device && <p>Connected to {device.name}</p>}
    </div>
  );
};

export default BluetoothConnection;
