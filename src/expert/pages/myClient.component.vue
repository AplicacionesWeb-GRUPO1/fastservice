<template>
  <div class="chat-container">
    <div class="chat-messages">
      <div v-for="(message, index) in messages" :key="index" class="chat-message">
        {{ message.text }}
      </div>
    </div>
    <div class="chat-input">
      <input v-model="newMessage" @keydown.enter="sendMessage" placeholder="Escribe un mensaje..." />
      <button @click="sendMessage">Enviar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeContent',
  data() {
    return {
      messages: [],
      newMessage: '',
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() === '') return;
      this.messages.push({ text: this.newMessage });
      this.newMessage = '';
    },
  },
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
}

.chat-messages {
  flex: 1;
  overflow-y: scroll;
}

.chat-message {
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
}

.chat-input {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}

.chat-input input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
}

.chat-input button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
}
</style>


