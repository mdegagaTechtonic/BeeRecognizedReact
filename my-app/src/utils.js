export function getAllRecognitionReceived(db, username) {
  const receivedRecognition = [];
  // for (let i = 0; i < db.length; i++) {
  for (let j = db.length-1; j >= 0; j--) {
    if (db[j].receiver.toLowerCase() === username.toLowerCase()) {
      receivedRecognition.push(db[j]);
    }
  }
  return receivedRecognition;
}

export function getRecentRecognition(db, username) {
  const received = getAllRecognitionReceived(db, username);
  if (received.length > 5) {
    const recentFive = received.slice(0, 5);
    return recentFive;
  }
  if (received.length <= 5) {
    return received;
  }
};

export function getAllRecognitionSent(db, username) {
  const sentRecognition = [];
  // for (let i = 0; i < db.length; i++) {
  for (let j = db.length-1; j >= 0; j--) {
    if (db[j].sender.toLowerCase() === username.toLowerCase()) {
      sentRecognition.push(db[j]);
    }
  }
  return sentRecognition;
};
