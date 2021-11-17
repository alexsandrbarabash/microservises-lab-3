const { Kafka } = require("kafkajs")
const clientId = "root-app";
const brokers = ["kafka:9092"];
const topic = "message-log";

console.log("CONSUMER");

const kafka = new Kafka({ clientId, brokers });

const consumer = kafka.consumer({ groupId: clientId })

const consume = async () => {
  // first, we wait for the client to connect and subscribe to the given topic
  await consumer.connect()
  await consumer.subscribe({ topic })
  await consumer.run({
    eachMessage: ({ message }) => {
      console.log(`received message: ${message.value}`)
    },
  })
}

module.exports = { consume };