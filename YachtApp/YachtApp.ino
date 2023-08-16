#include <ArduinoBLE.h>

const int analogPin = A0; // Pin de l'entrée analogique A0

BLEService service("19B10000-E8F2-537E-4F6C-D104768A1214"); // Service UUID (à remplacer par votre propre UUID)
BLECharacteristic valueCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLENotify, 4); // Characteristic UUID (à remplacer par votre propre UUID)

void setup() {
  Serial.begin(9600);

  // Initialisez le service BLE et la caractéristique
  BLE.begin();
  BLE.setLocalName("SeeedXiao"); // Nom de l'appareil BLE (à personnaliser)
  BLE.setAdvertisedService(service);
  service.addCharacteristic(valueCharacteristic);
  BLE.addService(service);

  // Commencez à diffuser l'annonce BLE
  BLE.advertise();

  Serial.println("Attente de la connexion BLE...");
}

void loop() {
  // Vérifiez s'il y a une connexion BLE
  BLEDevice central = BLE.central();
  
  // Si une connexion est établie
  if (central) {
    Serial.print("Connecté à : ");
    Serial.println(central.address());

    while (central.connected()) {
      // Lisez la valeur analogique sur A0
      int load  = analogRead(analogPin);
      //int load=map(analogValue, 150, 1023,0, 4375);

      // Convertir la valeur analogique en tableau d'octets
      byte valueBytes[4];
      valueBytes[0] = (byte)(load & 0xFF);
      valueBytes[1] = (byte)((load >> 8) & 0xFF);
      valueBytes[2] = (byte)((load >> 16) & 0xFF);
      valueBytes[3] = (byte)((load >> 24) & 0xFF);

      // Mettez à jour la valeur de la caractéristique BLE
      valueCharacteristic.writeValue(valueBytes, sizeof(valueBytes));

      // Affichez la valeur analogique lue sur le moniteur série
      Serial.print("Valeur analogique : ");
      Serial.println(load);

      // Délai pour éviter d'envoyer trop fréquemment les données
      delay(100);
    }

    Serial.println("Connexion perdue.");
  }
}
