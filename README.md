# MyLagoonApp
// Goal

The YachtApp.ino program runs on my Seeed Xiao board, this program controls the board's LED with nRFConnect app.
But this board can also read an analog voltage between 0 and 3.3V. 
I'd like to create a program called YachApp.ino, which would retrieve this input voltage and display this value in the StarboardSensor.js page with the circular progress bar between 0 and 3.3V and display the value below instead of the value in kgs. 
I'd also like to add a button to Sensors.js to enable BLE scanning and connection. I'd also like to see a button on StarboardSensor.js that lets you measure the analog value when you click on it. 
If possible, below this button, record previous measurements to keep a history of the measurements taken. 
The application would have to be downloadable on Android and iOS, and the communication would have to be as reliable as possible.

// Seeed Xiao documentation nRF52840

https://how2electronics.com/getting-started-with-seeed-xiao-ble-nrf52840-sense/
https://how2electronics.com/send-receive-data-to-mobile-app-with-xiao-ble-nrf52840-sense/
https://wiki.seeedstudio.com/XIAO-BLE-Sense-Bluetooth-Usage/

// Amplifier

You have amplifier documentation for the analog input. This documentation is in pdf format in this folder.

