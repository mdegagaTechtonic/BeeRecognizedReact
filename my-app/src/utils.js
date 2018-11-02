export function getAllRecognitionReceived(db, username) {
  var receivedRecognition = [];
  for (var i = 0; i < db.length; i++) {
    if (db[i].receiver.toLowerCase() === username.toLowerCase()) {
      receivedRecognition.push(db[i]);
    }
  }
  return receivedRecognition;
}

export function getRecentRecognition(db, username) {
  var received = getAllRecognitionReceived(db, username);
  if (received.length > 5) {
    var recentFive = received.slice(0, 5);
    return recentFive;
  }
  if (received.length <= 5) {
    return received;
  }
};

export function getAllRecognitionSent(db, username) {
  var sentRecognition = [];
  for (var i = 0; i < db.length; i++) {
    if (db[i].sender.toLowerCase() === username.toLowerCase()) {
      sentRecognition.push(db[i]);
    }
  }
  return sentRecognition;
};
