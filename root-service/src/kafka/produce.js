const { Kafka } = require("kafkajs")

const clientId = "root-app";

const brokers = ["kafka:9092"];

const topic = "message-log";

console.log("PRODUCER");

// initialize a new kafka client and initialize a producer from it
const kafka = new Kafka({ clientId, brokers });
const producer = kafka.producer();

const produce = async () => {
  await producer.connect();
  let i = 0;

  // after the produce has connected, we start an interval timer
  setInterval(async () => {
    try {
      await producer.send({
        topic,
        messages: [
          {
            key: String(i),
            value: "this is message " + i,
          },
        ],
      });

      // if the message is written successfully, log it and increment `i`
      console.log("writes: ", i);
      i++;
    } catch (err) {
      console.error("could not write message " + err)
    }
  }, 1000);
}


module.exports = { produce };
